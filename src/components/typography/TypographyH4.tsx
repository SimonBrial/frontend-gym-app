import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

export function TypographyH4({
  description,
  fontjura = false,
  color
}: {
  description: string;
    fontjura: boolean;
    color?: string;
}) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${color} ${
        fontjura ? jura.className : ""
      }`}
    >
      {description}
    </h4>
  );
}
