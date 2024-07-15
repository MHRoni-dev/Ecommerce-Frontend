import React from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

export default function CartButton() {
  return (
    <Button variant="icon" className=" bg-highlight/20 backdrop-blur text-highlight h-14 w-14 rounded-full"><ShoppingCart /></Button>
  )
}
