import {
  RadioGroupInput,
  NumberInput,
  SelectInput,
  TextInput,
} from "@/components/inputs";
import Typography from "@/components/Typography";
import {
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog,
  Button,
  AlertDialogAction,
} from "@/components/ui";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { FloppyDiskBack } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function UpdateUserLayout() {
  return (
    <div className="flex flex-col gap-4 w-[90%] sm:w-[35%] bg-slate-900 py-6 px-4 rounded-[16px]">
      <TextInput
        classNameContainer="text-white w-full flex flex-col gap-1.5"
        className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
        label={capitalizeFirstLetter("cedula")}
      />
      <TextInput
        classNameContainer="text-white w-full flex flex-col gap-1.5"
        className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
        label={capitalizeFirstLetter("nombre completo")}
      />
      <NumberInput
        classNameContainer="text-white w-full flex flex-col gap-1.5"
        className="w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal"
        label={capitalizeFirstLetter("edad")}
        placeholder="Indicar edad"
        type="number"
        max={150}
        min={1}
      />
      <SelectInput
        classNameContainer="text-white w-full flex flex-col gap-1.5 focus:outline-none focus:border-principal"
        inputContainerClasses="w-full bg-slate-800 border-slate-700 outline-none  focus:outline-none focus:border-principal focus:ring-1 focus:ring-principal"
        optionsContainerClasses="w-full bg-slate-800 border-slate-700 text-white "
        itemContainerClasses="focus:bg-neutralBlack/50 text-white"
        label={capitalizeFirstLetter("sexo")}
        options={["Masculino", "Femenino"]}
        placeholder="Selecciona un genero"
      />
      <RadioGroupInput
        classNameContainer="-mt-3"
        radioGroupClassName="flex flex-row"
        label="Plan de pago"
        items={["mes", "semana", "dia"]}
      />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="principal" className="">
            Guardar cambios
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-slate-900 border border-slate-700 w-[85%] rounded-md">
          <AlertDialogHeader className="flex flex-col text-white justify-center items-center">
            <span>
              <FloppyDiskBack size={40} weight="fill" />
            </span>
            <AlertDialogTitle asChild>
              <Typography
                description="¿Guardar cambios?"
                fontjura={false}
                type="h2"
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white" asChild>
              <Typography
                description="Los datos no guardados pueden perderse al salir de esta pantalla."
                fontjura={false}
                type="p"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild className="px-0 hover:bg-transparent">
              {/* <Link
                href={"/h/users/list"}
                className="w-full bg-transparent border-none hover:bg-transparent"
              >
                
              </Link> */}
              <Button variant="outline" className="">
                Cancelar
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild className="px-0">
              <Link
                href={"/h/users/list"}
                className="w-full bg-transparent border-none hover:bg-transparent"
              >
                <Button variant="principal">Guardar</Button>
              </Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Link href={"/h/users/list"} className="w-full">
        <Button variant="outline" className="">
          Cancelar
        </Button>
      </Link>
    </div>
  );
}
