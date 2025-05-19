import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";

export default function ToolTipLayout({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{capitalizeFirstLetter(label)}</TooltipContent>
    </Tooltip>
  );
}
