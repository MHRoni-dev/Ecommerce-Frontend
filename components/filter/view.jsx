import { List } from 'lucide-react'
import { Grid2X2 } from 'lucide-react'
import React from 'react'

export default function View() {
  return (
    <div className='flex items-center gap-2'>
        <Grid2X2  />
        <List className='text-muted-foreground'/>
    </div>
  )
}
