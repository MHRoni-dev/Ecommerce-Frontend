"use client"
import React from 'react'
import { CardDescription } from '../ui/card'
import useCount from '@/hooks/counter/useCount'

export default function QuantitySelect({quantity}) {
  const [count, {increase, decrease}] = useCount(quantity, 1, 99)

  return (
    <div className='flex items-center'>
        <span  className="py-1 px-2 border h-fit bg-red-600 text-white cursor-pointer border-red-600" onClick={decrease(1)}>-</span>
        <CardDescription className="flex-1 p-[6px] border-t border-b cursor-pointer">{count}</CardDescription>
        <span  className="py-1 px-2 border h-fit bg-primary text-white cursor-pointer border-primary" onClick={increase(1)}>+</span>
    </div>
  )
}
