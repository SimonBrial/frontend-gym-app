"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { usePathname } from "next/navigation";
import Typography from "./Typography";

export default function SectionHeader({ label }: { label: string }) {
  const path = usePathname().split("/");

  // console.log(path.includes("create"));
  return (
    <div className="w-full px-6 pt-16 pb-3 sm:py-4 bg-slate-900 flex justify-between items-center">
      <div>
        <Typography
          description={capitalizeFirstLetter(label)}
          fontjura
          type="h3"
        />
      </div>
      {!path.includes("create") && (
        <Link href={"/h/users/user/create"}>
          <Button variant="addUser" size={"sm"}>
            <Plus size={16} />
            Agregar Usuario
          </Button>
        </Link>
      )}
    </div>
  );
}
