import React from 'react'
import { Button } from '../ui/button'
import { Headset } from 'lucide-react'

export default function HelplineButton() {
  return (
    <Button variant="icon" className="bg-highlight/20 text-highlight backdrop-blur rounded-full h-14 w-14"><Headset /></Button>
  )
}
