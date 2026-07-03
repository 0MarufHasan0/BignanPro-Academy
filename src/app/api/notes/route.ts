import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Note } from "@/models/Note";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const search = searchParams.get("search");
    const tag = searchParams.get("tag");

    if (!email) {
      return NextResponse.json({ error: "Email parameter is required" }, { status: 400 });
    }

    const query: any = { email: email.toLowerCase() };

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } }
      ];
    }

    if (tag && tag !== "all") {
      query.colorTag = tag;
    }

    const notes = await Note.find(query).sort({ timestamp: -1 });
    return NextResponse.json(notes);
  } catch (err: any) {
    console.error("Fetch Notes Error:", err);
    return NextResponse.json({ error: err.message || "Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, title, content, colorTag, relatedChapters } = await req.json();

    if (!email || !title || !content) {
      return NextResponse.json({ error: "Email, title, and content are required" }, { status: 400 });
    }

    const note = await Note.create({
      email: email.toLowerCase(),
      title,
      content,
      colorTag: colorTag || "purple",
      relatedChapters: relatedChapters || [],
      timestamp: new Date()
    });

    return NextResponse.json(note, { status: 201 });
  } catch (err: any) {
    console.error("Create Note Error:", err);
    return NextResponse.json({ error: err.message || "Server Error" }, { status: 500 });
  }
}
