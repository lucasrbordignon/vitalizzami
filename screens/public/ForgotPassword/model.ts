export interface IForgotPasswordData {
  email: string;
}

import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;