import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { User } from "./models/User";
import { Note } from "./models/Note";
import crypto from "crypto";

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/bignanpro-academy";

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("🍀 MongoDB connected successfully!"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
// 1. Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date() });
});

// 2. Get User Progress & Bookmarks
app.get("/api/users/:email/progress", async (req, res, next) => {
  try {
    const { email } = req.params;
    let user = await User.findOne({ email });
    // Create mock user profile if it doesn't exist for demonstration
    if (!user) {
      user = await User.create({
        username: email.split("@")[0],
        email,
        completedChapters: [],
        bookmarks: [],
        currentStreak: 1,
        lastActiveDate: new Date(),
      });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      completedChapters: user.completedChapters,
      bookmarks: user.bookmarks,
      currentStreak: user.currentStreak,
      lastActiveDate: user.lastActiveDate,
    });
  } catch (err) {
    next(err);
  }
});

// 3. Mark Chapter as Completed
app.post("/api/users/complete-chapter", async (req, res, next) => {
  try {
    const { email, chapterId } = req.body;
    if (!email || !chapterId) {
      res.status(400).json({ error: "Missing email or chapterId parameter" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Add chapterId to completed list if not already there
    if (!user.completedChapters.includes(chapterId)) {
      user.completedChapters.push(chapterId);
    }
    user.lastActiveDate = new Date(); // Updates active date, triggering pre-save streak middleware

    await user.save();
    res.status(250).json({
      message: "Chapter completion updated!",
      completedChapters: user.completedChapters,
      currentStreak: user.currentStreak,
    });
  } catch (err) {
    next(err);
  }
});

// 4. Toggle Bookmark
app.post("/api/users/toggle-bookmark", async (req, res, next) => {
  try {
    const { email, targetId } = req.body;
    if (!email || !targetId) {
      res.status(400).json({ error: "Missing email or targetId parameter" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const isBookmarked = user.bookmarks.includes(targetId);
    if (isBookmarked) {
      user.bookmarks = user.bookmarks.filter((id) => id !== targetId);
    } else {
      user.bookmarks.push(targetId);
    }

    await user.save();
    res.status(200).json({
      message: isBookmarked ? "Bookmark removed" : "Bookmark added",
      bookmarks: user.bookmarks,
    });
  } catch (err) {
    next(err);
  }
});

// --- Authentication Endpoints for Notes App ---
app.post("/api/auth/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !password || !username) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }

    let user = await User.findOne({ email });
    const hashedPassword = hashPassword(password);

    if (user) {
      if (user.password) {
        res.status(400).json({ error: "Email is already registered" });
        return;
      }
      user.password = hashedPassword;
      user.username = username;
      await user.save();
    } else {
      user = await User.create({
        username,
        email,
        password: hashedPassword,
        completedChapters: [],
        bookmarks: [],
        currentStreak: 1,
        lastActiveDate: new Date(),
      });
    }

    res
      .status(200)
      .json({
        message: "Registration successful",
        email: user.email,
        username: user.username,
      });
  } catch (err) {
    next(err);
  }
});

app.post("/api/auth/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user || !user.password) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const hashedPassword = hashPassword(password);
    if (user.password !== hashedPassword) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    res
      .status(200)
      .json({
        message: "Login successful",
        email: user.email,
        username: user.username,
      });
  } catch (err) {
    next(err);
  }
});

// --- Notes CRUD Endpoints ---
app.get("/api/notes", async (req, res, next) => {
  try {
    const { email, search, tag } = req.query;
    if (!email) {
      res.status(400).json({ error: "Email query parameter is required" });
      return;
    }

    const query = { email: email.toLowerCase() };

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }

    if (tag) {
      query.colorTag = tag;
    }

    const notes = await Note.find(query).sort({ timestamp: -1 });
    res.status(200).json(notes);
  } catch (err) {
    next(err);
  }
});

app.post("/api/notes", async (req, res, next) => {
  try {
    const { email, title, content, colorTag, relatedChapters } = req.body;
    if (!email || !title || !content) {
      res.status(400).json({ error: "Email, title, and content are required" });
      return;
    }

    const note = await Note.create({
      email: email.toLowerCase(),
      title,
      content,
      colorTag: colorTag || "purple",
      relatedChapters: relatedChapters || [],
      timestamp: new Date(),
    });

    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
});

app.put("/api/notes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, colorTag, relatedChapters } = req.body;

    const note = await Note.findById(id);
    if (!note) {
      res.status(404).json({ error: "Note not found" });
      return;
    }

    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    if (colorTag !== undefined) note.colorTag = colorTag;
    if (relatedChapters !== undefined) note.relatedChapters = relatedChapters;
    note.timestamp = new Date();

    await note.save();
    res.status(200).json(note);
  } catch (err) {
    next(err);
  }
});

app.delete("/api/notes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      res.status(404).json({ error: "Note not found" });
      return;
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    next(err);
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled API Error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "An unexpected error occurred",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
});
