import NavSidebar from "@/components/sidebar/nav-sidebar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full bg-slate-800 text-white flex flex-col sm:flex-row text-3xl">
      <NavSidebar />
      <div className="w-full sm:w-[80%] sm:ml-[20%] h-full">{children}</div>
    </div>
  );
}
