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
  _id: string;
  nombre: string;
  apellido: string;
  cedula: string;
  edad: number;
  peso: number;
  fechaRegistro: string;
  ultimoPago: string;
  diasEnMora: string;
  trainer: string;
  ultimaActualizacion: string;
  // acciones: string;
}

interface InvoiceTableProps {
  _id: string;
  mes: string;
  numero: string;
  tipo: string;
  status: string;
  corte: Date;
  // acciones: string;
}

interface TableHeaderDBProps {
  dataArr: TableData[] | InvoiceTableProps[];
}

interface TableItemsProps {
  dataArr: TableData[] | InvoiceTableProps[];
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
  TableHeaderDBProps,
  InvoiceTableProps,
  TableItemsProps,
  TypographyProps,
  NavItemProps,
  NavSections,
  InputProps,
  TableData,
};
