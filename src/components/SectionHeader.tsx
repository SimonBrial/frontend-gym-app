import { Button } from "./ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Typography } from "./Typography";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default function SectionHeader({ label }: { label: string }) {
  return (
    <div className="w-full px-6 py-4 bg-slate-900 flex justify-between items-center">
      <div>
        <Typography
          description={capitalizeFirstLetter(label)}
          fontjura
          type="h2"
        />
      </div>
      <Link href={"#"}>
        <Button variant="addUser" size={"sm"}>
          <Plus size={16} />
          Agregar Usuario
        </Button>
      </Link>
    </div>
  );
}
