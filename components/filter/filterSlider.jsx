import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Filter } from 'lucide-react'
import ColorFilter from './colorFilter'
import PriceFilter from './priceFilter'
import SizeFilter from './sizeFilter'
import WarrantyFilter from './warrantyFilter'
import RatingFilter from './ratingFilter'
import { ScrollArea } from '../ui/scroll-area'

export default function FilterSlider() {
  return (
    <Sheet>
        <SheetTrigger ><Filter className='lg:hidden'/></SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-2">Filters</SheetTitle>
            </SheetHeader>
            <SheetDescription >
                    <ScrollArea className="h-[calc(100vh-60px)] pr-4 -mr-4">
                        <div className='space-y-6'>
                            <ColorFilter />
                            <PriceFilter variant="mobile"/>
                            <SizeFilter />
                            <WarrantyFilter />
                            <RatingFilter />
                        </div>
                    </ScrollArea>
            </SheetDescription>
        </SheetContent>

    </Sheet>
  )
}
