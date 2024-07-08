import React from 'react'
import ColorSelect from './ColorSelect'
import SizeSelect from './SizeSelect'
import QuantitySelect from './QuantitySelect'
import { Button } from '@/components/ui/button'
import { CardDescription, CardTitle } from '@/components/ui/card'
import Images from './Images'
import Detail from './Detail'

export default function ProductDetail() {
  return (
    <div className='p-8 mb-12 md:px-12 lg:px-16 lg:py-12 xl:px-20 xl:py-14'>
        <div className='flex flex-col md:flex-row md:justify-between gap-8'>
          <Images />
          <div className='mt-4 md:mt-0'>
            <Detail />
            <div  className="mt-4 flex flex-col gap-4">
              <ColorSelect />
              <SizeSelect />
              <QuantitySelect />
              <div className='hidden md:flex gap-8 items-center mt-8  '>
                <Button className="w-1/2">Add to Cart</Button>
                <Button variant="outline" className="w-1/2">Checkout</Button>
              </div>
            </div>
          </div>
        </div>
        
        
        
        <div className='fixed bottom-0 left-0 right-0 flex justify-between px-8 py-4 bg-white gap-8 md:hidden'>
            <Button className="w-1/2">Add to Cart</Button>
            <Button variant="outline" className="w-1/2">Checkout</Button>
        </div>
       
    </div>
  )
}
