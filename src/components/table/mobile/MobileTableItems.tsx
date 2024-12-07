import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { TableData } from "@/interface/interfaces";
import { format } from "date-fns";
import Typography from "@/components/Typography";
import { Barbell } from "@phosphor-icons/react/dist/ssr";
import { AvatarFallback, AvatarImage, Avatar, Badge } from "@/components/ui";
import BtnUserActions from "./BtnUserActions";

export default function MobileTableItems({
  item,
  idx,
}: {
  item: TableData;
  idx: number;
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full p-6 flex flex-col gap-3">
      <div className="flex justify-between items-center w-full border border-transparent border-b-slate-800 pb-3">
        <Avatar className="w-[40px] h-[40px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex gap-2 justify-center items-center">
          <div
            className={`flex justify-center items-center gap-3 py-[4px] px-4 border ${
              idx % 2 ? "border-principal" : "border-red-500"
            }  rounded-md`}
          >
            <span
              className={`h-[30px] w-[30px] -mb-1 ${
                idx % 2 ? "text-principal" : "text-red-500"
              }`}
            >
              <Barbell size={25} />
            </span>
            <Typography
              description={idx % 2 ? "Solvente" : "En Mora"}
              fontjura={false}
              type="h2"
              classes="text-base"
            />
          </div>
          <BtnUserActions id={item._id} />
        </div>
      </div>
      <div className="flex justify-between items-center w-full ">
        <Typography
          description={capitalizeFirstLetter(item.nombre)}
          fontjura={false}
          type="h3"
          classes="text-lg"
        />
        <Typography
          description={item.cedula as string}
          fontjura={false}
          type="p"
          classes="text-lg"
        />
      </div>
      <div className="flex justify-between items-center w-full ">
        <Typography
          description={capitalizeFirstLetter("vencimiento")}
          fontjura={false}
          type="h3"
          classes="text-lg"
        />
        <Badge
          variant="outline"
          className={` ${
            idx % 2
              ? "border-principal text-principal bg-principal/20"
              : "border-red-500 text-red-500 bg-red-500/20"
          } text-sm`}
        >
          {format(item.corte, "MM/dd/yyyy")}
        </Badge>
      </div>
    </div>
  );
}
