import { TableHead, TableRow } from "../ui/table";

export default function TableHeaderDB() {
  const classHead =
    "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg text-center w-full";
  return (
    <TableRow>
      <TableHead className={classHead}>ID</TableHead>
      <TableHead className={classHead}>Nombre</TableHead>
      <TableHead className={classHead}>Apellido</TableHead>
      <TableHead className={classHead}>Cedula</TableHead>
      <TableHead className={classHead}>Edad</TableHead>
      <TableHead className={classHead}>Peso</TableHead>
      <TableHead className={classHead}>Fecha de Registro</TableHead>
      <TableHead className={classHead}>Ultimo Pago</TableHead>
      <TableHead className={classHead}>Dias en Mora</TableHead>
      <TableHead className={classHead}>Trainer</TableHead>
      <TableHead className={classHead}>Ultima Actualizacion</TableHead>
    </TableRow>
  );
}
