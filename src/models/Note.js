import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    colorTag: {
      type: String,
      default: "purple",
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    relatedChapters: [
      {
        id: { type: String, required: true },
        title: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);
