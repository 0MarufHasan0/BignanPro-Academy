import { Schema, model, Document } from "mongoose";

export interface INote extends Document {
  email: string;
  title: string;
  content: string;
  colorTag: string;
  timestamp: Date;
  relatedChapters: { id: string; title: string }[];
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new Schema<INote>(
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
  }
);

export const Note = model<INote>("Note", NoteSchema);
