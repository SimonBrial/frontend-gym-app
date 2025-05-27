import { z } from "zod";
import { emailSchema, passwordSchema } from "./utils.schema";

export const LoginFormSchema = z.object({
  // name: z.string().min(3, { message: "El nombre es requerido" }),
  email: emailSchema,
  password: passwordSchema,
});
