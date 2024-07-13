"use client"
import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '../ui/select'

export default function Sortby() {
    const [value, setValue] = useState('best-match')
  return (
    <Select value={value} onValueChange={setValue} >
        <SelectTrigger ><p className='text-sm text-muted-foreground capitalize px-2'>{value.replaceAll('-', " ")}</p></SelectTrigger>
        <SelectContent >
            <SelectGroup>
                <SelectItem value="best-matchs">Best Matchs</SelectItem>
                <SelectItem value="top-sales">Top Sales</SelectItem>
                <SelectItem value="newest arrivals">Newest Arrivals</SelectItem>
                <SelectItem value="price-low-to-high">Price Low to High</SelectItem>
                <SelectItem value="price-high-to-low">Price High to Low</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}
