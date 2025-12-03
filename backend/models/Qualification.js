import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema(
  {
    school: {                // 🔥 changed from title → school
      type: String,
      required: true,
      trim: true,
    },
    program: {               // 🔥 changed from institution → program
      type: String,
      required: true,
      trim: true,
    },
    year: {                  // stays the same
      type: String,
      required: true,
      trim: true,
    },
    description: {           // stays the same
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Qualification = mongoose.model("Qualification", qualificationSchema);

export default Qualification;
