import { TableCell, TableRow } from "@/components/ui/table";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { TableData } from "@/interface/interfaces";
import { format } from "date-fns";

export function TableItems({ dataArray }: { dataArray: TableData[] }) {
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
        <TableCell className="text-right">
          {format(corte, "MM/dd/yyyy")}
        </TableCell>
      </TableRow>
    );
  });
}
