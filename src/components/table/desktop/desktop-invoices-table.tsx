import {
  TableFooter,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@/components/ui/table";
import { invoices } from "@/seeds/table-data";
import TableHeaderDB from "../table-header-db";
import { InvoiceTableProps } from "@/interface/interfaces";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { DotsThree } from "@phosphor-icons/react/dist/ssr";
import { format } from "date-fns";
import BtnActions from "../mobile/btn-actions";

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
          <TableRow>
            <TableHeaderDB dataArr={invoices} />
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {invoices.map((inv: InvoiceTableProps, idx) => {
            const { corte, mes, numero, status, tipo, _id } = inv;

            {
              /* format(fechaRegistro, "MM/dd/yyyy") */
            }
            return (
              <TableRow key={idx} className="w-full">
                <TableCell>{idx + 1}</TableCell>
                <TableCell className="font-medium">
                  {capitalizeFirstLetter(mes)}
                </TableCell>
                <TableCell>{numero}</TableCell>
                <TableCell>{tipo}</TableCell>
                <TableCell>{status}</TableCell>
                <TableCell className="">
                  {format(corte, "MM/dd/yyyy")}
                </TableCell>

                <TableCell className="flex gap-2.5">
                  <BtnActions
                    titleDescription="¿Eliminara esta factura?"
                    iconTrigger={<DotsThree size={32} />}
                    id={_id}
                  />
                </TableCell>

                {/* <TableCell className="flex gap-2.5">
                  <ToolTipLayout label="ver">
                    <Link href={`/h//users/user/${_id}`}>
                      <Button variant="userAction">
                        <Note />
                      </Button>
                    </Link>
                  </ToolTipLayout>
                  <ToolTipLayout label="editar">
                    <Link href={`/h/users/user/edit/${_id}`}>
                      <Button variant="userAction">
                        <NotePencil />
                      </Button>
                    </Link>
                  </ToolTipLayout>
                  <AlertDialog>
                    <ToolTipLayout label="eliminar">
                      <AlertDialogTrigger asChild>
                        <Button variant="userAction">
                          <Trash />
                        </Button>
                      </AlertDialogTrigger>
                    </ToolTipLayout>
                    <AlertDialogContent className="bg-slate-900 border border-slate-700 w-[85%] rounded-md">
                      <AlertDialogHeader className="flex flex-col text-white justify-center items-center">
                        <span>
                          <Trash size={40} weight="fill" />
                        </span>
                        <AlertDialogTitle asChild>
                          <Typography
                            description="¿Eliminar factura?"
                            fontjura={false}
                            type="h2"
                          />
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-white" asChild>
                          <Typography
                            description="Esta acción no se puede deshacer"
                            fontjura={false}
                            type="p"
                          />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                          <Button variant="secondary" className="bg-slate-800">
                            Cancelar
                          </Button>
                        </AlertDialogCancel>
                        <AlertDialogAction asChild>
                          <Button
                            variant="destructive"
                            className="bg-red-500 active:bg-red-600 hover:bg-red-600"
                          >
                            Eliminar
                          </Button>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell> */}
              </TableRow>
            );
          })}
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
