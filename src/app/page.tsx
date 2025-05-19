import imgBgDesktop from "../../public/img/login-background.jpg";
import imgBgMobile from "../../public/img/bg-login-mobile.jpg";
import LoginForm from "./h/layout/login-form";
import Image from "next/image";
import Logo from "@/components/logo-app";
import TypographyText from "@/components/typography-text";

export default function Login() {
  return (
    <main className="relative flex min-h-screen">
      <div className="absolute sm:relative w-full sm:w-3/4 flex justify-center items-center">
        <Image
          src={imgBgDesktop}
          alt="login background"
          className="w-full h-screen hidden sm:block"
        />
        <Image
          src={imgBgMobile}
          alt="login background"
          className="w-full h-screen block sm:hidden absolute -z-[2] top-0"
        />
        <div className="absolute -z-[1] h-screen w-full top-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      {/* TODO: i´ll need the background image for mobiles sizes */}
      <div className="flex flex-col justify-between items-center w-full sm:w-1/4 bg-transparent sm:bg-neutralBlack p-6">
        <Logo />
        <LoginForm />
        <TypographyText
          type="p"
          description={"2024 @ Contactar soporte"}
          fontjura={false}
          color="text-white"
        />
      </div>
    </main>
  );
}
