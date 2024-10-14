"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'


const Sizes = ["S", "M", "L", "XL", "XLL", "XLLL"]

export default function SizeSelect({state, handler, isChecked = (value, state )=> state === value}) {
  return (
    // <Select>
    //         <SelectTrigger>
    //             <SelectValue placeholder="size" />
    //         </SelectTrigger>
    //         <SelectContent>
    //             <SelectGroup>
    //                 <SelectLabel>Sizes</SelectLabel>
    //                 <SelectItem value="m">M</SelectItem>
    //                 <SelectItem value="l">L</SelectItem>
    //                 <SelectItem value="xl">XL</SelectItem>
    //                 <SelectItem value="xxl">XXL</SelectItem>
    //             </SelectGroup>
    //         </SelectContent>
    //     </Select>
    <div className=' flex items-center gap-4 flex-wrap'> 
    {
      Sizes.map(size => (
        <Button 
            key={size} 
            variant="secondary" 
            className={cn('w-10 h-8  border rounded-sm flex items-center justify-center p-2   hover:bg-primary hover:text-white hover:border-0', isChecked(size, state) && 'bg-primary border-primary text-primary-foreground')} 
            value={size}
            onClick={handler}
            data-isActive={isChecked(size, state)}
            >
            {size}
        </Button>
      ))
    }
</div>
  )
}
