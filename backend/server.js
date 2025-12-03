import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import qualificationRoutes from "./routes/qualificationRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ============================
// Connect MongoDB
// ============================
connectDB();

// ============================
// API TEST ROUTE
// ============================
app.get("/api", (req, res) => {
  res.send("Portfolio Backend API is running...");
});

// ============================
// API ROUTES
// ============================
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/services", serviceRoutes);

// =====================================================================
// STATIC FRONTEND SERVING (EXPRESS v5 SAFE VERSION)
// =====================================================================

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React frontend build
app.use(express.static(path.join(__dirname, "../client/build")));

// ⭐ FIXED WILDCARD (DOES NOT BLOCK /api ROUTES)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// ============================
// START SERVER
// ============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
