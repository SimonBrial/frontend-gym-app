import ContainerLayout from "@/components/container-layout";
import UserLayout from "../layout/user-layout";

export default function page() {
  return (
    <ContainerLayout sectionTitle="registrar cliente">
      <div className="flex justify-center items-start pt-6 sm:items-center w-full bg-neutralBlack">
        <UserLayout formType="create" />
      </div>
    </ContainerLayout>
  );
}
