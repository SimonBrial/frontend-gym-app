import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function SectionHeader({ label }: { label: string }) {
  return (
    <div className="w-full px-6 py-4 bg-slate-900 flex justify-between items-center">
      <div>
        <h4>{label}</h4>
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
