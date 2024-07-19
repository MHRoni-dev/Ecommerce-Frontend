import React from 'react'

export default function FloatingButtonContainer({children}) {
  return (
    <div className='fixed bottom-6 right-8 flex flex-col gap-2 z-50'>{children}</div>
  )
}
