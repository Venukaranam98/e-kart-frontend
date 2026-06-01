import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Invalid Email format" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
