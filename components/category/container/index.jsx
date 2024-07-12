import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

export default function CategoryContainer({children}) {
  
  return (
    // <div className='flex gap-x-10  gap-6 my-4 overflow-hidden'>{children}</div>
    <Carousel  >
        <div className='overflow-hidden rounded relative my-4'>
            <CarouselContent  className=''>
                {children.map((item,i) => (
                  <CarouselItem key={i} className="basis-0 min-w-fit px-4">
                    {item}
                </CarouselItem>
                ))}
            </CarouselContent>
        </div>
    </Carousel>
  )
}
