import { TableCell, TableRow } from "@/components/ui/table";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { UserBody } from "@/interface/interfaces";
import { DotsThree } from "@phosphor-icons/react/dist/ssr";
import { format } from "date-fns";
import BtnActions from "../../../buttons/btn-actions";

export default function UserTableBody({ dataArr }: { dataArr: UserBody[] }) {
  return dataArr.map((inv: UserBody) => {
    const {
      ultimaActualizacion,
      apellidoTrainer,
      nombreTrainer,
      fechaRegistro,
      diasEnMora,
      ultimoPago,
      apellido,
      dniCode,
      cedula,
      nombre,
      edad,
      sexo,
      peso,
      _id,
    } = inv;

    {
      /* format(fechaRegistro, "MM/dd/yyyy") */
    }
    return (
      <TableRow key={_id}>
        <TableCell>{_id}</TableCell>
        <TableCell className="font-medium">
          {capitalizeFirstLetter(nombre)}
        </TableCell>
        <TableCell className="font-medium">
          {capitalizeFirstLetter(apellido)}
        </TableCell>
        <TableCell>{`${dniCode}${cedula}`}</TableCell>
        <TableCell>{edad}</TableCell>
        <TableCell>{peso}</TableCell>
        <TableCell>{sexo}</TableCell>
        <TableCell className="">
          {format(fechaRegistro, "MM/dd/yyyy")}
        </TableCell>
        <TableCell className="">
          {format(ultimaActualizacion, "MM/dd/yyyy")}
        </TableCell>
        <TableCell>{`${diasEnMora} días`}</TableCell>
        <TableCell>
          {capitalizeFirstLetter(`${nombreTrainer} ${apellidoTrainer}`)}
        </TableCell>
        <TableCell className="">{format(ultimoPago, "MM/dd/yyyy")}</TableCell>
        <TableCell className="flex gap-2.5">
          <BtnActions
            iconTrigger={<DotsThree size={32} />}
            id={_id}
            titleDescription="¿Eliminar cliente?"
          />
        </TableCell>
      </TableRow>
    );
  });
}
