import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Note } from "@/models/Note";

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const { title, content, colorTag, relatedChapters } = await req.json();

    const note = await Note.findById(id);
    if (!note) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }

    if (title !== undefined) note.title = title;
    if (content !== undefined) note.content = content;
    if (colorTag !== undefined) note.colorTag = colorTag;
    if (relatedChapters !== undefined) note.relatedChapters = relatedChapters;
    note.timestamp = new Date();

    await note.save();
    return NextResponse.json(note);
  } catch (err) {
    console.error("Update Note Error:", err);
    return NextResponse.json(
      { error: err.message || "Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error("Delete Note Error:", err);
    return NextResponse.json(
      { error: err.message || "Server Error" },
      { status: 500 },
    );
  }
}
