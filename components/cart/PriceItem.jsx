import React from 'react'
import { CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'

export default function PriceItem({tag, value,className, textClass, valueClass}) {
  return (
    <div className={cn('flex items-center justify-between gap-6', className)}>
        <CardTitle className={cn("flex-1 text-nowrap text-base", textClass)}>{tag}</CardTitle>
        <CardTitle className={cn("flex-1 text-base text-end", valueClass)}>{value}</CardTitle>        
    </div>
  )
}
