import Image from 'next/image'
import React from 'react'
import { CardDescription, CardTitle } from '../ui/card'
import { X } from 'lucide-react'
import QuantitySelect from './QuantitySelect'




export default function CartItem({details}) {
  return (
    <div className='relative flex items-center justify-between gap-6 hover:shadow-md  hover:mx-[-8px] px-2 hover:md:px-2 py-2 transition-all group'>
      <X className='absolute z-10 top-2 right-2 w-4 h-4 text-muted-foreground group-hover:block hidden'/>
        <div className='relative h-20 w-20 border rounded-md overflow-hidden'>
            <Image src={details.image} alt="product image" fill />
        </div>
        <CardTitle className="text-base flex-1 grow-[2] line-clamp-2">{details.title}</CardTitle>
        <CardDescription className="flex-1">{details.price}$</CardDescription>
        <QuantitySelect quantity={details.rating.count}/> {/*willbe change to qunatity value */}
        <CardDescription className="flex-1">{details.rating.count * details.price}$</CardDescription>        
    </div>
  )
}
