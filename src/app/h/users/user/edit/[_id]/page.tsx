import SectionHeader from "@/components/section-header";
import UpdateUserLayout from "../../layout/update-user-layout";

export default function page() {
  return (
    <div>
      <SectionHeader label="Editar Datos" />
      <div className="flex justify-center items-start pt-6 sm:items-center w-full h-screen bg-neutralBlack">
        <UpdateUserLayout />
      </div>
    </div>
  );
}
