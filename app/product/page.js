'use client'
import CategoryBar from '@/components/category/select'
import ColorFilter from '@/components/filter/colorFilter'
import FilterSlider from '@/components/filter/filterSlider'
import PriceFilter from '@/components/filter/priceFilter'
import RatingFilter from '@/components/filter/ratingFilter'
import SizeFilter from '@/components/filter/sizeFilter'
import Sortby from '@/components/filter/sortby'
import View from '@/components/filter/view'
import WarrantyFilter from '@/components/filter/warrantyFilter'
import ProductConatiner from '@/components/product/container'
import ProductCard from '@/components/product/productCard'
import { CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import useActiveState from '@/hooks/state/useActiveState'
import useMergeState from '@/hooks/state/useMergeState'
import useMultiActiveState from '@/hooks/state/useMultiActiveState'
import usePropertyState from '@/hooks/state/usePropertyState'

const initialState = {
    warranties : [],
    sizes : [],
    colors : [],
    price : { 
        min : '',
        max : ''
    },
    ratting : ''
}

const hooks = {
    warranties : useMultiActiveState,
    sizes : useMultiActiveState,
    colors : useMultiActiveState,
    price : usePropertyState,
    ratting : useActiveState
}

const fns = {
    ratting : value => value
}

export default function ProductPage() {
    const [filter, setFilter, isChecked] = useMergeState({hooks , initialState, fns})

  return (
    <div className='p-6 space-y-4 pb-0'>
        <CategoryBar />
        <div className='flex justify-between items-center '>
            
            
        </div>
        <div className='flex gap-4'>
            <div className='w-1/4 max-w-[280px] hidden lg:flex lg:flex-col lg:gap-2  '>
                <div className='sticky top-24 '>
                    <CardTitle className="hidden lg:block pb-2 border-b mb-0.5">Filters</CardTitle>
                    <ScrollArea className=" h-screen pr-2 ">
                        <div className='space-y-8  mr-4'>
                            <WarrantyFilter state={filter.warranties} handler={setFilter('warranties')}/>
                            <SizeFilter state={filter.sizes} handler={setFilter('sizes')} isChecked={isChecked.sizes}/>
                            <ColorFilter state={filter.colors} handler={setFilter('colors')} isChecked={isChecked.colors} />
                            <PriceFilter state={filter.price} handler={setFilter('price')} />
                            <RatingFilter state={filter.ratting} handler={setFilter('ratting')} isChecked={isChecked.ratting}/>
                        </div>
                    </ScrollArea>
                </div>

            </div>
            
            <div className='flex-1 lg:bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 lg:px-6 py-2'>
            <div className='flex items-center justify-between flex-1 lg:flex-none gap-4'>
                <div className='flex items-center'>
                    <View />
                    <FilterSlider />
                </div>
                <div className=''>
                    <Sortby />
                </div>
            </div>
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
