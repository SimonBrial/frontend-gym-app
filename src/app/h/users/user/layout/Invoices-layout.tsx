import { invoices } from "@/seeds/table-data";
import InvoiceCardLayout from "./invoice-card-layout";

export default function InvoicesLayout() {
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-start items-center ">
      <div className=" flex flex-col items-center justify-center gap-4 py-4 mb--4 w-full">
        {invoices.map((invoice, index) => {
          return <InvoiceCardLayout inv={invoice} key={index} />;
        })}
      </div>
    </div>
  );
}
