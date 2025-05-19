import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { TableData } from "@/interface/interfaces";
import Typography from "@/components/typography";
import { AvatarFallback, AvatarImage, Avatar, Badge } from "@/components/ui";
import BtnActions from "./btn-actions";
import UserStatusBadge from "@/components/user-status-badge";
import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr";

export default function MobileTableItem({
  item,
  idx,
}: {
  item: TableData;
  idx: number;
}) {
  return (
    <li className="bg-slate-900 border border-slate-800 rounded-2xl w-full p-6 flex flex-col gap-3">
      <div className="flex justify-between items-center w-full border border-transparent border-b-slate-800 pb-3 pl-2">
        <Avatar className="w-[40px] h-[40px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex gap-2 justify-center items-center">
          <UserStatusBadge status={idx % 2 ? "Solvente" : "En Mora"} />
          <BtnActions
            iconTrigger={<DotsThreeVertical size={32} />}
            titleDescription="¿Eliminara este cliente?"
            id={item._id}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("nombre")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={capitalizeFirstLetter(item.nombre)}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("apellido")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={item.apellido}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("cedula")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={item.cedula}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("peso")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={`${item.peso} Kg`}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("registro")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={item.fechaRegistro}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("ultimo pago")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={item.ultimaActualizacion}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("dias morando")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={item.diasEnMora}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("trainer")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={item.trainer ? item.trainer : "No asignado"}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <Typography
          description={capitalizeFirstLetter("ultima actualizacion")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <Typography
          description={item.ultimaActualizacion}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center w-full ">
        <Typography
          description={capitalizeFirstLetter("vencimiento")}
          fontjura={false}
          type="h3"
          classes="text-base pl-2"
        />
        <Badge
          variant="outline"
          className={` ${
            idx % 2
              ? "border-principal text-principal bg-principal/20"
              : "border-red-500 text-red-500 bg-red-500/20"
          } text-sm`}
        >
          {"18/06/2025"}
        </Badge>
      </div>
    </li>
  );
}
