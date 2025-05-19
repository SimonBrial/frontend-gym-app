import { invoices } from "@/seeds/table-data";
import InvoiceCardLayout from "./invoice-card-layout";

export default function InvoicesLayout() {
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-start items-center ">
      {/* <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center gap-2 px-3 py-3 w-full divide-y divide-slate-700 divide-dotted text-center ">
        <div className=" w-full">Title</div>
        <div className=" w-full py-2">Description</div>
      </div> */}

      <div className=" flex flex-col items-center justify-center gap-2 py-3 mb-4 w-full">
        {invoices.map((invoice, index) => {
          return <InvoiceCardLayout inv={invoice} key={index} />;
        })}
      </div>
    </div>
  );
}
