import express from "express";
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts,
} from "../controllers/contactController.js";

import { verifyToken, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * ================================
 * PUBLIC ROUTES
 * ================================
 */

// Anyone can submit a contact message (Frontend contact form)
router.post("/", createContact);

/**
 * ================================
 * ADMIN-ONLY ROUTES (Protected)
 * ================================
 */

// Admin: Get all contacts
router.get("/", verifyToken, requireAdmin, getAllContacts);

// Admin: Get a single contact
router.get("/:id", verifyToken, requireAdmin, getContactById);

// Admin: Update a contact
router.put("/:id", verifyToken, requireAdmin, updateContact);

// Admin: Delete a single contact
router.delete("/:id", verifyToken, requireAdmin, deleteContact);

// Admin: Delete ALL contacts
router.delete("/", verifyToken, requireAdmin, deleteAllContacts);

export default router;
