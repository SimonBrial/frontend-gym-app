import { Button } from "../ui/button";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Input } from "../ui";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-0 py-1.5 px-4 rounded-full border border-slate-700 w-full sm:w-[32%]">
      <Button className="p-0 bg-transparent text-slate-400 hover:bg-transparent hover:text-principal transition-all w-1/6">
        <MagnifyingGlass size={24} />
      </Button>
      {/* <TextInput
        classNameContainer="w-full pr-2"
        className="h-8 bg-transparent border-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-principal"
        placeholder={"Buscar usuario"}
      /> */}

      <Input
        placeholder={"Buscar usuario"}
        className="-ml-2 sm:-ml-3 h-8 bg-transparent border-transparent focus:border-transparent focus:outline-none focus:ring-1 focus:ring-principal"
        type={"text"}
      />
    </div>
  );
}
