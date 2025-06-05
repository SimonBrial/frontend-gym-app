import { z } from "zod";

// ["V", "E"]
// ["Masculino", "Femenino"],

export const UserSchema = z.object({
  nombre: z
    .string()
    .min(1, { message: "El nombre es requerido" })
    .max(20, { message: "El nombre no puede tener mas de 20 caracteres" }),
  apellido: z
    .string()
    .min(1, { message: "El apellido es requerido" })
    .max(20, { message: "El apellido no puede tener mas de 20 caracteres" }),
  dniCode: z
    .string({ message: "El tipo de cedula es requerido" })
    .max(1, { message: "El codigo de la cedula es requerido" }),
  /* .refine((value) => value !== "V" && value !== "E", {
      message: "El codigo debe ser indicado como V o E",
      path: ["dniCode"],
    }) */ cedula: z
    .string()
    .min(1, { message: "La cedula es requerida" })
    .max(8, { message: "La cedula no puede tener mas de 8 caracteres" }),
  edad: z.coerce
    .number({ message: "La edad es requerida" })
    .min(1, { message: "La edad no puede ser menor a 1 año" })
    .max(99, { message: "La edad no puede ser mayor a 99" }),
  peso: z.coerce
    .number({ message: "El peso es requerido" })
    .min(1, { message: "El peso no puede ser menor a 1" })
    .max(200, { message: "El peso no puede ser mayor a 200" }),
  sexo: z
    .string({ message: "El sexo es requerido" })
    .max(10, { message: "El genero es requerido" }),
  /* .refine((value) => value !== "Masculino" && value !== "Femenino", {
      message: "El sexo debe ser Masculino o Femenino",
      path: ["sexo"],
    }) */ /* .refine((value) => value !== "Masculino" && value !== "Femenino", {
      message: "El sexo debe ser Masculino o Femenino",
      path: ["sexo"],
    }) */ nombreTrainer: z.string().optional(),
  apellidoTrainer: z.string().optional(),
  plan: z.enum(["monthly", "weekly", "daily"], {
    message: "El plan es requerido",
  }),
});

export const UserUpdateSchema = UserSchema.extend({
  plan: z.enum(["monthly", "weekly", "daily"]).optional(), // opcional en "update"
});

export type UserSchemaType = z.infer<typeof UserSchema>;
