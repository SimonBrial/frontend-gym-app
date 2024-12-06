import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { TableData } from "@/interface/interfaces";
import { format } from "date-fns";
import Typography from "@/components/Typography";
import {
  DotsThreeOutlineVertical,
  NotePencil,
  Barbell,
  // Trash,
  Note,
} from "@phosphor-icons/react/dist/ssr";
import {
  // AlertDialogDescription,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
  /* AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader, */
  DropdownMenuGroup,
  // AlertDialogTitle,
  DropdownMenuItem,
  AvatarFallback,
  DropdownMenu,
  // AlertDialog,
  AvatarImage,
  Button,
  Avatar,
  Badge,
} from "@/components/ui";
import Link from "next/link";
/* import { Button } from "@/components/ui";
import Link from "next/link"; */

export default function MobileTableItems({
  item,
  idx,
}: {
  item: TableData;
  idx: number;
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full p-6 flex flex-col gap-3">
      <div className="flex justify-between items-center w-full border border-transparent border-b-slate-800 pb-3">
        <Avatar className="w-[40px] h-[40px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex gap-2 justify-center items-center">
          <div
            className={`flex justify-center items-center gap-3 py-[4px] px-4 border ${
              idx % 2 ? "border-principal" : "border-red-500"
            }  rounded-md`}
          >
            <span
              className={`h-[30px] w-[30px] -mb-1 ${
                idx % 2 ? "text-principal" : "text-red-500"
              }`}
            >
              <Barbell size={25} />
            </span>
            <Typography
              description={idx % 2 ? "Solvente" : "En Mora"}
              fontjura={false}
              type="h2"
              classes="text-base"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="px-0.5 text-2xl">
                <DotsThreeOutlineVertical weight="fill" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-900 rounded-md text-white border border-slate-800 mr-12">
              <DropdownMenuGroup>
                <Link href={`/h//users/user/${item._id}`}>
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
                <Link href={`/h/users/user/edit/${item._id}`}>
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

              {/* <AlertDialog>
                <AlertDialogTrigger>
                  <DropdownMenuItem className="active:bg-red-500/50">
                    <Trash />
                    <Typography
                      description="Eliminar"
                      fontjura={false}
                      type="h4"
                      classes="font-light"
                    />
                  </DropdownMenuItem>
                </AlertDialogTrigger>
                <AlertDialogContent
                  forceMount
                  className="bg-slate-900 border border-slate-700 w-[85%] rounded-md"
                >
                  <AlertDialogHeader className="flex flex-col text-white justify-center items-center">
                    <span>
                      <Trash size={40} weight="fill" />
                    </span>
                    <AlertDialogTitle asChild>
                      <Typography
                        description="¿Eliminar cliente?"
                        fontjura={false}
                        type="h2"
                      />
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-white" asChild>
                      <Typography
                        description="Esta acción no se puede deshacer"
                        fontjura={false}
                        type="p"
                      />
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                      <Button variant="secondary">Cancelar</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button variant="destructive">Eliminar</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex justify-between items-center w-full ">
        <Typography
          description={capitalizeFirstLetter(item.nombre)}
          fontjura={false}
          type="h3"
          classes="text-lg"
        />
        <Typography
          description={item.cedula as string}
          fontjura={false}
          type="p"
          classes="text-lg"
        />
      </div>
      <div className="flex justify-between items-center w-full ">
        <Typography
          description={capitalizeFirstLetter("vencimiento")}
          fontjura={false}
          type="h3"
          classes="text-lg"
        />
        <Badge
          variant="outline"
          className={` ${
            idx % 2
              ? "border-principal text-principal bg-principal/20"
              : "border-red-500 text-red-500 bg-red-500/20"
          } text-sm`}
        >
          {format(item.corte, "MM/dd/yyyy")}
        </Badge>
      </div>
      {/* <div className="flex flex-col gap-2 p-4">
                <Button variant="outline">Renovar suscripción</Button>
                <Link href={`/h/users/user/edit/${_id}`}><Button variant="outline">Editar datos</Button></Link>
              </div> */}
    </div>
  );
}
