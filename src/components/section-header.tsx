"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { usePathname } from "next/navigation";
import TypographyText from "./typography-text";
import { Button } from "./ui";

export default function SectionHeader({ label }: { label: string }) {
  const path = usePathname().split("/");

  return (
    <div className="sm:fixed w-full sm:w-[80%] sm:z-10">
      <div className="w-full px-6 pt-[4.5rem] sm:pt-4 pb-3 sm:py-4 bg-slate-900 flex z-10 justify-between items-center">
        <TypographyText
            description={capitalizeFirstLetter(label)}
            fontjura
            type="h3"
          />
        {!path.includes("create") && (
          <Link href={"/h/users/user/create"}>
            <Button variant="addUser" size={"sm"}>
              <Plus size={16} />
              Agregar Usuario
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
