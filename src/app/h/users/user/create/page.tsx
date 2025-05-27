import CreateUserLayout from "../layout/create-user-layout";
import ContainerLayout from "@/components/container-layout";

export default function page() {
  return (
    <ContainerLayout sectionTitle="registrar cliente">
      <div className="flex justify-center items-start pt-4 sm:pt-0 sm:items-center w-full sm:h-full">
        <CreateUserLayout />
      </div>
    </ContainerLayout>
  );
}
