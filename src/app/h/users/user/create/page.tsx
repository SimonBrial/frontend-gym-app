import CreateUserLayout from "../layout/create-user-layout";
import ContainerLayout from "@/components/container-layout";

export default function page() {
  return (
    <ContainerLayout sectionTitle="registrar cliente">
      <div className="flex justify-center items-start pt-6 sm:pt-0 sm:items-center w-full h-full">
        <CreateUserLayout />
      </div>
    </ContainerLayout>
  );
}
