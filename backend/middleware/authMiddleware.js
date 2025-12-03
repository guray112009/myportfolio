import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

// ================================
// VERIFY JWT TOKEN
// ================================
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.headers["authorization"];

    if (!token)
      return res.status(401).json({ message: "No token provided" });

    // Token format: "Bearer xyz..."
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trim();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // store user info

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// ================================
// ALLOW ONLY ADMIN
// ================================
export const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};
