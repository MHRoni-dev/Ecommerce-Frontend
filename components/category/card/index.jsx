import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import Image from 'next/image'

export default function Category({variant}) {

  if(variant === 'squire'){
    return (
        <Card className='max-w-60 min-w-24 overflow-hidden   cursor-pointer transition-all duration-200 w-fit h-fit shadow-none hover:border-highlight  ' >
          <CardHeader className=" flex justify-center items-center ">
                  <div className=' h-24 w-24 relative  overflow-hidden group-hover:border-2 rounded'  >
                      <Image src="/tshirt2.avif" alt="category image" fill className=''  />
                  </div>
          </CardHeader>
          <CardContent className=" ">
              <CardTitle className="text-center">
                  Tshirt
              </CardTitle>
              <CardDescription className="text-center">4000+ product</CardDescription>
          </CardContent>
      </Card>
    )
  }

  if(variant === 'list'){
    return (
      <Card className="flex flex-col justify-center  items-center p-4 relative w-28 h-24">
        <CardTitle className="text-xl z-10 absolute bottom-0 left-0 flex items-center justify-center bg-slate-50/50 w-full h-full">TShirt </CardTitle>
        <Image src="/tshirt2.avif" fill alt="Category"/>
      </Card>
    )
  }


  return (
    <Card className='max-w-60 min-w-24  px-0 mx-0 overflow-hidden   cursor-pointer transition-all duration-200 border-none w-fit shadow-none group ' >
        <CardHeader className="p-0 flex justify-center items-center px-0">
                <div className=' h-24 w-24 relative rounded-full overflow-hidden group-hover:border-2 group-hover:border-highlight'  >
                    <Image src="/tshirt2.avif" alt="category image" fill className=''  />
                </div>
        </CardHeader>
        <CardContent className="px-0 ">
            <CardTitle className="text-center mt-2">
                Tshirt
            </CardTitle>
            <CardDescription className="text-center">4000+ product</CardDescription>
        </CardContent>
    </Card>
  )
}
