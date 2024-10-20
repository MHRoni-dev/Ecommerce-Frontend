import CartItem from '@/components/cart/CartItem'
import CartItemContainer from '@/components/cart/CartItemContainer'
import PriceItem from '@/components/cart/PriceItem'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getProducts } from '@/dummy/product'
import { calculatePrice, calculateTotal, calculateVat } from '@/lib/calculatePrice'
import { ArrowLeft } from 'lucide-react'

const cart = [{name : 'tshirt01', price : "400$", quantity : 4, discount : 20}, {name : 'pant', price : "300$", quantity : 2}]

export default async function CartPage() {
    const cart = await getProducts(8)
    const subTotal = calculatePrice(cart, (item) => item.price, item => item.rating.count)
    const vat = calculateVat(subTotal, 5)
    const discount = 200
    const total = calculateTotal(subTotal, vat, discount).toFixed(2)
    
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
            <CartItemContainer >
                {cart.map((product, i)=>(
                    <CartItem key={i} details={product}/>
                ))}
            </CartItemContainer>
            <div className='md:w-1/2 flex-1 max-w-lg md:bg-slate-50 md:h-fit md:p-6 md:rounded-md md:drop-shadow-md sticky top-[15vh]'>
                <Separator className="md:hidden"/>
                <CardContent className="py-0   px-0">
                    <div className='flex flex-col py-2 '>
                        <PriceItem tag="subtotal" value={`${subTotal} $`} />
                        <PriceItem tag="vat" value={`+${vat} $`} /> 
                        <PriceItem tag="discount" value={`+${discount} $`} /> 
                    </div>
                </CardContent>
                <Separator />
                <PriceItem tag="TOTAL" value={`${total} $`} valueClass="text-xl"/>
                <div className='hidden lg:flex mt-6 justify-between items-center '>
                    <Button size="lg">Checkout</Button>
                    <CardTitle>{total} $</CardTitle>
                </div>
            </div>
        </div>
        
        <div className='my-16 lg:hidden'></div>
        <CardFooter className="fixed lg:hidden bottom-0 left-0 right-0 bg-background py-4 sm:px-12 flex items-center justify-between gap-6">
            <Button className="md:w-1/2" size="lg">Checkout</Button>
            <CardTitle className="flex-1 text-xl text-end md:block md:w-1/2 md:text-center md:bg-slate-50 md:rounded-lg py-2"> {total} $</CardTitle>   
        </CardFooter>
    </Card>
  )
}
