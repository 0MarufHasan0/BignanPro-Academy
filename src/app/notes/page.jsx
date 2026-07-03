"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Trash2,
  Plus,
  Sparkles,
  FileText,
  User,
  LogOut,
  BookOpen,
  Palette,
  Code,
  Activity,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { chaptersList } from "@/config/chapters";
import { useLanguage } from "@/providers/LanguageProvider";

export default function NotesPage() {
  const { language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [authUsername, setAuthUsername] = useState("");
  // Auth Form State
  const [isRegistering, setIsRegistering] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Notes State
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTagFilter, setSelectedTagFilter] = useState("all");
  const [notesLoading, setNotesLoading] = useState(false);
  // Active Note Editor State
  const [activeNoteId, setActiveNoteId] = useState(null);
  const [editorTitle, setEditorTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [editorColorTag, setEditorColorTag] = useState("purple");
  const [isSaving, setIsSaving] = useState(false);
  const [aiRefining, setAiRefining] = useState(false);

  const contentTextareaRef = useRef(null);

  const colors = [
    {
      name: "purple",
      label: "General",
      bg: "bg-indigo-50 dark:bg-indigo-950/40",
      border: "border-indigo-150 dark:border-indigo-900",
      dot: "bg-indigo-500",
    },
    {
      name: "blue",
      label: "Code",
      bg: "bg-sky-50 dark:bg-sky-950/40",
      border: "border-sky-150 dark:border-sky-900",
      dot: "bg-sky-500",
    },
    {
      name: "green",
      label: "Explanation",
      bg: "bg-emerald-50 dark:bg-emerald-950/40",
      border: "border-emerald-150 dark:border-emerald-900",
      dot: "bg-emerald-500",
    },
    {
      name: "yellow",
      label: "Examples",
      bg: "bg-amber-50 dark:bg-amber-950/40",
      border: "border-amber-150 dark:border-amber-900",
      dot: "bg-amber-500",
    },
    {
      name: "pink",
      label: "Ideas",
      bg: "bg-rose-50 dark:bg-rose-950/40",
      border: "border-rose-150 dark:border-rose-900",
      dot: "bg-rose-500",
    },
    {
      name: "red",
      label: "Important",
      bg: "bg-red-50 dark:bg-red-950/40",
      border: "border-red-150 dark:border-red-900",
      dot: "bg-red-500",
    },
  ];

  // API base URL
  const API_BASE = "/api";

  // Check auth on load
  useEffect(() => {
    const savedEmail = localStorage.getItem("notes-auth-email");
    const savedUsername = localStorage.getItem("notes-auth-username");
    if (savedEmail) {
      setAuthEmail(savedEmail);
      setAuthUsername(savedUsername || "User");
      setIsAuthenticated(true);
      fetchNotes(savedEmail);
    }
  }, []);

  // Fetch all notes
  const fetchNotes = async (email, search = "", tag = "all") => {
    setNotesLoading(true);
    try {
      let url = `${API_BASE}/notes?email=${encodeURIComponent(email)}`;
      if (search) url += `&search=${encodeURIComponent(search)}`;
      if (tag && tag !== "all") url += `&tag=${encodeURIComponent(tag)}`;

      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setNotes(data);
      }
    } catch (err) {
      console.error("Error fetching notes:", err);
    } finally {
      setNotesLoading(false);
    }
  };

  // Run search & filter queries
  useEffect(() => {
    if (isAuthenticated && authEmail) {
      const delayDebounce = setTimeout(() => {
        fetchNotes(authEmail, searchQuery, selectedTagFilter);
      }, 300);
      return () => clearTimeout(delayDebounce);
    }
  }, [searchQuery, selectedTagFilter, isAuthenticated, authEmail]);

  // Auth Handling
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);

    const payload = isRegistering
      ? { username: usernameInput, email: emailInput, password: passwordInput }
      : { email: emailInput, password: passwordInput };

    const endpoint = isRegistering ? "/auth/register" : "/auth/login";

    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setAuthError(data.error || "Authentication failed");
      } else {
        localStorage.setItem("notes-auth-email", data.email);
        localStorage.setItem("notes-auth-username", data.username);
        setAuthEmail(data.email);
        setAuthUsername(data.username);
        setIsAuthenticated(true);
        fetchNotes(data.email);
      }
    } catch (err) {
      setAuthError(
        "Could not connect to backend server. Is it running on port 5000?",
      );
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("notes-auth-email");
    localStorage.removeItem("notes-auth-username");
    setIsAuthenticated(false);
    setAuthEmail("");
    setAuthUsername("");
    setNotes([]);
    setActiveNoteId(null);
    setEditorTitle("");
    setEditorContent("");
  };

  // Chapter Related Search Logic (Client-side keyword matching)
  const calculateRelatedChapters = (titleText, contentText) => {
    const combined = `${titleText} ${contentText}`.toLowerCase();
    const matches = [];

    chaptersList.forEach((chapter) => {
      let score = 0;
      const titleBn = chapter.title.bn.toLowerCase();
      const titleEn = chapter.title.en.toLowerCase();
      const descBn = chapter.description.bn.toLowerCase();
      const descEn = chapter.description.en.toLowerCase();

      // Check explicit keyword weight matches
      const keywords = [
        { term: "express", weight: 4 },
        { term: "node", weight: 4 },
        { term: "mongodb", weight: 4 },
        { term: "mongoose", weight: 4 },
        { term: "react", weight: 4 },
        { term: "better auth", weight: 5 },
        { term: "nextauth", weight: 5 },
        { term: "auth", weight: 3 },
        { term: "tailwind", weight: 3 },
        { term: "css", weight: 2 },
        { term: "html", weight: 2 },
        { term: "github", weight: 3 },
        { term: "git", weight: 2 },
        { term: "api", weight: 3 },
        { term: "state", weight: 3 },
        { term: "card", weight: 3 },
      ];

      keywords.forEach(({ term, weight }) => {
        if (combined.includes(term)) {
          if (titleBn.includes(term) || titleEn.includes(term)) {
            score += weight * 3;
          }
          if (descBn.includes(term) || descEn.includes(term)) {
            score += weight;
          }
        }
      });

      if (score > 0) {
        matches.push({
          id: chapter.id,
          title: language === "bn" ? chapter.title.bn : chapter.title.en,
          score,
        });
      }
    });

    return matches
      .sort((a, b) => b.score - a.score)
      .slice(0, 2)
      .map((m) => ({ id: m.id, title: m.title }));
  };

  // Smart Paste Handler
  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");
    if (!pastedText) return;

    // Detect if the text looks like it was copied from Claude/ChatGPT
    const hasMarkdownHeadings = /^(#|##|###)\s+/m.test(pastedText);
    const hasCodeBlocks = /```[\s\S]*?```/.test(pastedText);
    const hasBulletPoints = /^(\*|-|\+)\s+/m.test(pastedText);

    if (hasMarkdownHeadings || hasCodeBlocks || hasBulletPoints) {
      e.preventDefault(); // Intercept paste

      // 1. Auto generate title if current title is empty
      let finalTitle = editorTitle;
      if (!editorTitle.trim()) {
        const lines = pastedText.split("\n").filter((l) => l.trim().length > 0);
        if (lines.length > 0) {
          // Take first line, clean markdown tags, cap at 40 chars
          finalTitle = lines[0]
            .replace(/^[#\s*`]+/g, "")
            .trim()
            .substring(0, 40);
          setEditorTitle(finalTitle);
        }
      }

      // 2. Auto assign color tag based on content keywords
      let finalColor = editorColorTag;
      const lowerText = pastedText.toLowerCase();
      if (
        hasCodeBlocks ||
        lowerText.includes("const ") ||
        lowerText.includes("function") ||
        lowerText.includes("import ")
      ) {
        finalColor = "blue"; // Code
      } else if (
        lowerText.includes("example:") ||
        lowerText.includes("e.g.") ||
        lowerText.includes("উদাহরণ:")
      ) {
        finalColor = "yellow"; // Example
      } else if (
        lowerText.includes("note:") ||
        lowerText.includes("important") ||
        lowerText.includes("গুরুত্বপূর্ণ")
      ) {
        finalColor = "red"; // Important
      } else {
        finalColor = "green"; // Explanation
      }
      setEditorColorTag(finalColor);

      // Insert formatted text manually
      const textarea = contentTextareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const newText =
          text.substring(0, start) + pastedText + text.substring(end);
        setEditorContent(newText);
        // Reset selection index
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd =
            start + pastedText.length;
        }, 0);
      }
    }
  };

  // AI Refine & Detail Formatter
  const handleAIRefine = () => {
    if (!editorContent.trim()) return;

    setAiRefining(true);
    // Simulate smart AI structuring loader
    setTimeout(() => {
      let refined = editorContent;

      // 1. Add visual code block containers if missing but code keywords exist
      if (refined.includes("const ") || refined.includes("function ")) {
        if (!refined.includes("```")) {
          refined = `### 💻 Code Snippet\n\`\`\`javascript\n${refined}\n\`\`\``;
        }
      }

      // 2. Wrap explanations or key definitions in Notion-style quotes/highlights
      refined = refined.replace(
        /^(note|warning|quote):\s*(.*)/gim,
        (_, type, msg) => {
          return `> **${type.toUpperCase()}:** ${msg}`;
        },
      );

      // 3. Auto enrich markdown bold headers for readability
      refined = refined.replace(
        /^(heading|topic|summary):\s*(.*)/gim,
        (_, type, msg) => {
          return `## 🚀 ${msg}\n`;
        },
      );

      // 4. Append AI learning tip
      refined += `\n\n---\n💡 *AI Learning Tip: To master this, write this code on your local system, run node in your terminal, and test custom variations.*`;

      setEditorContent(refined);
      setAiRefining(false);

      // Auto update tag
      if (refined.includes("```")) setEditorColorTag("blue");
    }, 1200);
  };

  // Create Note
  const handleCreateNewNote = async () => {
    if (!isAuthenticated) return;
    try {
      const payload = {
        email: authEmail,
        title: "Untitled Note",
        content: "Start typing or paste AI text here...",
        colorTag: "purple",
        relatedChapters: [],
      };

      const res = await fetch(`${API_BASE}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const newNote = await res.json();
        setNotes([newNote, ...notes]);
        handleSelectNote(newNote);
      }
    } catch (err) {
      console.error("Error creating note:", err);
    }
  };

  // Select note in list
  const handleSelectNote = (note) => {
    setActiveNoteId(note._id);
    setEditorTitle(note.title);
    setEditorContent(note.content);
    setEditorColorTag(note.colorTag);
  };

  // Save active note changes
  const handleSaveNote = async () => {
    if (!activeNoteId || !isAuthenticated) return;

    setIsSaving(true);
    try {
      // Analyze text to find related book chapters
      const chaptersRef = calculateRelatedChapters(editorTitle, editorContent);

      const payload = {
        title: editorTitle.trim() || "Untitled Note",
        content: editorContent,
        colorTag: editorColorTag,
        relatedChapters: chaptersRef,
      };

      const res = await fetch(`${API_BASE}/notes/${activeNoteId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const updated = await res.json();
        setNotes(notes.map((n) => (n._id === activeNoteId ? updated : n)));
      }
    } catch (err) {
      console.error("Error saving note:", err);
    } finally {
      setIsSaving(false);
    }
  };

  // Auto save logic when editing fields
  useEffect(() => {
    if (activeNoteId && isAuthenticated) {
      const delaySave = setTimeout(() => {
        handleSaveNote();
      }, 1000);
      return () => clearTimeout(delaySave);
    }
  }, [editorTitle, editorContent, editorColorTag]);

  // Delete note
  const handleDeleteNote = async (id, e) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this note?")) return;

    try {
      const res = await fetch(`${API_BASE}/notes/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setNotes(notes.filter((n) => n._id !== id));
        if (activeNoteId === id) {
          setActiveNoteId(null);
          setEditorTitle("");
          setEditorContent("");
        }
      }
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Auth Gate Panel */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto my-12 p-8 rounded-3xl border border-border bg-card shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-primary via-indigo-500 to-accent" />

            <div className="text-center mb-8">
              <span className="p-3 bg-primary/10 text-primary rounded-2xl inline-block mb-3">
                <FileText className="w-6 h-6" />
              </span>
              <h2 className="text-2xl font-black">
                {isRegistering
                  ? "Create Notes Account"
                  : "Access Personal Notes"}
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Authenticate to safely store notes in the BignanPro MongoDB
                database.
              </p>
            </div>

            {authError && (
              <div className="p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold text-center">
                ⚠️ {authError}
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isRegistering && (
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:border-primary text-sm font-semibold"
                    placeholder="Enter your name"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:border-primary text-sm font-semibold"
                  placeholder="name@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-secondary/50 focus:outline-none focus:border-primary text-sm font-semibold"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full py-3 mt-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {authLoading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span>
                  {isRegistering ? "Register Account" : "Log In Workspace"}
                </span>
              </button>
            </form>

            <div className="mt-6 text-center text-xs font-semibold">
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-primary hover:underline"
              >
                {isRegistering
                  ? "Already have notes auth? Log In"
                  : "New notes account? Sign Up"}
              </button>
            </div>
          </div>
        ) : (
          /* Notes Workspace Layout */
          <div className="space-y-6">
            {/* Notes Control Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-card border border-border/40 rounded-3xl shadow-sm">
              <div>
                <div className="flex items-center gap-2 select-none">
                  <span className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h2 className="text-xl font-black">Notion Notes Studio</h2>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Logged in as{" "}
                  <span className="font-bold text-foreground">
                    {authUsername}
                  </span>{" "}
                  ({authEmail})
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleCreateNewNote}
                  className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-xl shadow hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Note</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-xl border border-border bg-secondary/50 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
                  title="Log Out Notes"
                >
                  <LogOut className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Main Workspace split panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Note list, search and filters */}
              <div className="lg:col-span-4 space-y-4">
                {/* Search & Color Tags filtering panel */}
                <div className="bg-card border border-border/40 p-4 rounded-3xl shadow-sm space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search notes title or body..."
                      className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:border-primary text-xs font-semibold"
                    />
                  </div>

                  {/* Color tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <button
                      onClick={() => setSelectedTagFilter("all")}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                        selectedTagFilter === "all"
                          ? "bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-black"
                          : "border-border bg-secondary/30 text-muted-foreground"
                      }`}
                    >
                      All Tags
                    </button>
                    {colors.map((col) => (
                      <button
                        key={col.name}
                        onClick={() => setSelectedTagFilter(col.name)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border flex items-center gap-1 transition-all ${
                          selectedTagFilter === col.name
                            ? "bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-black"
                            : "border-border bg-secondary/30 text-muted-foreground"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${col.dot}`}
                        />
                        <span>{col.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes cards list container */}
                <div className="space-y-3 overflow-y-auto max-h-[500px] pr-1">
                  {notesLoading ? (
                    <div className="text-center py-10 font-bold text-xs text-muted-foreground animate-pulse">
                      Loading notes from database...
                    </div>
                  ) : notes.length === 0 ? (
                    <div className="text-center py-12 rounded-3xl border border-dashed border-border p-6 bg-card text-muted-foreground text-xs font-bold">
                      No notes found. Create one to begin!
                    </div>
                  ) : (
                    notes.map((note) => {
                      const colorInfo =
                        colors.find((c) => c.name === note.colorTag) ||
                        colors[0];
                      const isActive = activeNoteId === note._id;

                      return (
                        <div
                          key={note._id}
                          onClick={() => handleSelectNote(note)}
                          className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group shadow-sm flex flex-col justify-between ${colorInfo.bg} ${
                            isActive
                              ? "border-primary ring-2 ring-primary/20 shadow-md scale-[1.01]"
                              : colorInfo.border
                          }`}
                        >
                          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                {new Date(note.timestamp).toLocaleDateString()}
                              </span>
                              <div className="flex gap-2">
                                <span
                                  className={`w-2.5 h-2.5 rounded-full ${colorInfo.dot}`}
                                />
                                <button
                                  onClick={(e) => handleDeleteNote(note._id, e)}
                                  className="text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                  title="Delete Note"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                            <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm line-clamp-1">
                              {note.title}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                              {note.content}
                            </p>
                          </div>

                          {/* Related Book Chapters references (at bottom of card) */}
                          {note.relatedChapters &&
                            note.relatedChapters.length > 0 && (
                              <div className="mt-4 pt-2.5 border-t border-black/5 dark:border-white/5 flex flex-col gap-1 select-none">
                                {note.relatedChapters.map((ch, idx) => (
                                  <a
                                    key={idx}
                                    href={`/book/${ch.id}`}
                                    className="inline-flex items-center gap-1 text-[10px] font-bold text-primary hover:underline hover:translate-x-0.5 transition-all truncate"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <BookOpen className="w-3 h-3 shrink-0 text-primary/70" />
                                    <span>For details: {ch.title}</span>
                                  </a>
                                ))}
                              </div>
                            )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Right Column: Dynamic Editor */}
              <div className="lg:col-span-8 bg-card border border-border/40 rounded-3xl shadow-sm p-6 space-y-4">
                {activeNoteId ? (
                  <div className="space-y-4">
                    {/* Editor Toolbar details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-4">
                      {/* Color Tag Picker */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground flex items-center gap-1 select-none">
                          <Palette className="w-3.5 h-3.5" /> Tag:
                        </span>
                        <div className="flex gap-1.5">
                          {colors.map((col) => (
                            <button
                              key={col.name}
                              onClick={() => setEditorColorTag(col.name)}
                              className={`w-6 h-6 rounded-full border border-border flex items-center justify-center transition-all ${
                                editorColorTag === col.name
                                  ? "ring-2 ring-primary scale-110"
                                  : "opacity-80 hover:opacity-100"
                              }`}
                              title={col.label}
                            >
                              <span
                                className={`w-3.5 h-3.5 rounded-full ${col.dot}`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Formatting Actions */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleAIRefine}
                          disabled={aiRefining}
                          className="px-3.5 py-1.5 bg-gradient-to-r from-primary to-indigo-600 text-primary-foreground text-xs font-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-1.5 disabled:opacity-50"
                        >
                          {aiRefining ? (
                            <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5" />
                          )}
                          <span>✨ AI Refine & Detail</span>
                        </button>

                        {isSaving && (
                          <span className="text-[10px] text-muted-foreground font-semibold flex items-center gap-1 select-none animate-pulse">
                            <Activity className="w-3 h-3 text-primary" />{" "}
                            Saving...
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Note fields */}
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editorTitle}
                        onChange={(e) => setEditorTitle(e.target.value)}
                        placeholder="Note Title"
                        className="w-full text-xl font-black bg-transparent border-none focus:outline-none focus:ring-0 text-slate-800 dark:text-slate-100"
                      />

                      <div className="text-[10px] font-bold text-muted-foreground select-none bg-secondary/40 px-3 py-2 rounded-xl flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-primary" />
                        <span>
                          Smart Paste is active. Paste chat text copied from AI
                          (Claude, ChatGPT) for auto-formatting.
                        </span>
                      </div>

                      <textarea
                        ref={contentTextareaRef}
                        value={editorContent}
                        onChange={(e) => setEditorContent(e.target.value)}
                        onPaste={handlePaste}
                        placeholder="Write your study notes here or paste AI code blocks..."
                        className="w-full h-96 bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-medium leading-relaxed resize-none text-slate-650 dark:text-slate-300"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-24 select-none">
                    <span className="p-4 bg-secondary/50 text-muted-foreground rounded-2xl inline-block mb-3">
                      <FileText className="w-8 h-8" />
                    </span>
                    <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                      No Note Selected
                    </h3>
                    <p className="text-xs text-muted-foreground max-w-xs mx-auto mt-1 leading-relaxed">
                      Select an existing note from the sidebar lists or click
                      "Create Note" to spawn a new workspace.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
