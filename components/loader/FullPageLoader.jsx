'use client'
import React, { useEffect } from 'react'

export default function FullPageLoader() {

  useEffect(() => {
    // Lock scroll when loading
      document.body.style.overflow = 'hidden';

    // Cleanup on unmount or when loading changes
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scroll is restored
    };
  }, []);
  return (
    <div className='flex items-center justify-center min-h-screen fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-[9999999]' onScroll={() => {}}>
      <img src="/loader.gif" alt="loader" className='w-28 h-28' />
    </div>
  )
}
