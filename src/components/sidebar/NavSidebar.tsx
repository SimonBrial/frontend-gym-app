import { NavSections } from "@/interface/interfaces";
import { HouseSimple, User, Gear, Power } from "@phosphor-icons/react/dist/ssr";
import NavItem from "./NavItem";
import Logo from "../Logo";

export default function NavSidebar() {
  const sections: NavSections[] = [
    {
      label: "Dashboard",
      dir: "/home",
      icon: <HouseSimple />,
    },
    { label: "Clientes", dir: "/home/user-profile", icon: <User /> },
    { label: "Configuraciones", dir: "/home/settings", icon: <Gear /> },
  ];
  return (
    <div className="w-[20%] flex flex-col items-center py-4 px-2 bg-slate-900">
      <Logo />
      <div className="flex flex-col w-full h-full justify-between pt-6">
        <nav className="flex flex-col gap-1 items-center w-full h-[85%]">
          {sections.map((section, index) => (
            <NavItem item={section} key={index} />
          ))}
        </nav>
        <span className="border-transparent border-b-[1px] border-b-slate-700"></span>
        <NavItem
          item={{
            label: "Cerrar Sesion",
            dir: "/",
            icon: <Power />,
          }}
        />
      </div>
    </div>
  );
}
