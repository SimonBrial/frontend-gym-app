import Typography from "@/components/typography";
import { TableData } from "@/interface/interfaces";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

export default function ReadDataCard({ data }: { data: TableData[] }) {
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
              <Typography
                description={capitalizeFirstLetter("nombre")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={capitalizeFirstLetter(nombre)}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <Typography
                description={capitalizeFirstLetter("apellido")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={apellido}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <Typography
                description={capitalizeFirstLetter("cedula")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={cedula}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <Typography
                description={capitalizeFirstLetter("edad")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={edad.toString()}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <Typography
                description={capitalizeFirstLetter("peso")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={`${peso} Kg`}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <Typography
                description={capitalizeFirstLetter("registro")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={fechaRegistro}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <Typography
                description={capitalizeFirstLetter("ultimo pago")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={ultimoPago}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <Typography
                description={capitalizeFirstLetter("dias morando")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={diasEnMora}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 border border-transparent border-b-slate-800 w-full ">
              <Typography
                description={capitalizeFirstLetter("trainer")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={trainer}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
            </div>
            <div className="grid grid-cols-2 justify-center items-center py-1 w-full ">
              <Typography
                description={capitalizeFirstLetter("ultima actualizacion")}
                fontjura={false}
                type="p"
                classes="text-base pl-2"
              />
              <Typography
                description={ultimaActualizacion}
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
