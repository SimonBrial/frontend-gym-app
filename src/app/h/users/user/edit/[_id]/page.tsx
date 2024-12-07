import SectionHeader from "@/components/SectionHeader";
import UpdateUserLayout from "../../layout/UpdateUserLayout";

export default function page() {
  return (
    <div>
      <SectionHeader label="Editar Datos" />
      <div className="flex justify-center items-start pt-6 sm:pt-0 sm:items-center w-full h-full">
        <UpdateUserLayout />
      </div>
    </div>
  );
}
