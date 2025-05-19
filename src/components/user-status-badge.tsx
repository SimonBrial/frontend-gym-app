import { Barbell } from "@phosphor-icons/react/dist/ssr";
import Typography from "./typography";

export default function UserStatusBadge({ status }: { status: string }) {
  return (
    <div className="flex gap-2 justify-center items-center">
      <div
        className={`flex justify-center items-center gap-3 py-[4px] px-4 border ${
          status.toLocaleLowerCase() === "solvente"
            ? "border-principal"
            : "border-red-500"
        }  rounded-md`}
      >
        <span
          className={`h-[30px] w-[30px] -mb-1 ${
            status.toLocaleLowerCase() === "solvente"
              ? "text-principal"
              : "text-red-500"
          }`}
        >
          <Barbell size={25} />
        </span>
        <Typography
          description={status}
          fontjura={false}
          type="h2"
          classes="text-base"
        />
      </div>
    </div>
  );
}
