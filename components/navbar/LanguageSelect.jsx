import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '../ui/select'

export default function LanguageSelect() {
  return (
    <Select>
        <SelectTrigger className="w-fit bg-transparent border-none hover:bg-slate-200 ">En</SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="Bn">Bangla</SelectItem>
                <SelectItem value="Hn">Hindi</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}
