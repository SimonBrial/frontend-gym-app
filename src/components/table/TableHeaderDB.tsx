import { TableData } from "@/interface/interfaces";
import { TableHead } from "../ui/table";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export function TableHeaderDB({ dataArray }: { dataArray: TableData[] }) {
  const keys = dataArray.length > 0 ? Object.keys(dataArray[0]) : [];
  return keys.map((invoice, idx) => (
    <TableHead key={idx} className="last:w-[17%] text-white font-bold">
      {invoice === "_id" ? "ID" : capitalizeFirstLetter(invoice)}
    </TableHead>
  ));
}
