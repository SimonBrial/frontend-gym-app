"use client";

import { NotePencil, Trash, Note } from "@phosphor-icons/react/dist/ssr";
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
  DropdownMenu,
  AlertDialog,
  Button,
  DropdownMenuItem,
} from "@/components/ui";
import Link from "next/link";
import TypographyText from "@/components/typography-text";
import { useState } from "react";

export default function BtnActions({
  titleDescription,
  iconTrigger,
  id,
}: {
  id: string;
  titleDescription: string;
  iconTrigger: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          asChild
          className="hover:cursor-pointer hover:bg-white/20 rounded-md hover:text-lg hover:text-white"
        >
          {iconTrigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-900 rounded-md text-white border border-slate-800 mr-12">
          <DropdownMenuGroup>
            <Link
              href={`/h//users/user/${id}`}
              className="flex gap-2 items-center"
            >
              <DropdownMenuItem className="w-full hover:cursor-pointer hover:bg-transparent hover:sm:bg-principal/20 hover:text-principal hover:sm:text-principal text-principal active:text-principal active:bg-principal/20  px-2 py-1 rounded-md ">
                <Note />
                <span>Ver</span>
              </DropdownMenuItem>
            </Link>
            <Link
              href={`/h/users/user/edit/${id}`}
              className="flex gap-2 items-center"
            >
              <DropdownMenuItem className="w-full hover:cursor-pointer hover:bg-transparent hover:sm:bg-orange-500/20 hover:text-orange-500 hover:sm:text-orange-500 text-orange-500 active:text-orange-500 active:bg-orange-500/20  px-2 py-1 rounded-md ">
                <NotePencil />
                <span>Editar</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="mx-2 bg-slate-600" />
          <DropdownMenuItem
            className="hover:cursor-pointer hover:bg-transparent hover:sm:bg-red-500/20 hover:text-red-500 hover:sm:text-red-500 text-red-500 active:text-red-500 active:bg-red-500/20  px-2 py-1 rounded-md "
            onSelect={() => setIsOpen(true)}
          >
            <Trash />
            <span>Eliminar</span>
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
              <TypographyText
                description={titleDescription}
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
                onClick={() => setIsOpen(false)}
                className="bg-slate-700"
              >
                Cancelar
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction
              asChild
              className="bg-red-500 active:bg-red-600 hover:bg-red-600"
            >
              <Button variant="destructive">Eliminar</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
