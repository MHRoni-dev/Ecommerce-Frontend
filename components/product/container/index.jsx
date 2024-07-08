import React from 'react'


export default function ProductConatiner({children}) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full flex-1">
        {children}
      </div>
      </div>
  )
}
