import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '../ui/select'

export default function CurrencySelect() {
  return (
    <Select>
        <SelectTrigger className="w-fit bg-transparent border-none hover:bg-slate-200 ">USD</SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Currency</SelectLabel>
                <SelectItem value="TK">Bangladeshi Taka</SelectItem>
                <SelectItem value="USD">U.S. dollar</SelectItem>
                <SelectItem value="INR">Indian rupee</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}
