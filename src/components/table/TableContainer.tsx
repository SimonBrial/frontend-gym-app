import {
  TableCaption,
  TableFooter,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@/components/ui/table";
import SectionHeader from "@/components/SectionHeader";
import { SearchInput } from "@/components/inputs/SearchInput";
import { invoices } from "@/data/tableData";
import { TableItems } from "./TableItems";
import { TableHeaderDB } from "./TableHeaderDB";

export function TableContainer() {
  return (
    <>
      <SectionHeader label="Clientes" />
      <div className="p-6 flex flex-col justify-center gap-6">
        <SearchInput />
        <Table className="p-6 bg-slate-900 rounded-lg">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className="">
              <TableHeaderDB dataArray={invoices} />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableItems dataArray={invoices} />
          </TableBody>
          <TableFooter>
            <TableRow className="bg-slate-900">
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell colSpan={1} className="text-right">
                7 inscripciones
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}
