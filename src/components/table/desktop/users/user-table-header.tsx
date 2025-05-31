import TypographyText from "@/components/typography-text";
import { TableRow, TableHead } from "@/components/ui/table";

export default function UserTableHeader() {
  return (
    <TableRow className="border-b-2 border-b-principal">
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="ID" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Nombre" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Apellido" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Cedula" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Edad" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Peso" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Sexo" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Fecha de Registro" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Ultimo Pago" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Dias en Mora" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Entrenador" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Ultima Actualizacion" fontjura type="p" />
      </TableHead>
    </TableRow>
  );
}
