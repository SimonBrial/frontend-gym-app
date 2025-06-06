import { TypeTitle, dniCodeType, planType, genderType } from "../types/types";

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

interface UserBody {
  _id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  edad: number;
  dniCode: dniCodeType;
  peso: number;
  sexo: genderType;
  fechaRegistro: Date;
  ultimoPago: Date;
  diasEnMora: number;
  nombreTrainer: string;
  apellidoTrainer: string;
  ultimaActualizacion: Date;
  // acciones: string;
}

interface InvoiceTableProps {
  _id: number;
  mes: string;
  numero: string;
  tipo: string;
  status: string;
  corte: Date;
  // acciones: string;
}

interface TableHeaderDBProps {
  dataArr: UserBody[] | InvoiceTableProps[];
}

interface TableItemsProps {
  dataArr: UserBody[] | InvoiceTableProps[];
}

interface NavItemProps {
  item: NavSections;
  fnCloseMenu?: (value: boolean) => void;
  active?: boolean;
}

interface InputProps {
  [x: string]: any;
  classNameContainer: string;
  inputName: string;
  inputType: string;
  description: string;
  control: any;
}

interface UserProps {
  plan: planType;
  sexo: string | genderType;
  dniCode: string | dniCodeType;
  nombre: string;
  apellido: string;
  cedula: string;
  peso: number | undefined;
  edad: number | undefined;
  nombreTrainer: string;
  apellidoTrainer: string;
}

export type {
  TableHeaderDBProps,
  InvoiceTableProps,
  TableItemsProps,
  TypographyProps,
  NavItemProps,
  NavSections,
  InputProps,
  UserProps,
  UserBody,
};
