import { TableData } from "@/interface/interfaces";
import { TableHead } from "../ui/table";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default function TableHeaderDB({ dataArray }: { dataArray: TableData[] }) {
  const keys = dataArray.length > 0 ? Object.keys(dataArray[0]) : [];
  return keys.map((invoice, idx) => (
    <TableHead key={idx} className="last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg">
      {invoice === "_id" ? "ID" : capitalizeFirstLetter(invoice)}
    </TableHead>
  ));
}
