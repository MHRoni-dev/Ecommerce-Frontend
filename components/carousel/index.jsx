import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'

export default function MainCarousel() {
  return (
    <Carousel  >
        <div className='overflow-hidden rounded'>
            <CarouselContent  className='min-h-40 h-[40vh]'>
                <CarouselItem>
                        <Image src="/tshirt2.avif" fill alt="carousel" />
                </CarouselItem>
                <CarouselItem>
                        <Image src="/tshirt.avif" fill alt="carousel" />
                </CarouselItem>
                <CarouselItem><Image src="/tshirt2.avif" fill alt="carousel" /></CarouselItem>
            </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}
