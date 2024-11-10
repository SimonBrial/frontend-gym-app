import imgBackground from "../../public/img/login-background.jpg";
import LoginForm from "./LoginForm";
import Image from "next/image";
import Logo from "@/components/Logo";
import { Typography } from "@/components/Typography";

export default function Login() {
  return (
    <main className="flex min-h-screen">
      <div className=" w-3/4 flex justify-center items-center">
        <Image
          src={imgBackground}
          alt="login background"
          className="w-full h-screen"
        />
      </div>
      <div className="flex flex-col justify-between items-center w-1/4 bg-neutralBlack p-6">
        <Logo />
        <LoginForm />
        <Typography
          type="p"
          description={"2024 @ Contactar soporte"}
          fontjura={false}
          color="text-white"
        />
      </div>
    </main>
  );
}
