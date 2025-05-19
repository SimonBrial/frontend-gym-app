import TypographyText from "@/components/typography-text";
import MobileTableItems from "./mobile-table-item";
import { users } from "@/seeds/table-data";
import { Barbell } from "@phosphor-icons/react/dist/ssr";

export default function MobileTable() {
  return (
    <div className="sm:hidden block w-full bg-neutralBlack">
      {users.length > 0 ? (
        <ul className="flex flex-col gap-3 w-full">
          {users.map((user, idx: number) => (
            <MobileTableItems key={user._id} item={user} idx={idx} />
          ))}
        </ul>
      ) : (
        <div className="bg-slate-900 border border-slate-800 p-6 pb-10 rounded-lg flex flex-col items-center justify-center gap-5">
          <TypographyText
            description="Ingresa la cedula del cliente para ver su estatus actual"
            fontjura={false}
            type="p"
            classes="text-sm text-center"
          />
          <span className="text-principal/30 -rotate-45">
            <Barbell size={150} />
          </span>
        </div>
      )}
    </div>
  );
}
