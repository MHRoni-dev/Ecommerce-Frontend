'use client'
import React from 'react'
import { FilterTitle } from '../ui/title'
import { Checkbox } from '../ui/checkbox'


const WarrantyFilters = ['No Warranty', 'Seller Warranty', 'Brand Warranty', 'International Manufacturer Warranty' ]


export default function WarrantyFilter({variant, state, handler, isChecked = value => state.includes(value)}) {

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
                {
                    WarrantyFilters.map(waranty => (
                        <WarrantyItem
                            key={waranty}
                            text={waranty} 
                            value={waranty} 
                            checked={isChecked(waranty)} 
                            onClick={handler}
                        />
                    ))
                }   
            </div>
            
        </div>
      )
}


function WarrantyItem({text, ...props}){
    return (
    <div className='flex items-center gap-2'>
        <Checkbox id={text?.replace(" ", "-")} {...props}/>
        <label htmlFor={text?.replace(" ", "-")} className='text-sm text-muted-foreground line-clamp-1'>{text}</label>
    </div>)
}