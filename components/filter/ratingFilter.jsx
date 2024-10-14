import React from 'react'
import Star from '../ui/star'
import {  CardDescription as Text } from '../ui/card'
import { FilterTitle } from '../ui/title'
import { cn } from '@/lib/utils'

export default function RatingFilter({variant, state, handler, isChecked = value => state === value }) {
    
    
  if(variant === "mobile"){
    return (
        <div>
            
        </div>
      )
  }

  return (
    <div className=''>
        <FilterTitle>Rating</FilterTitle>
        {
            [5,4,3,2,1].map((rating) => (
                <div key={rating} className={cn('flex justify-between hover:bg-muted py-[1px] px-1 rounded cursor-pointer', isChecked(rating) && '!bg-primary ')} data-value={rating} onClick={()=>handler(rating)}>
                    <div className='flex'>
                        {Array(rating).fill('star').map((_, i) => <Star key={i} variant="full"  />)}
                        {Array(5-rating).fill('empty-star').map((_, i) => <Star key={i} />)}
                    </div>
                    <Text className={cn("text-nowrap" , isChecked(rating) && '!text-white')}  >{rating} star</Text>
                </div>
            ))
        }
    </div>
  )
}
