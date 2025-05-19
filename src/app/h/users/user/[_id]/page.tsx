import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import ReadUserLayout from "../layout/read-user-layout";
import InvoicesLayout from "../layout/InvoicesLayout";
import ContainerLayout from "@/components/container-layout";

export default function page() {
  return (
    <ContainerLayout sectionTitle="Perfil del cliente">
      {/* <div className="flex gap-1 justify-center items-center">
        <Button variant="registerNav">Perfil cliente</Button>
        <Button variant="registerNav">Recibos</Button>
      </div> */}

      <Tabs
        defaultValue="profile"
        className="w-full sm:h--full p-4 bg-neutralBlack"
      >
        <TabsList className="grid w-full grid-cols-2 bg-transparent sm:hidden">
          <TabsTrigger value="profile" className="text-slate-700 rounded-full">
            Perfil cliente
          </TabsTrigger>
          <TabsTrigger value="receipts" className="text-slate-700 rounded-full">
            Recibos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="w-full sm:w--1/3">
          <ReadUserLayout />
        </TabsContent>
        <TabsContent value="receipts">
          <InvoicesLayout />
        </TabsContent>
      </Tabs>
    </ContainerLayout>
  );
}
