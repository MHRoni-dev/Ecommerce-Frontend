"use client"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { DialogDescription } from '@radix-ui/react-dialog'
import { Heart } from 'lucide-react'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'


export default function ProductImage({src, otherImages, productName}) {
    const [hover, setHover] = useState(false)
    const [wished, setWished] = useState(false)

  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
     
        <Image src={src} fill  className='bg-cover'   alt={productName} />

            {/* bookmarks */}
            <Heart className={cn('right-2 top-2 z-10', hover ? 'absolute' : 'hidden', wished ? 'text-transparent' : 'text-white')} fill={wished ? 'chocolate' : 'transparent'} onClick={()=>setWished(w => !w)} />

            <div className={cn('w-full h-full bg-slate-900/50 top-0 left-0 right-0 flex justify-center items-center',hover ? "absolute" : "hidden")}>
              <ProductImagesModal
                trigger = {
                  <div className='flex items-center justify-center gap-1 text-white border border-white p-2 rounded cursor-pointer' onClick={()=>setHover(false)}>
                    <Eye className='text-white'/>
                    <span> View</span>
                  </div>
                }
                productName={productName}
                mainImage={src}
                otherImages={otherImages}
              />
            </div>
    </div>
  )
}



function ProductImagesModal ({trigger, productName, mainImage, otherImages}) {
  const [activeSrc, setActiveSrc] = useState(mainImage)
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-scroll">
        <DialogTitle>{productName}</DialogTitle>
        <DialogDescription>
          <div className='relative min-h-[380px] max-h-[80vh] border rounded-lg overflow-hidden'>
            <Image src={activeSrc} fill className='mx-auto'/>
          </div>
          <div className='flex gap-4 mt-8 flex-wrap'>
            <div className={cn('relative min-w-16 w-20 max-w-24 min-h-20 max-h-20 border rounded-sm overflow-hidden', activeSrc === mainImage && 'border-2 border-highlight')}>
              <Image src={mainImage} fill  className='mx-auto object-contain p-2' onClick={()=>setActiveSrc(mainImage)}/>
            </div>
            {otherImages?.map((src, i)=>(
              <div key={i} className={cn('relative min-w-16 w-20 max-w-24 min-h-20 max-h-20 border rounded-sm overflow-hidden', activeSrc === src && 'border-2 border-highlight')}>
                <Image  src={src} fill className='mx-auto object-contain p-2' onClick={()=>setActiveSrc(src)}/>
              </div>
            ))}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
