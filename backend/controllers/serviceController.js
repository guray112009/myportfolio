import mongoose from "mongoose";
import Service from "../models/Service.js";

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// ================================
// GET ALL SERVICES
// ================================
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (error) {
    console.error("Error getting services:", error.message);
    res.status(500).json({ message: "Server error getting services" });
  }
};

// ================================
// GET SINGLE SERVICE
// ================================
export const getServiceById = async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) return res.status(400).json({ message: "Invalid ID" });

  try {
    const service = await Service.findById(id);
    if (!service) return res.status(404).json({ message: "Service not found" });

    res.json(service);
  } catch (error) {
    console.error("Error getting service:", error.message);
    res.status(500).json({ message: "Server error getting service" });
  }
};

// ================================
// CREATE SERVICE
// ================================
export const createService = async (req, res) => {
  const { title, subtitle, description, category, image, icon } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "title and description are required" });
  }

  try {
    const newService = await Service.create({
      title,
      subtitle,
      description,
      category,
      image,
      icon,
    });

    res.status(201).json(newService);
  } catch (error) {
    console.error("Error creating service:", error.message);
    res.status(500).json({ message: "Server error creating service" });
  }
};

// ================================
// UPDATE SERVICE
// ================================
export const updateService = async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) return res.status(400).json({ message: "Invalid ID" });

  try {
    const updated = await Service.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated)
      return res.status(404).json({ message: "Service not found" });

    res.json(updated);
  } catch (error) {
    console.error("Error updating service:", error.message);
    res.status(500).json({ message: "Server error updating service" });
  }
};

// ================================
// DELETE SERVICE
// ================================
export const deleteService = async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) return res.status(400).json({ message: "Invalid ID" });

  try {
    const deleted = await Service.findByIdAndDelete(id);

    if (!deleted)
      return res.status(404).json({ message: "Service not found" });

    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Error deleting service:", error.message);
    res.status(500).json({ message: "Server error deleting service" });
  }
};

// ================================
// DELETE ALL SERVICES
// ================================
export const deleteAllServices = async (req, res) => {
  try {
    const result = await Service.deleteMany({});
    res.json({
      message: "All services deleted",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting all services:", error.message);
    res.status(500).json({ message: "Server error deleting all services" });
  }
};
