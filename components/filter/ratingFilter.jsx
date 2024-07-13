import React from 'react'
import Star from '../ui/star'
import { CardTitle, CardDescription as Text } from '../ui/card'
import { FilterTitle } from '../ui/title'

export default function RatingFilter({variant}) {
  if(variant === "mobile"){
    return (
        <div>
            
        </div>
      )
  }

  return (
    <div className=''>
        <FilterTitle>Rating</FilterTitle>
        <div className='flex justify-between hover:bg-muted py-[1px] px-1 rounded'>
            <div className='flex'><Star variant="full" /><Star variant="full" /><Star variant="full" /><Star variant="full" /><Star variant="full" /></div>
            <Text className="text-nowrap">5 star</Text>
        </div>
        <div className='flex justify-between hover:bg-muted py-[1px] px-1 rounded'>
            <div className='flex'><Star variant="full" /><Star variant="full" /><Star variant="full" /><Star variant="full" /><Star /></div>
            <Text className="text-nowrap">4 star and more</Text>
        </div>
        <div className='flex justify-between hover:bg-muted py-[1px] px-1 rounded'>
            <div className='flex'><Star variant="full" /><Star variant="full" /><Star variant="full" /><Star /><Star /></div>
            <Text className="text-nowrap">3 star and more</Text>
        </div>
        <div className='flex justify-between hover:bg-muted py-[1px] px-1 rounded'>
            <div className='flex'><Star variant="full" /><Star variant="full" /><Star /><Star /><Star /></div>
            <Text className="text-nowrap">2 star and more</Text>
        </div>
        <div className='flex justify-between hover:bg-muted py-[1px] px-1 rounded'>
            <div className='flex'><Star variant="full" /><Star /><Star /><Star /><Star /></div>
            <Text className="text-nowrap">1 star and more</Text>
        </div>
        
        
    </div>
  )
}
