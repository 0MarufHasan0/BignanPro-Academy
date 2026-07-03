import React from "react";
import { notFound } from "next/navigation";
import { chaptersData } from "@/content/chapters";
import { ChapterReaderClient } from "./ChapterReaderClient";

export async function generateStaticParams() {
  return Object.keys(chaptersData).map((chapterId) => ({
    chapterId,
  }));
}

export default async function ChapterPage({ params }) {
  const { chapterId } = await params;
  const chapter = chaptersData[chapterId];

  if (!chapter) {
    notFound();
  }

  return <ChapterReaderClient chapter={chapter} />;
}
