import Image from 'next/image'
import React from 'react'

export default function FeatureImage() {
  return (
    <div className=' border relative  grow basis-full h-[40vh] md:h-[60vh] max-h-xl  rounded-s-lg  overflow-hidden ' >
        <Image src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="feature product" className='drop-shadow-lg' fill />
    </div>
  )
}
