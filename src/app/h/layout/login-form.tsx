import TextInput from "@/components/inputs/text-input";
import TypographyText from "@/components/typography-text";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-[24px] p-6 w-full">
      <div className="border-2 border-slate-800 bg-slate-900 rounded-[16px] p-[16px] flex flex-col items-center gap-[16px]">
        <TypographyText
          type="h4"
          description={"Bienvenido"}
          fontjura={false}
          color="text-white"
        />
        <TextInput
          label="Email"
          classNameContainer="text-white w-full flex flex-col gap-6"
          className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
          placeholder="Email"
        />
        <TextInput
          label="Contraseña"
          classNameContainer="text-white w-full flex flex-col gap-6"
          className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
          placeholder="Contraseña"
        />
      </div>
      <Link href={"/h/home"}>
        <Button variant={"principal"}>Ingresar</Button>
      </Link>
    </div>
  );
}
