import { TableCell, TableRow } from "@/components/ui/table";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { TableData } from "@/interface/interfaces";
import { format } from "date-fns";
import { Note, Trash, NotePencil } from "@phosphor-icons/react/dist/ssr";
import ToolTipLayout from "@/components/ToolTipLayout";
import {
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog,
  Button,
} from "@/components/ui";
import Link from "next/link";
import Typography from "@/components/Typography";

export default function DesktopTableItems({
  dataArray,
}: {
  dataArray: TableData[];
}) {

  return dataArray.map((inv: TableData) => {
    const { cedula, corte, nombre, status, tipo, _id } = inv;
    return (
      <TableRow key={_id} className="">
        <TableCell>{_id.slice(0, 6)}</TableCell>
        <TableCell className="font-medium">
          {capitalizeFirstLetter(nombre)}
        </TableCell>
        <TableCell>{cedula}</TableCell>
        <TableCell>{capitalizeFirstLetter(tipo)}</TableCell>
        <TableCell>{capitalizeFirstLetter(status)}</TableCell>
        <TableCell className="">{format(corte, "MM/dd/yyyy")}</TableCell>
        <TableCell className="flex gap-2.5">
          <ToolTipLayout label="ver">
            <Link href={`/h//users/user/${_id}`}>
              <Button variant="userAction">
                <Note />
              </Button>
            </Link>
          </ToolTipLayout>
          <ToolTipLayout label="editar">
            <Link href={`/h/users/user/edit/${_id}`}>
              <Button variant="userAction">
                <NotePencil />
              </Button>
            </Link>
          </ToolTipLayout>
          <AlertDialog>
            <ToolTipLayout label="eliminar">
              <AlertDialogTrigger asChild>
                <Button variant="userAction">
                  <Trash />
                </Button>
              </AlertDialogTrigger>
            </ToolTipLayout>
            <AlertDialogContent className="bg-slate-900 border border-slate-700 w-[85%] rounded-md">
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
          </AlertDialog>
        </TableCell>
      </TableRow>
    );
  });
}
