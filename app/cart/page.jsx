import CartItem from '@/components/cart/CartItem'
import CartItemContainer from '@/components/cart/CartItemContainer'
import PriceItem from '@/components/cart/PriceItem'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getProducts } from '@/dummy/product'
import { calculatePrice, calculateTotal, calculateVat } from '@/lib/calculatePrice'
import ReduxProvider from '@/store/reduxProvider'
import { ArrowLeft } from 'lucide-react'
import CartProducts from './CartProducts'
import CheckoutButton from './CheckoutButton'
import CartPriceDetails from './CartPriceDetails'


export default async function CartPage() {
    
    
  return (
    <Card className="min-h-screen p-4 sm:p-6 container border-none ">
        <CardHeader>
            <div className='flex items-center justify-between'>
                <CardTitle>Your Cart</CardTitle>
                <CardTitle><ArrowLeft /></CardTitle>
            </div>
            <CardDescription>Checkout product of your Cart.</CardDescription>
        </CardHeader>
        <div className='flex flex-col md:flex-row  md:gap-12 lg:gap-24 px-2 md:px-4 gap-6 relative'>
            <ReduxProvider>
                <CartProducts/>
                <CartPriceDetails />
            </ReduxProvider>
            
        </div>
        
        <div className='my-16 lg:hidden'></div>
        <CardFooter className="fixed lg:hidden bottom-0 left-0 right-0 bg-background py-4 sm:px-12 flex items-center justify-between gap-6">
            <ReduxProvider>
                <CheckoutButton />
            </ReduxProvider>  
        </CardFooter>
    </Card>
  )
}
