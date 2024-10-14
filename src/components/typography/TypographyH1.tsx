import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

export function TypographyH1({
  description,
  fontjura = false,
  color,
}: {
  description: string;
  fontjura: boolean;
  color?: string;
}) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${color} ${
        fontjura ? jura.className : ""
      }`}
    >
      {description}
    </h1>
  );
}
