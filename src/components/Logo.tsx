import { TypographyH3 } from "@/components/typography";

function Logo() {
  return (
    <div className="flex gap-1">
      <TypographyH3 description={"SMART"} fontjura color="text-white" />
      <TypographyH3 description={"GYM"} fontjura color="text-principal" />
      <TypographyH3 description={"ADMIN"} fontjura color="text-white" />
    </div>
  );
}

export default Logo;
