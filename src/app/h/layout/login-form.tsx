"use client";

import TextInput from "@/components/inputs/text-input";
import TypographyText from "@/components/typography-text";
import { Form } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { LoginFormSchema } from "@/schemas/login-form.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const initialValues: { email: string; password: string } = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: z.infer<typeof LoginFormSchema>) => {
    console.log(data);
    console.log("first if");

    try {
      if (data) {
        form.reset(initialValues);
        router.push("/h/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(form.formState.errors);
  return (
    <div className="flex flex-col gap-[24px] p-6 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-2 border-slate-800 bg-slate-900 rounded-[16px] p-[16px] flex flex-col items-center gap-[16px]"
        >
          <TypographyText
            type="h4"
            description={"Bienvenido"}
            fontjura={false}
            color="text-white"
          />
          <TextInput
            description=""
            inputName="email"
            control={form.control}
            inputType="email"
            label="Email"
            classNameContainer="text-white w-full flex flex-col gap-2"
            className={`w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal ${
              form.formState.errors.email ? "border-red-500" : ""
            }`}
            placeholder="Email"
          />
          <>{}</>
          <TextInput
            description=""
            inputName="password"
            control={form.control}
            inputType="password"
            label="Contraseña"
            classNameContainer="text-white w-full flex flex-col gap-2"
            className={`w-full bg-slate-800 border-slate-700 focus:outline-none focus:border-principal ${
              form.formState.errors.password ? "border-red-500" : ""
            }`}
            placeholder="Contraseña"
          />
          {Object.keys(form.formState.errors).length > 0 && (
            <Alert className="w-full flex flex-col gap-4" variant="destructive">
              <div className="flex items-center border-b border-red-500 pb-2">
                <WarningCircle size={32} />
                <AlertTitle className="ml-2">Errores</AlertTitle>
              </div>
              <AlertDescription className="text-red-500 text-[12px]">
                <ul className="list-disc list-inside">
                  {Object.values(form.formState.errors).map(
                    (error, idx: number) => (
                      <li key={idx}>{error.message}</li>
                    ),
                  )}
                </ul>
                {/* <p>{form.formState.errors.email?.message}</p>
                <p>{form.formState.errors.password?.message}</p> */}
              </AlertDescription>
            </Alert>
          )}

          <Button type="submit" variant={"principal"}>
            {/* <Link href={"/h/home"} className="w-full">
              
            </Link> */}
            Ingresar
          </Button>
        </form>
      </Form>
    </div>
  );
}
