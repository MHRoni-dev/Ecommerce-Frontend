import { Button } from '@/components/ui/button'
import {  CardTitle } from '@/components/ui/card'
import React from 'react'
import FeatureBanner from './Banner'
import FeatureImage from './FeatureImage'
import Price from './Price'
import Description from './Description'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function FeatureProduct() {
  return (
    <div className='flex flex-col overflow-hidden gap-8 my-4 '>
        <div className='flex flex-col gap-6 flex-1 md:flex-row md:gap-20 bg-slate-200 rounded-lg drop-shadow-lg group'>
            <div className='w-full md:w-1/2 group-hover:rounded-br-[300px] drop-shadow-lg transition-all duration-700 overflow-hidden'>
                <FeatureImage />
            </div>
            <div className='flex flex-col gap-2 max-w-lg flex-1 md:mt-16 md:px-4 mb-4 mx-6 sm:mx-auto '>
                  <div className='relative overflow-hidden w-fit'>
                    <CardTitle className="md:text-4xl line-clamp-3 tracking-tight  px-4 relative border-l-4  border-highlight">
                      <Link href="/product/sample">Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED</Link> 
                    </CardTitle>

                  </div>
                
                  <Description />
                  <Price />
                  <Button size="xl" className="md:mt-4 bg-highlight hover:bg-highlight drop-shadow text-lg  w-52 pl-6 pr-0 justify-start text-left group gap-1 ">Add to Cart <ShoppingCart className='text-highlight group-hover:text-white group-hover:ml-4 transition-all  duration-500'/></Button>
            </div>
        </div> 
        <FeatureBanner />
        
    </div>
  )
}
