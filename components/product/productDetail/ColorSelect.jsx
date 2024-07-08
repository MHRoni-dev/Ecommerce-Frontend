"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'


export default function ColorSelect() {
    const [selected, setSelect] = useState(null)
  return (
    <div className=' flex items-center gap-4'>
        <Button className={cn('w-10 h-8 bg-primary border rounded-sm hover:bg-primary hover:border-primary', selected === 0 && 'border-2 border-primary')} onClick={()=>setSelect(0)}></Button>
        <Button className={cn('w-10 h-8 bg-white border rounded-sm hover:bg-white hover:border-primary', selected === 1 && 'border-2 border-primary')} onClick={()=>setSelect(1)}></Button>
        <Button className={cn('w-10 h-8 bg-green-500 border rounded-sm hover:bg-green-500 hover:border-primary', selected === 2 && 'border-2 border-primary')} onClick={()=>setSelect(2)}></Button>
        <Button className={cn('w-10 h-8 bg-red-500 border rounded-sm hover:bg-red-500 hover:border-primary', selected === 3 && 'border-2 border-primary')} onClick={()=>setSelect(3)}></Button>
    </div>
  )
}
