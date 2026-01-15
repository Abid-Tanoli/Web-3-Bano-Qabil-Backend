import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel.ts";
import { registerSchema } from "../schemas/authSchema.ts";
import { hashPassword, comparePassword } from "../utils/password.ts";

const JWT_SECRET = process.env.JWT_SECRET || "access_secret";
console.log("JWT SECRET:", process.env.JWT_SECRET);

export const register = async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const existingUser = await User.findOne({ email: validatedData.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(validatedData.password);

    const user = await User.create({ ...validatedData, password: hashedPassword });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        age: user.age,
        role: user.role,
        experience: user.experience,
        createdAt: user.createdAt
      }
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error: any) {
    res.status(500).json({ message: "Login error", error: error.message });
  }
};