import SectionHeader from "./section-header";

export default function ContainerLayout({
  sectionTitle,
  children,
}: {
  children: React.ReactNode;
  sectionTitle: string;
}) {
  return (
    <div className="w-full h-full bg-neutralBlack">
      <SectionHeader label={sectionTitle} />
      <div className="w-full h-screen flex justify-start items-start pt-4 sm:pt-[4.5rem]">
        {children}
      </div>
    </div>
  );
}
