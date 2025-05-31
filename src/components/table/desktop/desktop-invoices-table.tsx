import {
  TableFooter,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@/components/ui/table";
import { invoices } from "@/seeds/table-data";
import InvoiceTableHeader from "./invoices/invoice-table-header";
import InvoiceTableBody from "./invoices/invoice-table-body";

// format(fechaRegistro, "MM/dd/yyyy")

export default function DesktopInvoicesTable(/* {
  invoicesArray,
}: {
  invoicesArray: InvoiceTableProps[];
} */) {
  return (
    <>
      <Table className="p-6 bg-slate-900 rounded-lg hidden sm:block">
        {/* <TableCaption className="text-principal">
            A list of your recent invoices.
          </TableCaption> */}
        <TableHeader className="group">
          <InvoiceTableHeader />
        </TableHeader>
        <TableBody className="w-full">
          <InvoiceTableBody invoices={invoices} />
        </TableBody>
        <TableFooter className="rounded-b-lg w-full">
          <TableRow className="bg-slate-900 w-full">
            <TableCell colSpan={6} className="rounded-bl-lg w-full">
              Total
            </TableCell>
            <TableCell colSpan={1} className="text-right rounded-br-lg">
              {invoices.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
