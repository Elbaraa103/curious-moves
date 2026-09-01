import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON payload parser for base64 image saving
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // API route to get avatar
  app.get("/api/avatar", (req, res) => {
    const avatarPath = path.join(publicDir, "dilan-avatar.jpg");
    if (fs.existsSync(avatarPath)) {
      res.setHeader("Content-Type", "image/jpeg");
      res.setHeader("Cache-Control", "public, max-age=3600");
      return fs.createReadStream(avatarPath).pipe(res);
    }
    return res.status(404).json({ error: "No avatar saved" });
  });

  // API route to save uploaded avatar permanently to server disk for ALL shared users
  app.post("/api/avatar", (req, res) => {
    try {
      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ error: "Missing imageBase64" });
      }
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const avatarPath = path.join(publicDir, "dilan-avatar.jpg");
      fs.writeFileSync(avatarPath, buffer);

      // Also copy to dist if dist exists
      const distDir = path.join(process.cwd(), "dist");
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, "dilan-avatar.jpg"), buffer);
      }

      return res.json({ success: true, url: "/api/avatar" });
    } catch (err: any) {
      console.error("Avatar save error:", err);
      return res.status(500).json({ error: err.message });
    }
  });

  // Ensure yoga gallery public directory exists
  const yogaGalleryDir = path.join(publicDir, "yoga-gallery");
  if (!fs.existsSync(yogaGalleryDir)) {
    fs.mkdirSync(yogaGalleryDir, { recursive: true });
  }

  // Get available yoga gallery photos
  app.get("/api/yoga-gallery", (req, res) => {
    try {
      if (!fs.existsSync(yogaGalleryDir)) {
        return res.json({ photos: [] });
      }
      const files = fs.readdirSync(yogaGalleryDir).filter(f => f.endsWith(".jpg") || f.endsWith(".png") || f.endsWith(".jpeg"));
      const photoIds = files.map(f => path.parse(f).name);
      return res.json({ photos: photoIds });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // Get specific yoga gallery photo
  app.get("/api/yoga-gallery/:id", (req, res) => {
    const { id } = req.params;
    const cleanId = id.replace(/[^a-zA-Z0-9_-]/g, "");
    const photoPath = path.join(yogaGalleryDir, `${cleanId}.jpg`);
    if (fs.existsSync(photoPath)) {
      res.setHeader("Content-Type", "image/jpeg");
      res.setHeader("Cache-Control", "public, max-age=3600");
      return fs.createReadStream(photoPath).pipe(res);
    }
    return res.status(404).json({ error: "Photo not found" });
  });

  // Save yoga gallery photo
  app.post("/api/yoga-gallery/:id", (req, res) => {
    try {
      const { id } = req.params;
      const cleanId = id.replace(/[^a-zA-Z0-9_-]/g, "");
      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ error: "Missing imageBase64" });
      }
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const photoPath = path.join(yogaGalleryDir, `${cleanId}.jpg`);
      fs.writeFileSync(photoPath, buffer);

      // Also copy to dist if dist exists
      const distYogaDir = path.join(process.cwd(), "dist", "yoga-gallery");
      if (fs.existsSync(path.join(process.cwd(), "dist"))) {
        if (!fs.existsSync(distYogaDir)) {
          fs.mkdirSync(distYogaDir, { recursive: true });
        }
        fs.writeFileSync(path.join(distYogaDir, `${cleanId}.jpg`), buffer);
      }

      return res.json({ success: true, url: `/api/yoga-gallery/${cleanId}?t=${Date.now()}` });
    } catch (err: any) {
      console.error("Yoga gallery save error:", err);
      return res.status(500).json({ error: err.message });
    }
  });

  // Get custom yoga gallery items
  app.get("/api/yoga-gallery-items", (req, res) => {
    try {
      const jsonPath = path.join(yogaGalleryDir, "gallery-items.json");
      if (fs.existsSync(jsonPath)) {
        const raw = fs.readFileSync(jsonPath, "utf-8");
        return res.json(JSON.parse(raw));
      }
      return res.json([]);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // Save/Update custom yoga gallery items
  app.post("/api/yoga-gallery-items", (req, res) => {
    try {
      const items = req.body;
      const jsonPath = path.join(yogaGalleryDir, "gallery-items.json");
      fs.writeFileSync(jsonPath, JSON.stringify(items, null, 2));

      // Also copy to dist if exists
      const distJsonPath = path.join(process.cwd(), "dist", "yoga-gallery", "gallery-items.json");
      if (fs.existsSync(path.join(process.cwd(), "dist", "yoga-gallery"))) {
        fs.writeFileSync(distJsonPath, JSON.stringify(items, null, 2));
      }

      return res.json({ success: true, count: items.length });
    } catch (err: any) {
      console.error("Gallery items save error:", err);
      return res.status(500).json({ error: err.message });
    }
  });

  // Delete specific photo from gallery
  app.delete("/api/yoga-gallery/:id", (req, res) => {
    try {
      const { id } = req.params;
      const cleanId = id.replace(/[^a-zA-Z0-9_-]/g, "");
      const photoPath = path.join(yogaGalleryDir, `${cleanId}.jpg`);
      if (fs.existsSync(photoPath)) {
        fs.unlinkSync(photoPath);
      }
      return res.json({ success: true });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // Serve static public folder
  app.use(express.static(publicDir));

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
