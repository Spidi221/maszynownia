import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Import content data from the files created in Phase 2
import * as emsContent from "../../client/client/src/content/emsContent";
import * as strefaContent from "../../client/client/src/content/strefaContent";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // API endpoint to serve content for the EMS page
  app.get("/api/content/ems", (req, res) => {
    res.json(emsContent);
  });

  // API endpoint to serve content for the Strefa Gimnastyki page
  app.get("/api/content/strefa", (req, res) => {
    res.json(strefaContent);
  });


  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
