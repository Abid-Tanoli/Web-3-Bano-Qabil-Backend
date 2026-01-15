import mongoose, { Schema } from "mongoose";
import { UserTypes } from "../types/userInterface.ts";

const userSchema = new Schema<UserTypes>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: Number,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  experience: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<UserTypes>("User", userSchema);
