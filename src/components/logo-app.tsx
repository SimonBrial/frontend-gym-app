import TypographyText from "./typography-text";

export default function LogoApp() {
  return (
    <div className="flex items-center justify-center pt-3 pb-1 gap-1 w-full">
      <TypographyText type="h3" description={"SMART"} fontjura color="text-white" classes={""} />
      <TypographyText
        type="h3"
        description={"GYM"}
        fontjura
        color="text-principal"
        classes={""}
      />
      <TypographyText type="h3" description={"ADMIN"} fontjura color="text-white" classes={""} />
    </div>
  );
}
