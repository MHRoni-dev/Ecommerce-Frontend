import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '../ui/select'

export default function LanguageSelect() {
  return (
    <Select>
        <SelectTrigger className="w-fit bg-highlight/10 border-none ">En</SelectTrigger>
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
