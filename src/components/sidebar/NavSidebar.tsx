/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { NavSections } from "@/interface/interfaces";
import {
  HouseSimple,
  Power,
  User,
  Gear,
  List,
  X,
} from "@phosphor-icons/react/dist/ssr";
import NavItem from "./NavItem";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function NavSidebar() {
  const path = usePathname();
  const [show, setShow] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  const sections: NavSections[] = [
    {
      label: "Dashboard",
      dir: "/h/home",
      icon: <HouseSimple />,
    },
    { label: "Clientes", dir: "/h/users/list", icon: <User /> },
    { label: "Configuraciones", dir: "/h/settings", icon: <Gear /> },
  ];

  useEffect(() => {
    setActive(
      sections.findIndex(
        (section) => section.dir.split("/")[2] === path.split("/")[2],
      ),
    );
  }, [path]);

  return (
    <div
      className={`w-full fixed z-10 sm:h-full sm:relative sm:w-[20%] sm:flex flex-col items-center sm:justify-center py-5 px-2 transition-all duration-500 ease-in-out ${
        show ? "bg-slate-900 h-screen opacity-100" : "bg-slate-900 opacity-100"
      }`}
    >
      <div className="absolute z-10 top-0 left-0 flex justify-between sm:justify-center items-center w-full px-2 py-1 border-slate-800 border sm:border-none bg-slate-900">
        <Logo />
        {!show ? (
          <Button
            onClick={() => setShow(true)}
            variant="ghost"
            className="text-white text-3xl bg-transparent active:text-principal block sm:hidden"
          >
            <List />
          </Button>
        ) : (
          <Button
            onClick={() => setShow(false)}
            variant="ghost"
            className="text-white text-3xl bg-transparent active:text-principal block sm:hidden"
          >
            <X />
          </Button>
        )}
      </div>
      {/*---------------------------- Desktop Navbar ----------------------------*/}
      <div className="hidden sm:flex flex-col w-full h-full justify-between pt-8 pb-0 bg-slate-900">
        <nav className="flex flex-col gap-1 items-center w-full h-[94%] border-transparent border-2 border-b-slate-700 mb-4 pt-5 bg-slate-900">
          {sections.map((section, index) => (
            <NavItem item={section} key={index} active={index === active} />
          ))}
        </nav>
        <NavItem
          item={{
            label: "Cerrar Sesion",
            dir: "/",
            icon: <Power />,
          }}
        />
      </div>
      {/*---------------------------- Desktop Navbar ----------------------------*/}
      {/*---------------------------- Mobile Navbar ----------------------------*/}
      <div
        className={`pt-12 px-2 transition-all duration-500 ease-in-out ${
          show
            ? "fixed md:hidden left-0 top-0 w-[100%] h-full bg-slate-900 opacity-100"
            : "w-[60%] fixed top-0 bottom-0 left-[-100%] bg-slate-900 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 items-center w-full h-[88%] border-transparent border-2 border-b-slate-700 mb-4 bg-slate-900 pt-3">
          {sections.map((section, index) => (
            <NavItem
              item={section}
              key={index}
              fnCloseMenu={setShow}
              active={index === active}
            />
          ))}
        </nav>
        <NavItem item={{ label: "Cerrar Sesion", dir: "/", icon: <Power /> }} />
      </div>
      {/*---------------------------- Mobile Navbar ----------------------------*/}
    </div>
  );
}
