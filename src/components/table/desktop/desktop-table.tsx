import {
  // TableCaption,
  TableFooter,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@/components/ui/table";
import { users } from "@/seeds/table-data";
import TableHeaderDB from "../table-header-db";
import DesktopTableItems from "./desktop-table-items";
import TypographyText from "@/components/typography-text";


export default function DesktopTable() {
  return (
    <>
      <Table className="w-full p-6 bg-slate-900 rounded-lg">
        {/* <TableCaption className="text-principal">
          A list of your recent invoices.
        </TableCaption> */}
        <TableHeader className="group">
          <TableRow>
            <TableHeaderDB dataArr={users} />
          </TableRow>
        </TableHeader>
        <TableBody>
            <DesktopTableItems dataArr={users} />
        </TableBody>
        <TableFooter className="rounded-b-lg">
          <TableRow className="bg-slate-900">
            <TableCell colSpan={6} className="rounded-bl-lg">
              Total
            </TableCell>
            <TableCell colSpan={1} className="text-right rounded-br-lg">
              {users.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <TypographyText
        description="A list of your recent invoices."
        fontjura={false}
        type="p"
        color="text-principal"
        classes="text-center text-sm sm:text-base mt-4 hidden sm:block"
      />
    </>
  );
}
