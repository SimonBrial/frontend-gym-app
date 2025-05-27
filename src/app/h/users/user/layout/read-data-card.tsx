import TypographyText from "@/components/typography-text";
import { UserBody } from "@/interface/interfaces";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { format } from "date-fns";

export default function ReadDataCard({ data }: { data: UserBody[] }) {
  return (
    <ul className="w-full">
      {data.map((item, index) => {
        const {
          ultimaActualizacion,
          fechaRegistro,
          diasEnMora,
          ultimoPago,
          apellido,
          trainer,
          cedula,
          nombre,
          edad,
          peso,
        } = item;
        return (
          <li
            key={index}
            className="p-6 justify-center items-center border-b border-slate-800 last:border-b-0"
          >
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("nombre")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={capitalizeFirstLetter(nombre)}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("apellido")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={apellido}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("cedula")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={cedula}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("edad")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={edad.toString()}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("peso")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={`${peso} Kg`}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("registro")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={format(fechaRegistro, "MM/dd/yyyy")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("ultimo pago")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={format(ultimoPago, "MM/dd/yyyy")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("dias en mora")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={`${diasEnMora} días`}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("trainer")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={trainer}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("ultima actualizacion")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={format(ultimaActualizacion, "MM/dd/yyyy")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
