"use client";

import DesktopInvoicesTable from "@/components/table/desktop/desktop-invoices-table";
import TypographyText from "@/components/typography-text";
import {
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AvatarFallback,
  AlertDialog,
  AvatarImage,
  Avatar,
  Button,
} from "@/components/ui";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import {
  NotePencil,
  Barbell,
  Pencil,
  Trash,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import ReadDataCard from "./read-data-card";
import { TableData } from "@/interface/interfaces";

export default function ReadUserLayout() {
  const params = useParams();
  const [open, setOpen] = useState<boolean>(false);

  const usuario: TableData[] = [
    {
      _id: crypto.randomUUID(),
      cedula: "V25317338",
      nombre: "Edgardo",
      apellido: "Marcano",
      edad: 22,
      peso: 70,
      fechaRegistro: "20/10/2024",
      ultimoPago: "20/11/2024",
      diasEnMora: "14 días",
      trainer: "Juan Perez",
      ultimaActualizacion: "27/11/2024",
      /* otra: "Otra cosa",
    otra2: "Otra cosa 2",
    otra3: "Otra cosa 3",
    otra4: "Otra cosa 4",
    otra5: "Otra cosa 5",
    otra6: "Otra cosa 6",
    otra7: "Otra cosa 7",
    otra8: "Otra cosa 8",
    otra9: "Otra cosa 9",
    otra10: "Otra cosa 10", */
    },
  ];

  return (
    <>
      <div className="flex justify-center items-start gap-4 w-full h-full bg-neutralBlack -mt-2">
        <div className="w-full sm:w-2/5 flex flex-col gap-4 justify-center items-center">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-2 py-3 w-full">
            <Avatar className="w-[40px] h-[40px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <TypographyText
              description={capitalizeFirstLetter("edgardo marcano")}
              fontjura={false}
              type="h2"
              classes="text-base"
            />
            <div className="flex justify-center items-center gap-3 py-[4px] px-4 border border-principal rounded-md">
              <span className="h-[30px] w-[30px] -mb-1 text-principal">
                <Barbell size={25} />
              </span>
              <TypographyText
                description={"Solvente"}
                classes="text-base"
                fontjura={false}
                type="h2"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-3 sm:grid-cols-2 gap-2">
            <Button className="flex sm:hidden rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-principal/20 border border-slate-600 active:border-principal">
              <NotePencil /> Renovar
            </Button>
            <Link href={`/h/users/user/edit/${params._id}`}>
              <Button className="rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-orange-500/20 border  border-slate-600 active:border-orange-500">
                <Pencil /> Editar
              </Button>
            </Link>
            <Button
              onClick={() => setOpen(true)}
              className="rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-red-500/20 border border-slate-600 active:border-red-500"
            >
              <Trash /> Eliminar
            </Button>
          </div>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col w-full">
            <ReadDataCard data={usuario} />
            {/* <ul className="w-full py-2">
            </ul> */}
          </div>
        </div>
        <DesktopInvoicesTable /* invoicesArray={invoices} */ />
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent
          className="bg-slate-900 border border-slate-700 w-[85%] rounded-md"
          aria-describedby="alert-dialog-content"
        >
          <AlertDialogHeader className="flex flex-col text-white justify-center items-center">
            <span>
              <Trash size={40} weight="fill" />
            </span>
            <AlertDialogTitle>
              <TypographyText
                description="¿Eliminar cliente?"
                fontjura={false}
                type="p"
              />
            </AlertDialogTitle>
            <AlertDialogDescription
              aria-describedby="alert-dialog-description"
              className="text-white"
              asChild
            >
              <TypographyText
                description="Esta acción no se puede deshacer"
                fontjura={false}
                type="p"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button
                variant="secondary"
                onClick={() => setOpen(false)}
                className="bg-slate-700"
              >
                Cancelar
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction
              asChild
              className="bg-red-500 active:bg-red-600 hover:bg-red-600"
            >
              <Link href={"/h/users/list"}>
                <Button onClick={() => setOpen(false)} variant="destructive">
                  Eliminar
                </Button>
              </Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

{
  /* <li className="grid grid-cols-2 px-4 py-2 border-b border-slate-800 mx-2">
              <TypographyText
                description="Cedula"
                fontjura={false}
                type="p"
                classes="text-base font-bold -mx-2"
              />{" "}
              <TypographyText
                description="25317338"
                fontjura={false}
                type="p"
                classes="text-base text-start"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2 border-b border-slate-800 mx-2">
              <TypographyText
                description="Cedula"
                fontjura={false}
                type="p"
                classes="text-base font-bold -mx-2"
              />{" "}
              <TypographyText
                description="25317338"
                fontjura={false}
                type="p"
                classes="text-base text-start"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Nombre"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description="Edgardo"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Apellido"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description="Marcano"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Edad"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description="22"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Peso"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description="70 Kg"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Fecha registro"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description="20/10/2024"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Último pago"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description="20/11/2024"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Días en mora"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description="14 días"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Traineer"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description="Juan Perez"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <TypographyText
                description="Última actualización"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <TypographyText
                description={"27/11/2024 17:56"}
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li> */
}
