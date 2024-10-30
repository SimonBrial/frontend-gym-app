import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

export function Typography({
  description,
  fontjura = false,
  color,
  classes,
}: {
  description: string;
  fontjura: boolean;
  color?: string;
  classes?: string;
}) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-0 align-middle ${color} ${classes} ${
        fontjura ? jura.className : ""
      }`}
    >
      {description}
    </p>
  );
}
