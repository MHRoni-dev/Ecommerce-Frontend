'use client'

import PriceItem from '@/components/cart/PriceItem'
import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { updateDetails } from '@/features/cart/cartSlice'
import { calculatePrice, calculateTotal, calculateVat } from '@/lib/calculatePrice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CartPriceDetails() {

  const cart =  useSelector(state => state.cart.cart)
    const subTotal = calculatePrice(cart, (item) => item.price, item => item.count)
    const vat = calculateVat(subTotal, 5)
    const discount = 10.00
    const total = calculateTotal(subTotal, vat, discount)
    console.log(typeof vat)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(updateDetails({total, subTotal, vat, discount}))
    }, [total, subTotal, vat, discount])

  return cart.length <= 0 ? <div className='flex justify-center items-center pt-40'>
    <CardDescription>No item in cart</CardDescription>
  </div> : (
    <div className='md:w-1/2 flex-1 max-w-lg md:bg-slate-50 md:h-fit md:p-6 md:rounded-md md:drop-shadow-md sticky top-[15vh]'>
      <Separator className="md:hidden"/>
      <CardContent className="py-0   px-0">
        <div className='flex flex-col py-2 '>
          <PriceItem tag="subtotal" value={`${subTotal} $`} />
          <PriceItem tag="vat" value={`+${vat} $`} /> 
          <PriceItem tag="discount" value={`-${discount} $`} /> 
        </div>
      </CardContent>
      <Separator />
      <PriceItem tag="TOTAL" value={`${total} $`} valueClass="text-xl"/>
        <div className='hidden lg:flex mt-6 justify-between items-center '>
          <Button size="lg">Checkout</Button>
          <CardTitle>{total} $</CardTitle>
        </div>
    </div>
  )
}
