import TextInput from "@/components/inputs/TextInput";
import { Typography } from "@/components/Typography";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-[24px] p-6 w-full">
      <div className="border-2 border-slate-800 bg-slate-900 rounded-[16px] p-[16px] flex flex-col items-center gap-[16px]">
        <Typography
          type="h4"
          description={"Bienvenido"}
          fontjura={false}
          color="text-white"
        />
        <TextInput
          label="Email"
          classNameLabel="text-white w-full flex flex-col gap-6"
          className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
          placeholder="Email"
        />
        <TextInput
          label="Contraseña"
          classNameLabel="text-white w-full flex flex-col gap-6"
          className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
          placeholder="Contraseña"
        />
      </div>
      <Link href={"/home"}>
        <Button variant={"principal"}>Ingresar</Button>
      </Link>
    </div>
  );
}
