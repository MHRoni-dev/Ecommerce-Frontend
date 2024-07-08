import React from 'react'

export default function CategoryContainer({children}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7  gap-6 flex-wrap my-4'>{children}</div>
  )
}
