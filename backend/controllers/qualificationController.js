import mongoose from "mongoose";
import Qualification from "../models/Qualification.js";

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// =======================================
// GET ALL
// =======================================
export const getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find().sort({ createdAt: -1 });
    res.json(qualifications);
  } catch (error) {
    console.error("Error getting qualifications:", error.message);
    res.status(500).json({ message: "Server error getting qualifications" });
  }
};

// =======================================
// GET ONE
// =======================================
export const getQualificationById = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid qualification ID" });
  }

  try {
    const qualification = await Qualification.findById(id);
    if (!qualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }
    res.json(qualification);
  } catch (error) {
    console.error("Error getting qualification:", error.message);
    res.status(500).json({ message: "Server error getting qualification" });
  }
};

// =======================================
// CREATE
// =======================================
export const createQualification = async (req, res) => {
  const { title, institution, year, description } = req.body;

  if (!title || !institution || !year || !description) {
    return res.status(400).json({
      message: "title, institution, year and description are required",
    });
  }

  try {
    const newQualification = await Qualification.create({
      title,
      institution,
      year,
      description,
    });

    res.status(201).json(newQualification);
  } catch (error) {
    console.error("Error creating qualification:", error.message);
    res.status(500).json({ message: "Server error creating qualification" });
  }
};

// =======================================
// UPDATE
// =======================================
export const updateQualification = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid qualification ID" });
  }

  try {
    const updated = await Qualification.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    res.json(updated);
  } catch (error) {
    console.error("Error updating qualification:", error.message);
    res.status(500).json({ message: "Server error updating qualification" });
  }
};

// =======================================
// DELETE ONE
// =======================================
export const deleteQualification = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid qualification ID" });
  }

  try {
    const deleted = await Qualification.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    res.json({ message: "Qualification deleted successfully" });
  } catch (error) {
    console.error("Error deleting qualification:", error.message);
    res.status(500).json({ message: "Server error deleting qualification" });
  }
};

// =======================================
// DELETE ALL
// =======================================
export const deleteAllQualifications = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    res.json({
      message: "All qualifications removed",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting all qualifications:", error.message);
    res.status(500).json({ message: "Server error deleting all qualifications" });
  }
};
