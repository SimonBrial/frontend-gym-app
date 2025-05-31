import TypographyText from "@/components/typography-text";
import { TableRow, TableHead } from "@/components/ui/table";

export default function InvoiceTableHeader() {
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
        <TypographyText description="Mes" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Numero" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Tipo" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Status" fontjura type="p" />
      </TableHead>
      <TableHead
        className={
          "last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg"
        }
      >
        <TypographyText description="Corte" fontjura type="p" />
      </TableHead>
    </TableRow>
  );
}
