import Typography from "@/components/Typography";
import MobileTableItems from "./MobileTableItems";
import { invoices } from "@/data/tableData";
import { Barbell } from "@phosphor-icons/react/dist/ssr";

export default function MobileTable() {
  return (
    <div className="sm:hidden block w-full bg-neutralBlack">
      {invoices.length > 0 ? (
        <ul className="flex flex-col gap-3 w-full">
          {invoices.map((item, idx: number) => (
            <li className="w-full" key={item._id}>
              <MobileTableItems key={item._id} item={item} idx={idx} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-slate-900 border border-slate-800 p-6 pb-10 rounded-lg flex flex-col items-center justify-center gap-5">
          <Typography
            description="Ingresa la cedula del cliente para ver su estatus actual"
            fontjura={false}
            type="p"
            classes="text-sm text-center"
          />
          <span className="text-principal/30 -rotate-45">
            <Barbell size={150} />
          </span>
        </div>
      )}
    </div>
  );
}
