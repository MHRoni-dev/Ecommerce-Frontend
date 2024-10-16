"use client"
import { Button } from '@/components/ui/button'
import useActiveState from '@/hooks/state/useActiveState'
import React from 'react'

const FeaturedCategory = ['TShirt', 'Jeans', 'Paijamas', 'Pants', 'Shooes', 'Shorts', 'Googles', 'Denim']
const className = "bg-highlight text-white" 

export default function CategoryBar() {
    const [active, setActive] = useActiveState('TShirt' , e => e.target.value)

  return (
    <div className='flex items-center gap-3 bg-slate-50 py-4 px-2 border rounded-lg justify-center flex-wrap border-highlight'>
      {
        FeaturedCategory.map(category => (
          <Button 
            key={category} 
            variant="category" 
            className={category === active && className}
            value={category} 
            onClick={setActive} 
            >

              {category}

          </Button>))
      }          
    </div>
  )
}
