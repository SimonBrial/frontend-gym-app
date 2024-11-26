import SectionHeader from "@/components/SectionHeader";
import CreateUserLayout from "../layout/CreateUserLayout";

export default function page() {
  return (
    <div className="h-screen flex flex-col items-center">
      <SectionHeader label="registrar cliente" />
      <div className="flex justify-center items-start pt-6 sm:pt-0 sm:items-center w-full h-full">
        <CreateUserLayout />
      </div>
    </div>
  );
}
