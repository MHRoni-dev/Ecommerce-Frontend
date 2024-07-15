import React from 'react'
import { Input } from '../ui/input'
import { Search as SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <div className='max-w-md flex-1 relative h-10'>
        <Input className="max-w-md absolute left-0 top-0 pr-12 pl-4 text-lg rounded-3xl" />
        <SearchIcon className='absolute right-3 -translate-y-1/2 top-1/2 text-highlight bg-highlight/10 rounded-2xl w-12 h-8 px-2 py-1.5 cursor-pointer'/>
    </div>
  )
}
