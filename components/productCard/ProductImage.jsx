"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'


export default function ProductImage() {
    const [hover, setHover] = useState(false)

  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <Image src="/tshirt.avif" fill  className='bg-cover'   alt='Product Image' >
            </Image>
            <div className={cn('w-full h-full bg-slate-900/50 top-0 left-0 right-0',hover ? "absolute" : "hidden")}>
            </div>
    </div>
  )
}
