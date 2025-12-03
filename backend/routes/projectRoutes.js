import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  deleteAllProjects,
} from "../controllers/projectController.js";

const router = express.Router();

// GET all projects
router.get("/", getAllProjects);

// GET one project by id
router.get("/:id", getProjectById);

// POST new project
router.post("/", createProject);

// PUT update project by id
router.put("/:id", updateProject);

// DELETE project by id
router.delete("/:id", deleteProject);

// DELETE all projects
router.delete("/", deleteAllProjects);

export default router;
