import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import crypto from "crypto";

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export async function POST(req) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();

    if (!email || !password || !username) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const normalizedEmail = email.toLowerCase();
    let user = await User.findOne({ email: normalizedEmail });
    const hashedPassword = hashPassword(password);

    if (user) {
      if (user.password) {
        return NextResponse.json(
          { error: "Email is already registered" },
          { status: 400 },
        );
      }
      user.password = hashedPassword;
      user.username = username;
      await user.save();
    } else {
      user = await User.create({
        username,
        email: normalizedEmail,
        password: hashedPassword,
        completedChapters: [],
        bookmarks: [],
        currentStreak: 1,
        lastActiveDate: new Date(),
      });
    }

    return NextResponse.json({
      message: "Registration successful",
      email: user.email,
      username: user.username,
    });
  } catch (err) {
    console.error("Register Error:", err);
    return NextResponse.json(
      { error: err.message || "Server Error" },
      { status: 500 },
    );
  }
}
