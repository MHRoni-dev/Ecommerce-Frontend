import React from 'react'
import { FilterTitle } from '../ui/title'
import { Checkbox } from '../ui/checkbox'

function WarrantyItem({text}){
    return (
    <div className='flex items-center gap-2'>
        <Checkbox id={text?.replace(" ", "-")}/>
        <label htmlFor={text?.replace(" ", "-")} className='text-sm text-muted-foreground line-clamp-1'>{text}</label>
    </div>)
}

export default function WarrantyFilter({variant}) {
    if(variant === "mobile"){
        return (
            <div>
                
            </div>
          )
      }
    
      return (
        <div className=''>
            <FilterTitle>Warranty</FilterTitle>
            <div className='space-y-2 '>
                <WarrantyItem text="No Warranty" />
                <WarrantyItem text="Seller Warranty" />
                <WarrantyItem text="Brand Warranty" />
                <WarrantyItem text="International Manufacturer Warranty" />
                
            </div>
            
        </div>
      )
}
