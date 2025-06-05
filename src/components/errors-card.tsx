import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { FieldError, FieldErrors } from "react-hook-form";

export default function ErrorsCard({
  // specialErrors,
  errors,
}: {
  errors: FieldErrors<any>;
  // specialErrors: string[] | undefined;
}) {
  // console.log("specialErrors --> ", specialErrors);
  return (
    <Alert className="w-full flex flex-col gap-4" variant="destructive">
      <div className="flex items-center border-b border-red-500 pb-2">
        <WarningCircle size={32} />
        <AlertTitle className="ml-2">Errores</AlertTitle>
      </div>
      <AlertDescription className="text-red-500 text-[12px]">
        <ul className="list-disc list-inside">
          {Object.values(errors).map((error, idx) => {
            // Validar si error es un objeto de tipo FieldError
            if (error && typeof error === "object" && "message" in error) {
              return (
                <li key={idx} className="-mt-3">
                  {(error as FieldError).message}
                </li>
              );
            }
            return null; // Si no tiene un mensaje válido, no lo renderiza
          })}
        </ul>
        {/* <p>{form.formState.errors.email?.message}</p>
                        <p>{form.formState.errors.password?.message}</p> */}
      </AlertDescription>
    </Alert>
  );
}
