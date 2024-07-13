import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Button } from '../ui/button'
import { CardDescription, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Minus } from 'lucide-react'
import { FilterTitle } from '../ui/title'

export default function PriceFilter({variant}) {
    if(variant === "mobile"){
        return (
            <div>
                <FilterTitle >Price</FilterTitle>
                <div className='flex gap-2 mt-2 px-2'>
                    <Input placeholder="Min" />
                    <Input placeholder="Max"  />
                </div>
            </div>
        )
    }


    return (
        <div>
            <FilterTitle>Price</FilterTitle>
            <div className='flex gap-2 mt-2 items-center px-1'>
                <Input placeholder="Min" className="h-9"/>
                <CardDescription><Minus /></CardDescription>
                <Input placeholder="Max"  className="h-9"/>
                <Button size="sm">Apply</Button>
            </div>
        </div>
    )
}
