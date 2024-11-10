import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default function ToolTipLayout({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{capitalizeFirstLetter(label)}</TooltipContent>
    </Tooltip>
  );
}
