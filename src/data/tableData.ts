import { TableData } from "@/interface/interfaces";

export const invoices: TableData[] = [
  {
    _id: crypto.randomUUID(),
    nombre: "Credit Card",
    cedula: "INV001",
    tipo: "semanal",
    status: "Paid",
    corte: new Date(),
    acciones: ""
  },
  {
    _id: crypto.randomUUID(),
    cedula: "INV002",
    nombre: "PayPal",
    tipo: "semanal",
    status: "Pending",
    corte: new Date(),
    acciones: ""
  },
  {
    _id: crypto.randomUUID(),
    cedula: "INV003",
    nombre: "Bank Transfer",
    tipo: "semanal",
    status: "Unpaid",
    corte: new Date(),
    acciones: ""
  },
  {
    _id: crypto.randomUUID(),
    cedula: "INV004",
    nombre: "Credit Card",
    tipo: "semanal",
    status: "Paid",
    corte: new Date(),
    acciones: ""
  },
  {
    _id: crypto.randomUUID(),
    cedula: "INV005",
    nombre: "PayPal",
    tipo: "semanal",
    status: "Paid",
    corte: new Date(),
    acciones: ""
  },
  {
    _id: crypto.randomUUID(),
    cedula: "INV006",
    nombre: "Bank Transfer",
    tipo: "semanal",
    status: "Pending",
    corte: new Date(),
    acciones: ""
  },
  {
    _id: crypto.randomUUID(),
    cedula: "INV007",
    nombre: "Credit Card",
    tipo: "semanal",
    status: "Unpaid",
    corte: new Date(),
    acciones: ""
  },
];
