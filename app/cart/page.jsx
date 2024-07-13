import CartItem from '@/components/cart/CartItem'
import CartItemContainer from '@/components/cart/CartItemContainer'
import PriceItem from '@/components/cart/PriceItem'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import { SkipBack } from 'lucide-react'
import { ArrowLeftCircle } from 'lucide-react'
import { StepBack } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function CartPage() {
  return (
    <Card className="min-h-screen p-4 sm:p-6">
        <CardHeader>
            <div className='flex items-center justify-between'>
                <CardTitle>Your Cart</CardTitle>
                <CardTitle><ArrowLeft /></CardTitle>
            </div>
            <CardDescription>Checkout product of your Cart.</CardDescription>
        </CardHeader>
        <div className='flex flex-col md:flex-row  md:gap-12 lg:gap-24 px-6 gap-6'>
            <CartItemContainer >
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </CartItemContainer>
            <div className='md:w-1/2 flex-1 max-w-lg md:bg-slate-50 md:h-fit md:p-6 md:rounded-md md:drop-shadow-md'>
                <Separator className="md:hidden"/>
                <CardContent className="py-0   px-0">
                    <div className='flex flex-col py-2 '>
                        <PriceItem tag="subtotal" value="800$" />
                        <PriceItem tag="vat" value="+200$" /> 
                        <PriceItem tag="discount" value="-20$" /> 
                    </div>
                </CardContent>
                <Separator />
                <PriceItem tag="TOTAL" value="980$" valueClass="text-xl"/>
                <div className='hidden lg:flex mt-6 justify-between items-center '>
                    <Button size="lg">Checkout</Button>
                    <CardTitle>980$</CardTitle>
                </div>
            </div>
        </div>
        
        <div className='my-16 lg:hidden'></div>
        <CardFooter className="fixed lg:hidden bottom-0 left-0 right-0 bg-background py-4 sm:px-12 flex items-center justify-between gap-6">
            <Button className="md:w-1/2" size="lg">Checkout</Button>
            <CardTitle className="flex-1 text-xl text-end md:block md:w-1/2 md:text-center md:bg-slate-50 md:rounded-lg py-2"> 800$</CardTitle>   
        </CardFooter>
    </Card>
  )
}