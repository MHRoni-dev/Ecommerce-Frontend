"use client"
import React from 'react'
import { CardDescription } from '../ui/card'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export default function QuantitySelect({value, increase, decrease}) {
  

  return (
    <div className='flex items-center'>
        <Button  className={cn("py-1.5 px-2 border-1 h-fit bg-red-600 hover:bg-red-600 text-white cursor-pointer border-red-600  rounded-e-none", value === 1 && "cursor-not-allowed opacity-50")} onClick={decrease}>-</Button>
        <CardDescription className="flex-1 p-[5px] px-2 border-t border-b cursor-pointer">{value}</CardDescription>
        <Button  className={cn("py-1.5 px-2 border-1 h-fit bg-primary text-white cursor-pointer border-primary rounded-s-none", value === 100 && "cursor-not-allowed opacity-50")} onClick={increase}>+</Button>
    </div>
  )
}
