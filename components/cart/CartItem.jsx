import Image from 'next/image'
import React from 'react'
import { CardDescription, CardTitle } from '../ui/card'


function QuantitySelect () {
    // return (

    // )
}

export default function CartItem() {
  return (
    <div className='flex items-center justify-between gap-6 hover:shadow-md hover:px-2 py-2 transition-all group'>
        <div className='relative h-20 w-20 border rounded-md overflow-hidden'>
            <Image src="/tshirt.avif" alt="product image" fill />
        </div>
        <CardTitle className="text-base flex-1 grow-[2]">Tshirt</CardTitle>
        <CardDescription className="flex-1">200$</CardDescription>
        <CardDescription className="flex-1">x3</CardDescription>
        <CardDescription className="flex-1">800$</CardDescription>        
    </div>
  )
}
