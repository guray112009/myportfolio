import express from "express";
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  deleteAllServices
} from "../controllers/serviceController.js";

const router = express.Router();

// GET all services
router.get("/", getAllServices);

// GET single service
router.get("/:id", getServiceById);

// CREATE service
router.post("/", createService);

// UPDATE service
router.put("/:id", updateService);

// DELETE one service
router.delete("/:id", deleteService);

// DELETE all (optional)
router.delete("/", deleteAllServices);

export default router;
