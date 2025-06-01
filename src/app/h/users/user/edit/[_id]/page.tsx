import UserLayout from "../../layout/user-layout";
import ContainerLayout from "@/components/container-layout";

export default function page() {
  return (
    <ContainerLayout sectionTitle="editar cliente">
      <div className="flex justify-center items-center pt-6 sm:items-center w-full bg-neutralBlack">
        <UserLayout formType="update" />
      </div>
    </ContainerLayout>
  );
}
