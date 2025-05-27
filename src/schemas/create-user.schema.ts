import { z } from "zod";

export const UserSchema = z.object({
  nombre: z
    .string()
    .min(1, { message: "El nombre es requerido" })
    .max(20, { message: "El nombre no puede tener mas de 20 caracteres" }),
  apellido: z
    .string()
    .min(1, { message: "El apellido es requerido" })
    .max(20, { message: "El apellido no puede tener mas de 20 caracteres" }),
  dniCode: z.enum(["V", "E"], { message: "El tipo de cedula es requerido" }),
  cedula: z
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
  sexo: z.enum(["Masculino", "Femenino"], { message: "El sexo es requerido" }),
  nombreTrainer: z.string().optional(),
  apellidoTrainer: z.string().optional(),
  plan: z.enum(["monthly", "weekly", "daily"], {
    message: "El plan es requerido",
  }),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
