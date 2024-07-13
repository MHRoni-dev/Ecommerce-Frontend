import { Star as Icon } from 'lucide-react'
import React from 'react'

export default function Star({variant}) {
  if(variant === "full"){
    return <Icon fill="hsl(20 70% 50%)" className='text-transparent'/>
  }

  return <Icon fill="hsl(210 40% 90.1%)" className=' text-transparent'/>
}
