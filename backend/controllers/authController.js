import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/* ============================================================
   SIGNUP — Create New User
   ============================================================ */
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // Validate required fields
    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "fullName, email, and password are required."
      });
    }

    // Check if email exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role: role || "viewer"
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Signup failed",
      error: error.message
    });
  }
};


/* ============================================================
   SIGNIN — Login User
   ============================================================ */
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid password" });

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Signin successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Signin failed",
      error: error.message
    });
  }
};


/* ============================================================
   SIGNOUT
   ============================================================ */
export const signout = (req, res) => {
  try {
    return res.status(200).json({
      message: "Signout successful"
    });
  } catch (error) {
    res.status(500).json({
      message: "Signout failed",
      error: error.message
    });
  }
};
