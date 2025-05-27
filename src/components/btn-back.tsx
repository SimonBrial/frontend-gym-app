"use client";

import { Button } from "./ui";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

export default function BtnBack() {
  const router = useRouter();

  return (
    <Button
      className="w-16 flex sm:hidden rounded-full bg-slate-900 hover:bg-slate-900 gap-2 active:bg-principal/20 border border-slate-600 active:border-principal active:text-principal"
      onClick={() => router.back()}
    >
      <ArrowLeft size={16} />
    </Button>
  );
}
