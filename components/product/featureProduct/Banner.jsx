import React from 'react'

export default function     FeatureBanner() {
  return (
        <div className='border border-highlight/20 drop-shadow w-full min-h-14 flex justify-between items-center px-8 rounded-2xl bg-highlight/10'>
            <span className='text-highlight text-[15px] md:text-base font-semibold tracking-wide'>4000+ sell</span>
            <div className='bg-highlight/70 rounded-full text-white h-3 w-3' />
            <span className='text-highlight text-[15px] md:text-base font-semibold tracking-wide'>200+ review</span>
            <div className='bg-highlight/70 rounded-full text-white h-3 w-3' />
            <span className='text-highlight text-[15px] md:text-base font-semibold tracking-wide'>4.5 star</span>
        </div>
  )
}
