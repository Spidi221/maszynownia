/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client", "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Force cache invalidation with unique build ID
    sourcemap: false,
    // Advanced optimization settings
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-tooltip', '@radix-ui/react-toast'],
          router: ['wouter'],
          icons: ['lucide-react']
        },
        // Asset file naming with content hash + timestamp
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          let extType = info[info.length - 1];
          const timestamp = Date.now();
          
          // Optimize image assets
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          } else if (/woff2?|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          
          return `assets/${extType}/[name]-${timestamp}-[hash][extname]`;
        },
        chunkFileNames: `assets/js/[name]-${Date.now()}-[hash].js`,
        entryFileNames: `assets/js/[name]-${Date.now()}-[hash].js`,
      },
    },
    // Performance optimizations
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
      },
    },
    // Image optimization settings
    assetsInlineLimit: 2048, // 2KB limit for inlining
  },
  // Asset processing
  assetsInclude: ['**/*.webp', '**/*.avif'],
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    alias: {
      // Mocking static assets for Vitest
      '~@/assets': path.resolve(import.meta.dirname, 'client/client/src/assets'),
    },
  },
});
