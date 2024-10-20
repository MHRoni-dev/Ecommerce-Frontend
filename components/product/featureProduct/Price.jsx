import { CardTitle } from '@/components/ui/card'
import React from 'react'

export default function Price() {
  return (
    <CardTitle className="text-highlight text-4xl">40$ <span className='line-through  text-base text-muted-foreground/60'>200$</span></CardTitle>
  )
}
