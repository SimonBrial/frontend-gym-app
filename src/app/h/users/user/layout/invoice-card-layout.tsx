import Typography from "@/components/typography";
import { Badge } from "@/components/ui";
import { InvoiceTableProps } from "@/interface/interfaces";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { format } from "date-fns";
import React from "react";

export default function InvoiceCardLayout({ inv }: { inv: InvoiceTableProps }) {
  return (
    <div className="w-full py-2 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-start gap-2 px-3 text-center">
      <div className="grid grid-cols-2 px-4 py-2 border-b border-slate-800 mx-2">
        <Typography
          description={capitalizeFirstLetter("mes")}
          fontjura={false}
          type="p"
          classes="text-base font-bold -mx-2 flex justify-start"
        />{" "}
        <Typography
          description={capitalizeFirstLetter(inv.mes)}
          fontjura={false}
          type="p"
          classes="text-base text-start pl-1"
        />
      </div>
      <div className="grid grid-cols-2 px-4 py-2 border-b border-slate-800 mx-2">
        <Typography
          description={capitalizeFirstLetter("numero")}
          fontjura={false}
          type="p"
          classes="text-base font-bold -mx-2 flex justify-start"
        />{" "}
        <Typography
          description={inv.numero}
          fontjura={false}
          type="p"
          classes="text-base text-start pl-1"
        />
      </div>
      <div className="grid grid-cols-2 px-4 py-2 border-b border-slate-800 mx-2">
        <Typography
          description={capitalizeFirstLetter("tipo")}
          fontjura={false}
          type="p"
          classes="text-base font-bold -mx-2 flex justify-start"
        />{" "}
        <Typography
          description={capitalizeFirstLetter(inv.tipo)}
          fontjura={false}
          type="p"
          classes="text-base text-start pl-1"
        />
      </div>
      <div className="grid grid-cols-2 px-4 py-2 border-b border-slate-800 mx-2">
        <Typography
          description={capitalizeFirstLetter("status")}
          fontjura={false}
          type="p"
          classes="text-base font-bold -mx-2 flex justify-start"
        />{" "}
        <Badge
          variant={"default"}
          className={
            inv.status.toLowerCase() === "pago"
              ? " text-principal bg-principal/20 border border-principal text-center w-1/2 flex justify-center"
              : " text-denied bg-denied/20 text-center border border-denied w-1/2 flex justify-center"
          }
        >
          {inv.status}
        </Badge>
      </div>
      <div className="grid grid-cols-2 px-4 py-2 border-b border-slate-800 mx-2">
        <Typography
          description={capitalizeFirstLetter("corte")}
          fontjura={false}
          type="p"
          classes="text-base font-bold -mx-2 flex justify-start"
        />{" "}
        <Typography
          description={format(inv.corte, "MM/dd/yyyy")}
          fontjura={false}
          type="p"
          classes="text-base text-start pl-1"
        />
      </div>
    </div>
  );
}
