import ColorFilter from '@/components/filter/colorFilter'
import PriceFilter from '@/components/filter/priceFilter'
import RatingFilter from '@/components/filter/ratingFilter'
import SizeFilter from '@/components/filter/sizeFilter'
import Sortby from '@/components/filter/sortby'
import View from '@/components/filter/view'
import WarrantyFilter from '@/components/filter/warrantyFilter'
import ProductConatiner from '@/components/product/container'
import ProductCard from '@/components/product/productCard'
import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Rows2 } from 'lucide-react'
import { Rows3 } from 'lucide-react'
import { LayoutList } from 'lucide-react'
import { AlignJustify } from 'lucide-react'
import { Grid2X2 } from 'lucide-react'
import { LayoutGrid } from 'lucide-react'
import { Grid } from 'lucide-react'
import { List } from 'lucide-react'
import React from 'react'

export default function ProductPage() {
  return (
    <div className='p-6 space-y-4 '>
        <div className='flex items-center gap-3 bg-slate-50 py-4 px-2 border rounded-lg justify-center flex-wrap border-highlight'>
            <Button variant="category"  className="bg-highlight text-white">TShirt</Button>
            <Button variant="category" >Jeans</Button>
            <Button variant="category" >Jeans</Button>
            <Button variant="category" >Jeans</Button>
            <Button variant="category" >Jeans</Button>
            <Button variant="category" >Jeans</Button>
            <Button variant="category">Jeans</Button>
            <Button variant="category">Jeans</Button>
        </div>
        <div className='flex justify-between items-center'>
            <CardTitle>Filters</CardTitle>
            <div className='flex items-center gap-8'>
                <Sortby />
                <View />
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='w-1/4 max-w-[280px] hidden lg:flex lg:flex-col lg:gap-2  '>
                <div className='sticky top-0'>
                    <ScrollArea className=" h-screen pr-2">
                        <div className='space-y-8  mr-4'>
                            <WarrantyFilter />
                            <SizeFilter />
                            <ColorFilter />
                            <PriceFilter />
                            <RatingFilter />
                        </div>
                    </ScrollArea>
                </div>

            </div>
            <div className='flex-1 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 px-6'>
                <ProductConatiner>
                    {
                        Array(40).fill("0").map((_,i) => (
                            <ProductCard key={i}/>
                        ))
                    }
                    
                </ProductConatiner>
            </div>
        </div>
    </div>
  )
}
