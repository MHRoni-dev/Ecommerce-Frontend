'use client'

import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import React from 'react'
import {  useSelector } from 'react-redux'

export default function CheckoutButton() {
  const details = useSelector(state => state.cart.detials)
  return (
    <>
      <Button className="md:w-1/2" size="lg">Checkout</Button>
      <CardTitle className="flex-1 text-xl text-end md:block md:w-1/2 md:text-center md:bg-slate-50 md:rounded-lg py-2"> {details?.total} $</CardTitle> 
    </>
  )
}
