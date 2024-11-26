import { TableCell, TableRow } from "@/components/ui/table";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { TableData } from "@/interface/interfaces";
import { format } from "date-fns";
/* import { Button } from "../ui/button";
import { Note, Trash, NotePencil } from "@phosphor-icons/react/dist/ssr";
import ToolTipLayout from "../ToolTipLayout"; */

export default function DesktopTableItems({ dataArray }: { dataArray: TableData[] }) {
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
        <TableCell className="">
          {format(corte, "MM/dd/yyyy")}
        </TableCell>
        <TableCell className="flex gap-2.5">
          {/* TODO: There is an hydratation problem with those buttons */}
          {/* <ToolTipLayout label="ver">
            <Button variant="userAction">
              <Note />
            </Button>
          </ToolTipLayout>
          <ToolTipLayout label="editar">
            <Button variant="userAction">
              <NotePencil />
            </Button>
          </ToolTipLayout>
          <ToolTipLayout label="eliminar">
            <Button variant="userAction">
              <Trash />
            </Button>
          </ToolTipLayout> */}
          prueba
        </TableCell>
      </TableRow>
    );
  });
}
