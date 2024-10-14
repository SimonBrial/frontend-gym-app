import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

export function TypographyH2({
  description,
  fontjura = false,
  color
}: {
  description: string;
    fontjura: boolean;
    color?: string;
}) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${color} ${
        fontjura ? jura.className : ""
      }`}
    >
      {description}
    </h2>
  );
}
