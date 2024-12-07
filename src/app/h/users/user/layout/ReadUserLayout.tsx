"use client";

import Typography from "@/components/Typography";
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
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import {
  NotePencil,
  Barbell,
  Pencil,
  Trash,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ReadUserLayout() {
  const params = useParams();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-2 py-3 w-full">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Typography
            description={capitalizeFirstLetter("edgardo marcano")}
            fontjura={false}
            type="h2"
            classes="text-base"
          />
          <div className="flex justify-center items-center gap-3 py-[4px] px-4 border border-principal rounded-md">
            <span className="h-[30px] w-[30px] -mb-1 text-principal">
              <Barbell size={25} />
            </span>
            <Typography
              description={"Solvente"}
              classes="text-base"
              fontjura={false}
              type="h2"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          <Button className="rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-principal/50">
            <NotePencil /> Renovar
          </Button>
          <Link href={`/h/users/user/edit/${params._id}`}>
            <Button className="rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-orange-500/50">
              <Pencil /> Editar
            </Button>
          </Link>
          <Button
            onClick={() => setOpen(true)}
            className="rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-red-500/50"
          >
            <Trash /> Eliminar
          </Button>
        </div>
        <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-2 py-3 w-full">
          <ul className="w-full py-2">
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Cedula"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="25317338"
                fontjura={false}
                type="p"
                classes="text-base text-start"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Nombre"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="Edgardo"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Apellido"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="Marcano"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Edad"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="22"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Peso"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="70 Kg"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Fecha registro"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="20/10/2024"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Último pago"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="20/11/2024"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Días en mora"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="14 días"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Traineer"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description="Juan Perez"
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
            <li className="grid grid-cols-2 px-4 py-2">
              <Typography
                description="Última actualización"
                fontjura={false}
                type="p"
                classes="text-base font-bold"
              />{" "}
              <Typography
                description={"27/11/2024 17:56"}
                fontjura={false}
                type="p"
                classes="text-base"
              />
            </li>
          </ul>
        </div>
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
              <Typography
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
              <Typography
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
