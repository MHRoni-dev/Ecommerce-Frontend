import React from 'react'
import { CardTitle } from './card'

export function SectionTitle({children}) {
  return (
    <CardTitle className="border-l-8 py-2 pl-2 mt-16  border-highlight w-fit">{children}</CardTitle>
  )
}

export function FilterTitle({children}) {

  return (
    <CardTitle className="text-lg border-b mt-2 pb-1 mb-2 ">{children}</CardTitle>
  )
}
