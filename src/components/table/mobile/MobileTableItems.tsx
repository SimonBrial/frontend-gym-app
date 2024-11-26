import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { TableData } from "@/interface/interfaces";
import { format } from "date-fns";
import Typography from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Barbell } from "@phosphor-icons/react/dist/ssr/Barbell";
import { Button } from "@/components/ui";

export default function MobileTableItems({
  dataArray,
}: {
  dataArray: TableData[];
}) {
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {dataArray.map((inv: TableData) => {
          const { cedula, corte, nombre, _id } = inv;
          return (
            <li
              key={_id}
              className="bg-slate-900 border border-slate-800 rounded-[6px]"
            >
              <div className="flex justify-between items-center w-full p-6">
                <Avatar className="w-[64px] h-[64px] rounded-md">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex justify-center items-center gap-4 py-2 px-6 border-2 border-principal rounded-[6px]">
                  <span className="h-[35px] w-[25px] -mb-1">
                    <Barbell size={30} />
                  </span>
                  <Typography
                    description="Solvente"
                    fontjura={false}
                    type="h2"
                    classes="-mb-1"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full p-4">
                <Typography
                  description={capitalizeFirstLetter(nombre)}
                  fontjura={false}
                  type="h3"
                />
                <Typography
                  description={cedula as string}
                  fontjura={false}
                  type="p"
                />
              </div>
              <div className="flex justify-between items-center w-full p-4">
                <Typography
                  description={capitalizeFirstLetter("vencimiento")}
                  fontjura={false}
                  type="h3"
                />
                <Badge
                  variant="outline"
                  className="text-principal border-principal text-xl"
                >
                  {format(corte, "MM/dd/yyyy")}
                </Badge>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <Button variant="outline">Renovar suscripción</Button>
                <Button variant="outline">Editar datos</Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
