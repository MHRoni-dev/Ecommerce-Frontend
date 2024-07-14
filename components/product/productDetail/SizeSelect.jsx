"use client"
import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function SizeSelect() {
    const [selected, setSelect] = useState(null)

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
    <div className=' flex items-center gap-4'>
    <Button variant="secondary" className={cn('w-10 h-8  border rounded-sm flex items-center justify-center p-2 hover:text-primary-foreground hover:bg-primary', selected === 0 && 'bg-primary border-primary text-primary-foreground ')} onClick={()=>setSelect(0)}>S</Button>
    <Button variant="secondary" className={cn('w-10 h-8  border rounded-sm flex items-center justify-center p-2 hover:text-primary-foreground hover:bg-primary', selected === 1 && 'bg-primary border-primary text-primary-foreground ')} onClick={()=>setSelect(1)}>M</Button>
    <Button variant="secondary" className={cn('w-10 h-8  border rounded-sm flex items-center justify-center p-2 hover:text-primary-foreground hover:bg-primary', selected === 2 && 'bg-primary border-primary text-primary-foreground  ')} onClick={()=>setSelect(2)}>L</Button>
    <Button variant="secondary" className={cn('w-10 h-8  border rounded-sm flex items-center justify-center p-2 hover:text-primary-foreground hover:bg-primary', selected === 3 && 'bg-primary border-primary text-primary-foreground  ')} onClick={()=>setSelect(3)}>XL</Button>
    <Button variant="secondary" className={cn('w-10 h-8  border rounded-sm flex items-center justify-center p-2 hover:text-primary-foreground hover:bg-primary', selected === 4 && 'bg-primary border-primary text-primary-foreground  ')} onClick={()=>setSelect(4)}>XXL</Button>
</div>
  )
}
