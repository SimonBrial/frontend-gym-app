import { UserProps } from "@/interface/interfaces";
import UserLayout from "./user-layout";

const initialValues: UserProps = {
  nombre: "",
  apellido: "",
  cedula: "",
  peso: undefined,
  edad: undefined,
  nombreTrainer: "",
  apellidoTrainer: "",
  dniCode: "V",
  sexo: "Masculino",
  plan: "monthly",
};

export default function UpdateUserLayout() {
  return <UserLayout formType="update" id={1} initialValues={initialValues} />;
}
