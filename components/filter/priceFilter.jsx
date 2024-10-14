import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { CardDescription } from '../ui/card'
import { Input } from '../ui/input'
import { Minus } from 'lucide-react'
import { FilterTitle } from '../ui/title'

export default function PriceFilter({variant, state = {min : '', max : ''}, handler}) {


    
    if(variant === "mobile"){
        return (
            <div>
                <FilterTitle >Price</FilterTitle>
                <div className='flex gap-2 mt-2 '>
                    <Input placeholder="Min" name="min" value={state.min} onChange={handler}/>
                    <Input placeholder="Max" name="max" value={state.max} onChange={handler}  />
                </div>
            </div>
        )
    }


    return (
        <div>
            <FilterTitle>Price</FilterTitle>
            <div className='flex gap-2 mt-2 items-center px-1'>
                <Input placeholder="Min" className="h-9" name="min" value={state.min} onChange={handler}/>
                <CardDescription><Minus /></CardDescription>
                <Input placeholder="Max"  className="h-9" name="max" value={state.max} onChange={handler}/>
                <Button size="sm">Apply</Button>
            </div>
        </div>
    )
}
