"use client";

import {
  DotsThreeOutlineVertical,
  NotePencil,
  Trash,
  Note,
} from "@phosphor-icons/react/dist/ssr";
import {
  AlertDialogDescription,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  DropdownMenuGroup,
  AlertDialogTitle,
  DropdownMenuItem,
  DropdownMenu,
  AlertDialog,
  Button,
} from "@/components/ui";
import Link from "next/link";
import Typography from "@/components/Typography";
import { useState } from "react";

export default function BtnUserActions({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="px-0.5 text-2xl">
            <DotsThreeOutlineVertical weight="fill" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-900 rounded-md text-white border border-slate-800 mr-12">
          <DropdownMenuGroup>
            <Link href={`/h//users/user/${id}`}>
              <DropdownMenuItem className="active:bg-principal/50 rounded-md">
                <Note />
                <Typography
                  description="Ver"
                  fontjura={false}
                  type="h4"
                  classes="font-light"
                />
              </DropdownMenuItem>
            </Link>
            <Link href={`/h/users/user/edit/${id}`}>
              <DropdownMenuItem className="active:bg-orange-500/50 rounded-md">
                <NotePencil />
                <Typography
                  description="Editar"
                  fontjura={false}
                  type="h4"
                  classes="font-light"
                />
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-slate-800" />
          <DropdownMenuItem
            className="active:bg-red-500/50"
            onSelect={() => setIsOpen(true)}
          >
            <Trash />
            <Typography
              description="Eliminar"
              fontjura={false}
              type="h4"
              classes="font-light"
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
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
              <Button variant="secondary" onClick={() => setIsOpen(false)} className="bg-slate-700">
                Cancelar
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild className="bg-red-500 active:bg-red-600 hover:bg-red-600">
              <Button variant="destructive">Eliminar</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
