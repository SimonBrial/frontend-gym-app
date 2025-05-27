import { z } from "zod";

// Password regex validation
export const passwordReg = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

export const passwordSchema = z
  .string()
  .min(8, {
    message: "La contraseña debe contener un minimo de 8 caracteres alfanumericos",
  })
  .regex(passwordReg, {
    message:
      "El password debe contener al menos un caracter de estos: #?!@$%^&*-, numeros del 0 - 9, al menos una mayuscula y una minuscula",
  });

export const emailSchema = z.string().email({
  message: "Correo invalido, debe cumplir con la estructura <email>@<dominio>",
});
