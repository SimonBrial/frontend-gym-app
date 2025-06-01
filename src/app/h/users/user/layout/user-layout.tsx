/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import ErrorsCard from "@/components/errors-card";
import NumberInput from "@/components/inputs/number-input";
import RadioGroupInput from "@/components/inputs/radio-group-input";
import SelectInput from "@/components/inputs/select-input";
import TextInput from "@/components/inputs/text-input";
import {
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog,
  Button,
  Form,
} from "@/components/ui";
import { UserProps } from "@/interface/interfaces";
import { UserSchema, UserUpdateSchema } from "@/schemas/create-user.schema";
import { useUserStore } from "@/store/user-store.store";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

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

export default function UserLayout({
  formType,
}: {
  // id: number | string;
  formType: "create" | "update";
}) {
  const router = useRouter();
  const params = useParams();
  const userId = parseInt(params._id as string);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userDataBody, setUserDataBody] = useState<UserProps>(initialValues);

  const createUser = useUserStore((state) => state.fnCreateUser);
  const updateUser = useUserStore((state) => state.fnUpdateUser);
  const getUserById = useUserStore((state) => state.fnGetUserById);
  // const data = useUserStore((state) => state.usersResponse.data);
  const userFound = useUserStore((state) => state.selectedUser);

  useEffect(() => {
    if (formType === "update" && userId) {
      getUserById(userId);
    }
  }, [userId]); // Se ejecuta cuando userId cambia

  useEffect(() => {
    if (userFound) {
      // Asegurar que no sea null
      setUserDataBody({ ...userFound, plan: "monthly" });
      form.reset(userFound);
    }
  }, [userFound]); // Se ejecuta cuando userFound cambia

  // console.log("data --> ", data);

  console.log("userDataBody --> ", userDataBody);
  console.log("userFound --> ", userFound);

  const handleOpenChange = (open: boolean) => {
    if (Object.values(form.formState.errors).length === 0) {
      setIsOpen(open);
    }
  };

  const schema = formType === "create" ? UserSchema : UserUpdateSchema;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues:
      formType === "update" && userFound !== null
        ? userDataBody
        : initialValues,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (dataToSend) => {
    try {
      console.log("dataToSend --> ", dataToSend);
      if (
        dataToSend !== initialValues &&
        Object.values(form.formState.errors).length === 0
      ) {
        /* const dataFormatted = {
          ...dataToSend,
        }; */
        handleOpenChange(true);
        if (formType === "create") {
          createUser(dataToSend);
        } else {
          updateUser(userId, dataToSend);
        }

        form.reset(initialValues);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[90%] sm:w-[75%] bg-slate-900 py-6 px-4 rounded-[16px]"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <TextInput
            control={form.control}
            inputName="nombre"
            inputType="text"
            description=""
            classNameContainer="text-white w-full flex flex-col gap-1.5"
            className={`w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal ${
              form.formState.errors.nombre ? "border-red-500" : ""
            }`}
            label={capitalizeFirstLetter("nombre del cliente")}
          />
          <TextInput
            control={form.control}
            inputName="apellido"
            inputType="text"
            description=""
            classNameContainer="text-white w-full flex flex-col gap-1.5"
            className={`w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal ${
              form.formState.errors.apellido ? "border-red-500" : ""
            }`}
            label={capitalizeFirstLetter("apellido del cliente")}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="flex flex-row items-center gap-2 w-full">
            <SelectInput
              control={form.control}
              description=""
              inputName="dniCode"
              inputType=""
              classNameContainer="text-white w-full flex flex-col gap-1.5 focus:outline-none focus:border-principal w-full"
              inputContainerClasses="w-full bg-slate-800 border-slate-700 outline-none  focus:outline-none focus:border-principal focus:ring-1 focus:ring-principal"
              optionsContainerClasses="w-full bg-slate-800 border-slate-700 text-white "
              itemContainerClasses="focus:bg-neutralBlack/50 text-white"
              label={capitalizeFirstLetter("codigo")}
              selectLabel="Codigo de DNI"
              options={["Indicar codigo", "V", "E"]}
              textDefault="Indicar codigo"
            />
            <TextInput
              control={form.control}
              inputName="cedula"
              inputType="text"
              description={""}
              classNameContainer="text-white w-full flex flex-col gap-1.5 w-full"
              className={`w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal ${
                form.formState.errors.cedula ? "border-red-500" : ""
              }`}
              label={capitalizeFirstLetter("cedula")}
            />
          </div>
          <div className="flex flex-row items-center gap-2 w-full">
            <NumberInput
              control={form.control}
              description=""
              inputName="peso"
              inputType="number"
              classNameContainer="text-white w-full flex flex-col gap-1.5 w-full -mb-2"
              className={`w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal ${
                form.formState.errors.peso ? "border-red-500" : ""
              }`}
              label={capitalizeFirstLetter("peso")}
              placeholder="Indicar el peso"
              max={150}
              min={1}
            />
            <NumberInput
              control={form.control}
              description=""
              inputName="edad"
              inputType="number"
              classNameContainer="text-white w-full flex flex-col gap-1.5 w-full -mb-2"
              className={`w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal ${
                form.formState.errors.edad ? "border-red-500" : ""
              }`}
              label={capitalizeFirstLetter("edad")}
              placeholder="Indicar edad"
              max={100}
              min={1}
            />
          </div>
          <SelectInput
            control={form.control}
            description=""
            inputName="sexo"
            inputType=""
            classNameContainer="text-white w-full flex flex-col gap-1.5 focus:outline-none focus:border-principal w-full"
            inputContainerClasses="w-full bg-slate-800 border-slate-700 outline-none  focus:outline-none focus:border-principal focus:ring-1 focus:ring-principal"
            optionsContainerClasses="w-full bg-slate-800 border-slate-700 text-white "
            itemContainerClasses="focus:bg-neutralBlack/50 text-white"
            label={capitalizeFirstLetter("genero")}
            selectLabel="Genero"
            options={["Indicar genero", "Masculino", "Femenino"]}
            textDefault="Indicar genero"
          />
        </div>
        <div className="flex items-center flex-col sm:flex-row gap-2">
          <TextInput
            control={form.control}
            inputName="nombreTrainer"
            inputType="text"
            description=""
            classNameContainer="text-white w-full flex flex-col gap-1.5 w-full"
            className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
            label={capitalizeFirstLetter("nombre del entrenador")}
          />
          <TextInput
            control={form.control}
            inputName="apellidoTrainer"
            inputType="text"
            description=""
            classNameContainer="text-white w-full flex flex-col gap-1.5 w-full"
            className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
            label={capitalizeFirstLetter("apellido del entrenador")}
          />
        </div>
        {formType === "create" && (
          <RadioGroupInput
            control={form.control}
            description=""
            inputName="plan"
            inputType=""
            classNameContainer="-mt-3"
            radioGroupClassName="flex flex-row"
            label="Plan de pago"
            items={["monthly", "weekly", "daily"]}
          />
        )}

        {Object.keys(form.formState.errors).length > 0 && (
          <ErrorsCard errors={form.formState.errors} />
        )}
        <AlertDialog onOpenChange={handleOpenChange} open={isOpen}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              variant="outline"
              className="order-2 sm:order-1"
              onClick={() => router.back()}
            >
              Cancelar
            </Button>
            <Button
              variant="principal"
              type="submit"
              className="order-1 sm:order-2"
            >
              {formType === "create" ? "Registrar" : "Actualizar"}
            </Button>
          </div>

          <AlertDialogContent className="bg-slate-900 border border-slate-700 w-[85%] rounded-md">
            <>
              <AlertDialogHeader className="flex flex-col text-white justify-center items-center">
                <span>
                  <CheckCircle size={40} weight="fill" />
                </span>
                <AlertDialogTitle>
                  {formType === "create"
                    ? "Registro Exitoso"
                    : "Actualización Exitosa"}
                </AlertDialogTitle>
                <AlertDialogDescription className="text-white">
                  {formType === "create"
                    ? "Se ha procesado el registro del usuario."
                    : "Se ha actualizado el registro del usuario."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  className="bg-principal text-slate-900 hover:bg-principal/90 w-full rounded-md py-[8px] px-[16px]"
                  asChild
                >
                  <Button
                    variant="principal"
                    className="w-full"
                    onClick={() => router.push("/h/users/list")}
                  >
                    Listo
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </Form>
  );
}
