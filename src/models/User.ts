import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password?: string;
  avatarUrl?: string;
  completedChapters: string[];
  bookmarks: string[];
  currentStreak: number;
  lastActiveDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: false,
    },
    avatarUrl: {
      type: String,
    },
    completedChapters: {
      type: [String],
      default: [],
    },
    bookmarks: {
      type: [String],
      default: [],
    },
    currentStreak: {
      type: Number,
      default: 0,
    },
    lastActiveDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to calculate and update learning streaks upon save
UserSchema.pre("save", function (this: any, next: any) {
  if (this.isModified("lastActiveDate") && this.lastActiveDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (this.lastActiveDate) {
      const lastActive = new Date(this.lastActiveDate);
      lastActive.setHours(0, 0, 0, 0);

      const diffTime = Math.abs(today.getTime() - lastActive.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        this.currentStreak += 1;
      } else if (diffDays > 1) {
        this.currentStreak = 1;
      } else if (this.currentStreak === 0) {
        this.currentStreak = 1;
      }
    }
  }
  next();
});

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
