import { invoices } from "@/data/tableData";
import MobileTableItems from "./MobileTableItems";

export default function MobileTable() {
  return (
    <div className="sm:hidden block">
      <MobileTableItems dataArray={invoices} />
    </div>
  );
}
