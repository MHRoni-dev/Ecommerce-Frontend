import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import CategoryPage from '@/app/category/page'
import { Card, CardContent } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import Category from '../category/card'
import { Separator } from '../ui/separator'

export default function CategorySelect() {
  return (
    <HoverCard openDelay={400} >
        <HoverCardTrigger>
            <p className='text-highlight font-semibold tracking-wide'>Category</p>
        </HoverCardTrigger>
        <HoverCardContent className="h-[320px] w-[50vw]" asChild align="start" sideOffset={24}>
            <CategorySection />
        </HoverCardContent>
    </HoverCard>
  )
}


function CategorySection () {
    return (
        <Card className="h-[320px] w-[820px] overflow-hidden px-0 py-2">
            <CardContent className="flex my-2">
                    <ScrollArea className=" h-[290px] w-[350px]">
                        <div className='pr-4  grid grid-cols-2   gap-6'>
                            <Category variant="list"/>
                            <Category variant="list"/>
                            <Category variant="list"/>
                            <Category variant="list"/>
                            <Category variant="list"/>
                            <Category variant="list"/>
                            <Category variant="list"/>
                            <Category variant="list"/>
                        </div>
                    </ScrollArea>
    
                <div className='flex  gap-6'>
                    <Separator orientation="vertical"/>
                    <ScrollArea  className=' h-[290px] w-[450px]'>
                        <div className='pr-8 grid grid-cols-3  gap-6 justify-items-center'>
                            <Category variant="circle" />
                            <Category variant="circle" />
                            <Category variant="circle" />
                            <Category variant="circle" />
                            <Category variant="circle" />
                            <Category variant="circle" />
                            <Category variant="circle" />
    
                        </div>
                    </ScrollArea>
                </div>
    
    
            </CardContent>
            
        </Card>
      )
}