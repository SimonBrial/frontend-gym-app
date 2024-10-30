import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SectionHeader from '@/components/header/SectionHeader'

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function TableContainer() {
  return (
    <>
      <SectionHeader />
      <div className='p-6'>
        {/* <TextInput /> */}
        {/* <div className='p-6 bg-slate-900'>TableContainer</div> */}
        <Table className='p-6 bg-slate-900 rounded-lg'>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px text-white">Cedula</TableHead>
              <TableHead className='text-white'>Nombre </TableHead>
              <TableHead className='text-white'>Apellido</TableHead>
              <TableHead className="text-white">Corte</TableHead>
              <TableHead className="text-white">Estatus</TableHead>
              <TableHead className="text-right text-white">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="">{invoice.totalAmount}</TableCell>
                <TableCell className="">{invoice.totalAmount}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className='bg-slate-900'>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell colSpan={1} className="text-right">7 inscripciones</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  )
}
