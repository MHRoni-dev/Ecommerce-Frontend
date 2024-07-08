"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, {useState} from 'react'

export default function ProductDetailImage() {
    const [src, setSrc] = useState("/tshirt.avif")
  return (
    <div >
        <div className='w-full max-w-[400px]  max-h-[400px] relative h-[50vh] border'>
            <Image src={src} fill sizes='100vw' alt="Product Imge" />
        </div>
        <div className='relative flex gap-8 mt-6 overflow-auto w-full pb-2'>
            <Image src="/tshirt.avif" width={100} height={80} alt="Product Imge" className={cn('border rounded-sm', src === "/tshirt.avif" && 'border-primary')} onClick={()=>setSrc('/tshirt.avif')} />
            <Image src="/tshirt2.avif" width={100} height={80} alt="Product Imge" className={cn('border rounded-sm', src === "/tshirt2.avif" && 'border-primary')} onClick={()=>setSrc('/tshirt2.avif')} />
            <Image src="/tshirt3.avif" width={100} height={80} alt="Product Imge"  className={cn('border rounded-sm', src === "/tshirt3.avif" && 'border-primary')} onClick={()=>setSrc('/tshirt3.avif')} />
            <Image src="/tshirt4.avif" width={100} height={80} alt="Product Imge"  className={cn('border rounded-sm', src === "/tshirt4.avif" && 'border-primary')} onClick={()=>setSrc('/tshirt4.avif')} />

        </div>
        
       
    </div>
  )
}
