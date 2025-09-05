import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "..",
        "client",
        "client", 
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Optimized static file serving with caching
  app.use(express.static(distPath, {
    // Enable ETag generation for better caching
    etag: true,
    // Last-Modified header
    lastModified: true,
    // Cache static assets for longer periods
    setHeaders: (res, path) => {
      const isAssetFile = /\.(js|css|woff2?|ttf|eot|webp|png|jpe?g|svg|ico)$/i.test(path);
      const isFont = /\.(woff2?|ttf|eot)$/i.test(path);
      const isImage = /\.(webp|png|jpe?g|svg|ico)$/i.test(path);
      const isJS = /\.js$/i.test(path);
      const isCSS = /\.css$/i.test(path);
      
      if (isAssetFile) {
        // Long cache for hashed assets (1 year)
        if (/-[a-f0-9]{8,}\./i.test(path)) {
          res.set('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (isFont) {
          // Fonts cached for 1 year
          res.set('Cache-Control', 'public, max-age=31536000');
        } else if (isImage) {
          // Images cached for 1 month
          res.set('Cache-Control', 'public, max-age=2592000');
        } else if (isJS || isCSS) {
          // JS/CSS cached for 1 day if no hash
          res.set('Cache-Control', 'public, max-age=86400');
        }
      } else {
        // Short cache for HTML files
        res.set('Cache-Control', 'public, max-age=3600');
      }
    }
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
