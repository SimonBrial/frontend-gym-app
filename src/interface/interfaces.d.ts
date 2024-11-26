import { TypeTitle } from "../types/types";

interface NavSections {
  label: string;
  dir: string;
  icon: React.ReactNode;
}

interface TypographyProps {
  description: string;
  fontjura: boolean;
  color?: string;
  classes?: string;
  underscore?: boolean;
  type: TypeTitle;
}

interface TableData {
  cedula: number | string;
  status: string;
  nombre: string;
  corte: Date;
  tipo: string;
  _id: string;
  acciones: string;
}

interface NavItemProps {
  item: NavSections;
  fnCloseMenu?: (value: boolean) => void;
  active?: boolean;
}

interface InputProps {
  [x: string]: any;
  classNameContainer: string;
}

export type {
  TypographyProps,
  NavItemProps,
  NavSections,
  InputProps,
  TableData,
};
