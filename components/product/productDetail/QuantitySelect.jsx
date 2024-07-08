"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function QuantitySelect() {
  const [value, setValue] = React.useState(1)
  const handleValue = (e) => {
    let input = e.target.value
    if(input < 0 ){
      setValue(1)
    }else if( input >= 100){
      setValue(99)
    }else{
      setValue(input)
    }
  }
  return (
    <div className='flex items-center'>
        <Button variant="outline" className="rounded-none text-xl rounded-l-md" onClick={()=>setValue(pre => pre - 1)} disabled={value <= 1}>-</Button>
        <Input className="rounded-none w-14 text-center focus-visible:ring-transparent focus-visible:ring-offset-0 text-xl" placeholder="0" value={value} onChange={handleValue}/>
        <Button variant="outline" className="rounded-none text-xl rounded-r-md" onClick={()=>setValue(pre=>pre + 1)} disabled={value >= 99}>+</Button>
    </div>
  )
}
