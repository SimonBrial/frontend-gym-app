import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { UserBody } from "@/interface/interfaces";
import TypographyText from "@/components/typography-text";
import { AvatarFallback, AvatarImage, Avatar, Badge } from "@/components/ui";
import BtnActions from "../../buttons/btn-actions";
import UserStatusBadge from "@/components/user-status-badge";
import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr";
import { format } from "date-fns";

export default function MobileTableItem({
  item,
  idx,
}: {
  item: UserBody;
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
          <UserStatusBadge status={idx % 2 ? "solvente" : "moroso"} />
          <BtnActions
            iconTrigger={<DotsThreeVertical size={32} />}
            titleDescription="¿Eliminara este cliente?"
            id={item._id}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("nombre")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={capitalizeFirstLetter(item.nombre)}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("apellido")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={item.apellido}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("cedula")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={item.cedula}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("peso")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={`${item.peso} Kg`}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("registro")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={format(item.fechaRegistro, "MM/dd/yyyy")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("ultimo pago")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={format(item.ultimaActualizacion, "MM/dd/yyyy")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("dias morando")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={`${item.diasEnMora} días`}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("trainer")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={
            item.nombreTrainer && item.apellidoTrainer
              ? `${item.nombreTrainer} ${item.apellidoTrainer}`
              : "No asignado"
          }
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center border border-transparent border-b-slate-800 w-full ">
        <TypographyText
          description={capitalizeFirstLetter("ultima actualizacion")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
        <TypographyText
          description={format(item.ultimaActualizacion, "MM/dd/yyyy")}
          fontjura={false}
          type="p"
          classes="text-base pl-2"
        />
      </div>
      <div className="grid grid-cols-2 justify-center items-center w-full ">
        <TypographyText
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
