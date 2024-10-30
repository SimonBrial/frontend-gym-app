import NavSidebar from "@/components/sidebar/NavSidebar";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen bg-slate-800 text-white flex text-3xl">
      <NavSidebar />
      <div className="w-[80%] bg-neutralBlack">{children}</div>
    </div>
  );
}
