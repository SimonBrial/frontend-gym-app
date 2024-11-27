import { TableCell, TableRow } from "@/components/ui/table";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { TableData } from "@/interface/interfaces";
import { format } from "date-fns";
import { Note, Trash, NotePencil } from "@phosphor-icons/react/dist/ssr";
import ToolTipLayout from "@/components/ToolTipLayout";
import { Button } from "@/components/ui";
import Link from "next/link";

export default function DesktopTableItems({
  dataArray,
}: {
  dataArray: TableData[];
}) {
  const actionsItem = [
    { dir: "/h/home", icon: <Note />, label: "ver" },
    { dir: "/h/home", icon: <NotePencil />, label: "editar" },
    { dir: "/h/home", icon: <Trash />, label: "eliminar" },
  ];

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
          {actionsItem.map((actionsItem) => {
            const { dir, icon, label } = actionsItem;
            return (
              <ToolTipLayout label={label} key={label}>
                <Link href={dir}>
                  <Button variant="userAction">{icon}</Button>
                </Link>
              </ToolTipLayout>
            );
          })}
        </TableCell>
      </TableRow>
    );
  });
}
