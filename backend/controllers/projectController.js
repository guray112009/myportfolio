import mongoose from "mongoose";
import Project from "../models/Project.js";

// Helper: validate ObjectId
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// =======================================
// GET /api/projects
// Get all projects
// =======================================
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error("Error getting projects:", error.message);
    res.status(500).json({ message: "Server error getting projects" });
  }
};

// =======================================
// GET /api/projects/:id
// Get one project by id
// =======================================
export const getProjectById = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid project ID" });
  }

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    console.error("Error getting project:", error.message);
    res.status(500).json({ message: "Server error getting project" });
  }
};

// =======================================
// POST /api/projects
// Add new project
// =======================================
export const createProject = async (req, res) => {
  const { title, firstname, lastname, email, completion, description } = req.body;

  if (!title || !firstname || !lastname || !email || !completion || !description) {
    return res.status(400).json({
      message:
        "title, firstname, lastname, email, completion and description are required",
    });
  }

  try {
    const newProject = await Project.create({
      title,
      firstname,
      lastname,
      email,
      completion,
      description,
    });

    res.status(201).json(newProject);
  } catch (error) {
    console.error("Error creating project:", error.message);
    res.status(500).json({ message: "Server error creating project" });
  }
};

// =======================================
// PUT /api/projects/:id
// Update project by id
// =======================================
export const updateProject = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid project ID" });
  }

  try {
    const updated = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(updated);
  } catch (error) {
    console.error("Error updating project:", error.message);
    res.status(500).json({ message: "Server error updating project" });
  }
};

// =======================================
// DELETE /api/projects/:id
// Delete one project by id
// =======================================
export const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid project ID" });
  }

  try {
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error.message);
    res.status(500).json({ message: "Server error deleting project" });
  }
};

// =======================================
// DELETE /api/projects
// Delete ALL projects
// =======================================
export const deleteAllProjects = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    res.json({
      message: "All projects removed",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting all projects:", error.message);
    res.status(500).json({ message: "Server error deleting all projects" });
  }
};
