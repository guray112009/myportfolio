import express from "express";
import { signup, signin, signout } from "../controllers/authController.js";

const router = express.Router();

// ========================
// AUTH ROUTES
// ========================

// Signup route
router.post("/signup", signup);

// Signin route
router.post("/signin", signin);

// Signout route
router.post("/signout", signout);

export default router;
