import { TypographyH3, TypographyP } from "@/components/typography";
import imgBackground from "../../public/img/login-background.jpg";
import LoginForm from "./LoginForm";
import Image from "next/image";

export default function Login() {
  return (
    <main className="flex min-h-screen">
      <div className=" w-3/4 flex justify-center items-center">
        <Image src={imgBackground} alt="login background" className="w-full h-screen" />
      </div>
      <div className="flex flex-col justify-between items-center w-1/4 bg-neutralBlack p-6">
        <div className="flex gap-1">
          <TypographyH3 description={"SMART"} fontjura color="text-white" />
          <TypographyH3 description={"GYM"} fontjura color="text-principal" />
          <TypographyH3 description={"ADMIN"} fontjura color="text-white" />
        </div>
        <LoginForm />
        <TypographyP
          description={"2024 @ Contactar soporte"}
          fontjura={false}
          color="text-white"
        />
      </div>
    </main>
  );
}
