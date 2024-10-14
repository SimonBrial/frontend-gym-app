import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

export function TypographyP({
  description,
  fontjura = false,
  color,
}: {
  description: string;
  fontjura: boolean;
  color?: string;
}) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${color} ${
        fontjura ? jura.className : ""
      }`}
    >
      {description}
    </p>
  );
}
