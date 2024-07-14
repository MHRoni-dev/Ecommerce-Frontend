import React from 'react'

export default function ProductConatiner({variant,children}) {

  if(variant === "homePage"){
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full flex-1 my-4">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full flex-1 my-4">
        {children}
      </div>
      </div>
  )
}
