"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, {useState} from 'react'

export default function ProductDetailImage() {
    const [src, setSrc] = useState("/tshirt.avif")
    const [transform, setTransform] = useState("")
    

    const handleMouseMove = (e) =>{
      const { offsetX, offsetY, target } = e.nativeEvent;
      const { offsetWidth, offsetHeight } = target;

      // Calculate the center of the element
      const centerX = offsetWidth / 2;
      const centerY = offsetHeight / 2;

      // Calculate the position of the mouse relative to the center of the element
      const relativeX = offsetX - centerX;
      const relativeY = offsetY - centerY;

      // Normalize these values to be between -1 and 1
      const normalizedX = (relativeX / centerX);
      const normalizedY = (relativeY / centerY);

      // Translate values in percentage (adjust these factors to control the strength of translation)
      const translateX = normalizedX * 16.67; // 100 / 6 = 16.67
      const translateY = normalizedY * 16.67; // 100 / 6 = 16.67

      setTransform(`translate(${-translateX}%, ${-translateY}%) scale(1.4)`);
    }

    

    const handleMouseLeave = () => {
      setTransform('')
    }


  return (
    <div >
        <div className='w-full max-w-[400px]  max-h-[400px] relative h-[50vh] border overflow-hidden' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <Image src={src} fill sizes='100vw' alt="Product Imge" style={{transform }}  />
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
