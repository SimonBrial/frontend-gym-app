import {
  TableCaption,
  TableFooter,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@/components/ui/table";
import { invoices } from "@/data/tableData";
import TableHeaderDB from "../TableHeaderDB";
import DesktopTableItems from "./DesktopTableItems";

export default function DesktopTable() {
  return (
    <Table className="p-6 bg-slate-900 rounded-lg">
        <TableCaption className="text-principal">A list of your recent invoices.</TableCaption>
        <TableHeader className="group">
          <TableRow >
            <TableHeaderDB dataArray={invoices}/>
          </TableRow>
        </TableHeader>
        <TableBody>
          <DesktopTableItems dataArray={invoices} />
        </TableBody>
        <TableFooter className="rounded-b-lg">
          <TableRow className="bg-slate-900">
            <TableCell colSpan={6} className="rounded-bl-lg">Total</TableCell>
            <TableCell colSpan={1} className="text-right rounded-br-lg">
              {invoices.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
  )
}
