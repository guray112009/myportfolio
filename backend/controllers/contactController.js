import mongoose from "mongoose";
import Contact from "../models/Contact.js";

// Helper: validate ObjectId
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// =========================
// GET /api/contacts
// Get all contacts
// =========================
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Error getting contacts:", error.message);
    res.status(500).json({ message: "Server error getting contacts" });
  }
};

// =========================
// GET /api/contacts/:id
// Get one contact by id
// =========================
export const getContactById = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid contact ID" });
  }

  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    console.error("Error getting contact:", error.message);
    res.status(500).json({ message: "Server error getting contact" });
  }
};

// =========================
// POST /api/contacts
// Add new contact
// =========================
export const createContact = async (req, res) => {
  const { firstname, lastname, email } = req.body;

  if (!firstname || !lastname || !email) {
    return res
      .status(400)
      .json({ message: "firstname, lastname and email are required" });
  }

  try {
    const newContact = await Contact.create({ firstname, lastname, email });
    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error.message);
    res.status(500).json({ message: "Server error creating contact" });
  }
};

// =========================
// PUT /api/contacts/:id
// Update contact by id
// =========================
export const updateContact = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid contact ID" });
  }

  try {
    const updated = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(updated);
  } catch (error) {
    console.error("Error updating contact:", error.message);
    res.status(500).json({ message: "Server error updating contact" });
  }
};

// =========================
// DELETE /api/contacts/:id
// Remove contact by id
// =========================
export const deleteContact = async (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid contact ID" });
  }

  try {
    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error.message);
    res.status(500).json({ message: "Server error deleting contact" });
  }
};

// =========================
// DELETE /api/contacts
// Remove ALL contacts
// =========================
export const deleteAllContacts = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});
    res.json({
      message: "All contacts removed",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting all contacts:", error.message);
    res.status(500).json({ message: "Server error deleting all contacts" });
  }
};
