import React from 'react'
import { CardTitle } from './card'
import { cn } from '@/lib/utils'

export function SectionTitle({className,children}) {
  return (
    <CardTitle className={cn("border-l-8 py-2 pl-2 mt-16  border-highlight w-fit",className)}>{children}</CardTitle>
  )
}

export function FilterTitle({className, children}) {

  return (
    <CardTitle className={cn("text-lg border-b mt-2 pb-1 mb-2 ", className)}>{children}</CardTitle>
  )
}
