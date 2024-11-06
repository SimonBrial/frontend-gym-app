import React from "react";
import { Button } from "../ui/button";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import TextInput from "./TextInput";

export function SearchInput() {
  return (
    <div className="flex items-center py-1.5 px-4 rounded-full border border-slate-700 w-[40%]">
      <Button className="p-2 bg-transparent text-slate-400 hover:bg-transparent hover:text-principal transition-all">
        <MagnifyingGlass size={24} />
      </Button>
      <TextInput
        classNameLabel="w-full pr-2"
        className="h-8 bg-transparent border-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-principal"
        placeholder={"Buscar usuario"}
      />
    </div>
  );
}
