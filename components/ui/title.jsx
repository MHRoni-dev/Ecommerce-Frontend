import React from 'react'
import { CardTitle } from './card'

export function SectionTitle({children}) {
  return (
    <CardTitle className="border-l-8 py-2 pl-2 mt-16  border-highlight w-fit">{children}</CardTitle>
  )
}
