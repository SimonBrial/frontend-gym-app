/* eslint-disable react-hooks/exhaustive-deps */
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
import { NotePencil, Pencil, Trash } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReadDataCard from "./read-data-card";
import { useUserStore } from "@/store/user-store.store";
import UserStatusBadge from "@/components/user-status-badge";
// import { UserBody } from "@/interface/interfaces";

export default function ReadUserLayout() {
  const params = useParams();
  const userId = parseInt(params._id as string);

  const [open, setOpen] = useState<boolean>(false);
  const getUserById = useUserStore((state) => state.fnGetUserById);
  const fnDeleteUser = useUserStore((state) => state.fnDeleteUser);
  const userFound = useUserStore((state) => state.selectedUser);

  useEffect(() => {
    getUserById(userId);
  }, []);

  console.log(userFound);

  return (
    <>
      {userFound !== null ? (
        <div className="flex justify-center items-start gap-4 w-full h-full bg-neutralBlack pt-4 sm:-mt-2">
          <div className="w-full sm:w-2/5 flex flex-col gap-4 justify-center items-center">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-2 py-4 w-full">
              <Avatar className="w-[40px] h-[40px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <TypographyText
                description={capitalizeFirstLetter(
                  userFound?.nombre + " " + userFound?.apellido,
                )}
                fontjura
                type="h2"
                classes="text-base"
              />
              <UserStatusBadge
                status={userFound?.diasEnMora > 0 ? "moroso" : "solvente"}
              />
              {/* <div className="flex justify-center items-center gap-3 py-[4px] px-4 border border-principal rounded-md">
              <span className="h-[30px] w-[30px] -mb-1 text-principal">
                <Barbell size={25} />
              </span>
              <TypographyText
                description={userFound.diasEnMora > 0 ? "Mora" : "Solvente"}
                classes="text-base"
                fontjura={false}
                type="h2"
              />
            </div> */}
            </div>
            <div className="w-full grid grid-cols-3 sm:grid-cols-2 gap-2">
              <Button className="flex sm:hidden rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-principal/20 border border-slate-600 active:border-principal active:text-principal">
                <NotePencil /> Renovar
              </Button>
              <Link href={`/h/users/user/edit/${params._id}`}>
                <Button className="rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-orange-500/20 border  border-slate-600 active:border-orange-500 active:text-orange-500 sm:hover:bg-orange-500/20 sm:hover:border-orange-500 sm:hover:text-orange-500">
                  <Pencil /> Editar
                </Button>
              </Link>
              <Button
                onClick={() => setOpen(true)}
                className="rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-red-500/20 border border-slate-600 active:border-red-500 active:text-red-500 sm:hover:bg-red-500/20 sm:hover:border-red-500 sm:hover:text-red-500"
              >
                <Trash /> Eliminar
              </Button>
            </div>
            <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col w-full">
              <ReadDataCard data={userFound} />
              {/* <ul className="w-full py-2">
            </ul> */}
            </div>
          </div>
          <DesktopInvoicesTable /* invoicesArray={invoices} */ />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <TypographyText
            description="Cargando..."
            fontjura={false}
            type="p"
            classes="text-principal text-lg"
          />
        </div>
      )}
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
                <Button
                  onClick={() => {
                    setOpen(false);
                    fnDeleteUser(userId);
                  }}
                  variant="destructive"
                >
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
