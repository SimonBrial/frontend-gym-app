import { Barbell } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import TypographyText from "./typography-text";

export default function StatusBadge({statusValue}: {statusValue: string}) {
  return (
    <div className="flex justify-center items-center gap-3 py-[4px] px-4 border border-principal rounded-md">
      <span className="h-[30px] w-[30px] -mb-1 text-principal">
        <Barbell size={25} />
      </span>
      <TypographyText
        description={statusValue}
        classes="text-base"
        fontjura={false}
        type="h2"
      />
    </div>
  );
}

// #ef233c
