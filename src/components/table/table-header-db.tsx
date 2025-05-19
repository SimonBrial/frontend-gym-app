import { TableHeaderDBProps } from "@/interface/interfaces";
import { TableHead } from "../ui/table";
import { separatesWords } from "@/utils/sepparate-words";

export default function TableHeaderDB({ dataArr }: TableHeaderDBProps) {
  const keys = dataArr.length > 0 ? Object.keys(dataArr[0]) : [];

  return keys.map((item, idx) => (
    <TableHead
      key={idx}
      className={`last:w-[17%] text-white group-hover:text-principal font-bold first:rounded-tl-lg last:rounded-tr-lg ${
        separatesWords(item) === "acciones"
          ? "text-center w-full"
          : "text-start"
      }`}
    >
      {separatesWords(item) === "_id" ? "ID" : separatesWords(item)}
    </TableHead>
  ));
}
