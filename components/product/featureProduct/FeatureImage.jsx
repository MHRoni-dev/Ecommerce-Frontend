import Image from 'next/image'
import React from 'react'

export default function FeatureImage() {
  return (
    <div className=' border relative  grow basis-full h-[40vh] md:h-[60vh] max-h-xl  rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden' >
        <Image src="/tshirt.avif" alt="feature product" fill />
    </div>
  )
}
