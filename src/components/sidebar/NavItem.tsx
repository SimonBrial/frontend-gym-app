"use client";

import { NavSections } from "@/interface/interfaces";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { Typography } from "../Typography";

export default function NavItem({ item }: { item: NavSections }) {
  const path = usePathname().split("/");
  // console.log(path[path.length - 1]);
  const dir = item.dir.split("/");
  return (
    <Button
      variant={
        path[path.length - 1] === dir[dir.length - 1]
          ? "activeNavItem"
          : "navItem"
      }
      className="text-red-500"
      asChild
    >
      <Link href={item.dir} className="w-full p-2  hover:cursor-pointer group">
        <span className="text-lg text-white  group-hover:text-principal group-hover:cursor-pointer">{item.icon}</span>{" "}
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
