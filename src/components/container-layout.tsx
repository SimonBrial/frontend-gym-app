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
      <div className="w-full h-full pb-4 sm:pb-0 sm:h-screen flex justify-start items-center pt-4 sm:pt-[4.5rem]">
        {children}
      </div>
    </div>
  );
}
