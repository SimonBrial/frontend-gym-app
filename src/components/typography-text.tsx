import { TypographyProps } from "@/interface/interfaces";
import { Jura } from "next/font/google";

const jura = Jura({ subsets: ["latin"] });

export default function TypographyText({
  fontjura = false,
  description,
  underscore,
  classes,
  color,
  type,
}: TypographyProps) {
  if (type === "h1") {
    return (
      <h1
        className={`scroll-m-20 font-extrabold tracking-tight lg:text-5xl cursor-default ${color} ${
          classes !== "" ? classes : "text-4xl"
        } ${underscore ? "border-b" : "border-none"} ${
          fontjura ? jura.className : ""
        }`}
      >
        {description}
      </h1>
    );
  }

  if (type === "h2") {
    return (
      <h2
        className={`scroll-m-20 font-semibold tracking-tight first:mt-0 cursor-default align-middle ${color} ${
          classes !== "" ? classes : "text-3xl"
        } ${underscore ? "border-b" : "border-none"} ${
          fontjura ? jura.className : ""
        }`}
      >
        {description}
      </h2>
    );
  }
  if (type === "h3") {
    return (
      <h3
        className={`scroll-m-20 font-semibold tracking-tight cursor-default ${color} ${
          classes !== "" ? classes : "text-2xl"
        } ${underscore ? "border-b" : "border-none"} ${
          fontjura ? jura.className : ""
        }`}
      >
        {description}
      </h3>
    );
  }
  if (type === "h4") {
    return (
      <h4
        className={`scroll-m-20 font-semibold tracking-tight cursor-default ${color} ${
          classes !== "" ? classes : "text-xl"
        } ${underscore ? "border-b" : "border-none"} ${
          fontjura ? jura.className : ""
        }`}
      >
        {description}
      </h4>
    );
  }
  if (type === "p") {
    return (
      <p
        className={`leading-7 [&:not(:first-child)]:mt-0 align-middle cursor-default ${color} ${
          classes !== "" ? classes : ""
        } ${underscore ? "border-b" : "border-none"} ${fontjura} ${
          fontjura ? jura.className : ""
        }`}
      >
        {description}
      </p>
    );
  }
}
