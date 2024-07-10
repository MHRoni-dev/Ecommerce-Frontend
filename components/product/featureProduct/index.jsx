import { Button } from '@/components/ui/button'
import {  CardTitle } from '@/components/ui/card'
import React from 'react'
import FeatureBanner from './Banner'
import FeatureImage from './FeatureImage'
import Price from './Price'
import Description from './Description'

export default function FeatureProduct() {
  return (
    <div className='flex flex-col overflow-hidden gap-6 my-4'>
        <div className='flex flex-col gap-6 flex-1 md:flex-row md:gap-20 bg-slate-200 rounded-lg'>
            <div className='w-full md:w-1/2 '>
                <FeatureImage />
            </div>
            <div className='flex flex-col gap-2 max-w-lg flex-1 md:mt-20 md:px-4 mb-4 mx-6 sm:mx-auto'>
                <CardTitle className="md:text-3xl">TShirt</CardTitle>
                <Description />
                <Price />
                <Button size="lg" className="md:mt-4 md:w-fit bg-highlight">Add to Cart</Button>
            </div>
        </div>
        <FeatureBanner />
        
    </div>
  )
}
