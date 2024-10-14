import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

export function TypographyH3({
  description,
  fontjura = false,
  color,
}: {
  description: string;
  fontjura: boolean;
  color?: string;
}) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${color} ${
        fontjura ? jura.className : ""
      }`}
    >
      {description}
    </h3>
  );
}
