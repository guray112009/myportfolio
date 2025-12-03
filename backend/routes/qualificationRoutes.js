import express from "express";
import {
  getAllQualifications,
  getQualificationById,
  createQualification,
  updateQualification,
  deleteQualification,
  deleteAllQualifications,
} from "../controllers/qualificationController.js";

const router = express.Router();

// GET all
router.get("/", getAllQualifications);

// GET one
router.get("/:id", getQualificationById);

// POST create
router.post("/", createQualification);

// PUT update
router.put("/:id", updateQualification);

// DELETE one
router.delete("/:id", deleteQualification);

// DELETE all
router.delete("/", deleteAllQualifications);

export default router;
