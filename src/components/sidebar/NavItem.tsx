import { NavItemProps } from "@/interface/interfaces";
import Link from "next/link";
import { Button } from "../ui/button";
import Typography from "../Typography";

export default function NavItem({ item, fnCloseMenu, active }: NavItemProps) {
  return (
    <Button
      variant={active ? "activeNavItem" : "navItem"}
      className="text-red-500"
      asChild
      onClick={() => fnCloseMenu?.(false)}
    >
      <Link href={item.dir} className="w-full p-2  hover:cursor-pointer group">
        <span className="text-lg text-white  group-hover:text-principal group-hover:cursor-pointer">
          {item.icon}
        </span>{" "}
        <Typography
          type="p"
          description={item.label}
          fontjura={false}
          classes="text-[1rem] text-slate-400 px-2 group-hover:text-principal group-hover:cursor-pointer"
        />
      </Link>
    </Button>
  );
}
