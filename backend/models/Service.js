import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, trim: true },
    description: { type: String, required: true, trim: true },
    category: { type: String, default: "General" },
    image: { type: String, default: "" },
    icon: { type: String, default: "" }
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);

export default Service;
