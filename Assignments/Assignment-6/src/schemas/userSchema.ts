import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  age: z.number().optional(),
  role: z.enum(["user", "admin"]).default("user"),
  experience: z.number().optional()
});
