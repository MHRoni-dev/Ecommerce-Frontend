"use client"
import { Button } from '@/components/ui/button'
import useActiveState from '@/hooks/state/useActiveState'
import useMultiActiveState from '@/hooks/state/useMultiActiveState'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const Colors = ['#fff', '#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000']

export default function ColorSelect({state, handler, isChecked = value => state === value}) {


  return (
    <div className=' flex items-center gap-x-4 gap-y-3 flex-wrap'>
        {Colors.map(color => (
          <Button 
              key={color}
              variant="icon"
              className={cn('w-8 h-[34px] bg-primary border-2 rounded-full hover:border-primary', 
              isChecked(color, state) && 'ring-2 ring-primary')} 
              style={{backgroundColor : color}}
              value={color}
              onClick={handler}
              >
          </Button>
        ))}
    </div>
  )
}
