import Category from '@/components/category/card'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { SectionTitle } from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'

export default function CategoryPage() {
  return (
    <Card className="min-h-screen">
        <CardHeader>
            <SectionTitle className="my-0">Category</SectionTitle>
        </CardHeader>
        <CardContent className="flex ">
                <ScrollArea className=" h-[calc(100vh-40px)]">
                    <div className='pr-4  grid grid-cols-1 md:grid-cols-2  gap-6'>
                        <Category variant="squire"/>
                        <Category variant="squire"/>
                        <Category variant="squire"/>
                        <Category variant="squire"/>
                        <Category variant="squire"/>
                    </div>
                </ScrollArea>

            <div className='flex flex-1 gap-6'>
                <Separator orientation="vertical"/>
                <ScrollArea  className=' h-[calc(100vh-40px)] w-full'>
                    <div className='pr-8 grid grid-cols-1 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6 justify-items-center'>
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />

                    </div>
                </ScrollArea>
            </div>


        </CardContent>
        
    </Card>
  )
}
