import SectionHeader from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import ReadUserLayout from "../layout/ReadUserLayout";

export default function page() {
  return (
    <div className="bg-neutralBlack pb-5">
      <SectionHeader label="descripcion del cliente" />
      {/* <div className="flex gap-1 justify-center items-center">
        <Button variant="registerNav">Perfil cliente</Button>
        <Button variant="registerNav">Recibos</Button>
      </div> */}
      <Tabs defaultValue="profile" className="w-full py-2 px-4">
        <TabsList className="grid w-full grid-cols-2 bg-transparent">
          <TabsTrigger value="profile" className="text-slate-700 rounded-full">Perfil cliente</TabsTrigger>
          <TabsTrigger value="receipts" className="text-slate-700 rounded-full">Recibos</TabsTrigger>
        </TabsList>
        <TabsContent value="profile"><ReadUserLayout /></TabsContent>
        <TabsContent value="receipts">Recibos</TabsContent>
      </Tabs>
    </div>
  );
}
