import { CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function Detail() {
  return (
    <div className='flex justify-between'>
        <div>
            <CardTitle >Tshirt</CardTitle>
            <CardDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo officia labore?</CardDescription>
        </div>
        <div  className="w-40 flex flex-col items-end">
            <CardTitle className="md:text-4xl">54 <span className='text-base -ml-1'>$</span></CardTitle>
            <CardDescription className="line-through md:text-lg">60$</CardDescription>
        </div>
    </div>
  )
}
