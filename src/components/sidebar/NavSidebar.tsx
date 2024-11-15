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
import { useState } from "react";
import { Button } from "../ui/button";

export default function NavSidebar() {
  const [show, setShow] = useState<boolean>(false);
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
    <div
      className={`w-full fixed z-10 sm:h-full sm:relative sm:w-[20%] sm:flex flex-col items-center sm:justify-center py-4 px-2 ${
        show ? "bg-slate-900 h-screen" : "bg-slate-900"
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
      {/*------------------- Desktop Navbar -------------------*/}
      <div className="hidden sm:flex flex-col w-full h-full justify-between pt-8 pb-0 bg-slate-900">
        <nav className="flex flex-col gap-1 items-center w-full h-[94%] border-transparent border-2 border-b-slate-700 mb-4 bg-slate-900">
          {sections.map((section, index) => (
            <NavItem item={section} key={index} />
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
      {/*------------------- Desktop Navbar -------------------*/}
      {/*------------------- Mobile Navbar -------------------*/}
      <div
        className={`pt-12 px-2 ${
          show
            ? " fixed md:hidden left-0 top-0 w-[100%] h-full ease-in-out duration-500 bg-slate-900"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] bg-slate-900"
        }`}
      >
        {" "}
        <nav className="flex flex-col gap-1 items-center w-full h-[92%] border-transparent border-2 border-b-slate-700 mb-4 bg-slate-900">
          {" "}
          {sections.map((section, index) => (
            <NavItem item={section} key={index} fnCloseMenu={setShow} />
          ))}{" "}
        </nav>{" "}
        <NavItem item={{ label: "Cerrar Sesion", dir: "/", icon: <Power /> }} />{" "}
      </div>
      {/*------------------- Mobile Navbar -------------------*/}
    </div>
  );
}