import TypographyText from "@/components/typography-text";
import { UserBody } from "@/interface/interfaces";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { format } from "date-fns";

export default function ReadDataCard({ data }: { data: UserBody }) {
  return (
    <>
      {data ? (
        <div className="w-full">
          <div className="p-6 justify-center items-center border-b border-slate-800 last:border-b-0">
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("nombre")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={capitalizeFirstLetter(data.nombre)}
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
                description={data.apellido}
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
                description={data.cedula}
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
                description={data.edad.toString()}
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
                description={`${data.peso} Kg`}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <TypographyText
                description={capitalizeFirstLetter("sexo")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <TypographyText
                description={`${data.sexo}`}
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
                description={format(data.fechaRegistro, "MM/dd/yyyy")}
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
                description={format(data.ultimoPago, "MM/dd/yyyy")}
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
                description={`${data.diasEnMora} días`}
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
                description={`${data.nombreTrainer} ${data.apellidoTrainer}`}
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
                description={format(data.ultimaActualizacion, "MM/dd/yyyy")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-slate-600 w-full p-6 bg-slate-900 rounded-lg">
          <TypographyText
            description="No hay datos para mostrar."
            fontjura
            type="p"
            color="text-principal"
            classes="text-center text-lg hidden sm:block"
          />
        </div>
      )}
    </>
  );
}
