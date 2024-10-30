import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Plus } from 'lucide-react'

export default function SectionHeader() {
  return (
    <div className='w-full h-14 px-6 py-2 bg-slate-900 flex justify-between items-center'>
        <div>
            <h4>Clientes</h4>
        </div>
        <Link href={"#"}>
             <Button variant="ghost" size={"sm"} className='text-principal flex gap-1  hover:bg-principal'><Plus size={16} /> Inscribir nuevo</Button>
        </Link>
    </div>
  )
}
