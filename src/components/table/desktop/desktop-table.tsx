/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  // TableCaption,
  TableFooter,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@/components/ui/table";
import TypographyText from "@/components/typography-text";
import { useUserStore } from "@/store/user-store.store";
import { useEffect } from "react";
import UserTableHeader from "./users/user-table-header";
import UserTableBody from "./users/user-table-body";
import { UserBody } from "@/interface/interfaces";
// import { usePathname } from "next/navigation";

export default function DesktopTable() {
  //const path = usePathname();
  const getUsers = useUserStore((state) => state.fnGetUsers);
  const users: UserBody[] = useUserStore((state) => state.usersResponse.data);

  /* const createUser = useUserStore((state) => state.fnCreateUser); */
  // console.log(users);

  useEffect(() => {
    /*  if (users.length === 0 ) {
    } */
    getUsers();
  }, []);

  return (
    <>
      {users.length > 0 ? (
        <>
          <Table className="w-full p-6 bg-slate-900 rounded-lg">
            <TableHeader className="group">
              <UserTableHeader />
            </TableHeader>
            <TableBody>
              <UserTableBody dataArr={users} />
            </TableBody>
            <TableFooter className="rounded-b-lg">
              <TableRow className="bg-slate-900">
                <TableCell
                  colSpan={2}
                  className="rounded-bl-lg flex items-center gap-2"
                >
                  <TypographyText
                    description={`Total: ${users.length}`}
                    classes="text-principal"
                    fontjura
                    type="p"
                  />
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
      ) : (
        <div className="border border-slate-600 w-full p-6 bg-slate-900 rounded-lg">
          <TypographyText
            description="Tabla vacia, no hay registros para mostrar."
            fontjura
            type="p"
            color="text-principal"
            classes="text-center text-lg hidden sm:block"
          />
        </div>
      )}
    </>
  );
}
