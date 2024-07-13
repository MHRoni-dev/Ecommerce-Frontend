import { Star } from 'lucide-react'
import ProductImage from './ProductImage'
import { Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'


export default function ProductCard() {
  return (
    <Card className="min-w-[150px] w-full max-w-[340px] overflow-hidden">
        <CardHeader className="relative h-40 group">
            <ProductImage />
        </CardHeader>
        <CardContent className="px-2">
            <div className='flex justify-between mt-4 flex-col sm:flex-row'>
                <div>
                    <CardTitle>Tshirt </CardTitle>
                    <CardDescription>
                        <span className='text-black'><span className='text-lg'>500$</span><span className='text-muted-foreground line-through'>560$</span></span>
                    </CardDescription>
                </div>
                <div>
                    <div className='flex sm:justify-end'>
                        <Star className='w-[18px]  text-transparent' fill="hsl(20 70% 50%)"/>
                        <Star className='w-[18px]  text-transparent' fill="hsl(20 70% 50%)"/>
                        <Star className='w-[18px]  text-transparent' fill="hsl(20 70% 50%)"/>
                        <Star className='w-[18px]  text-transparent' fill="hsl(20 70% 50%)"/>
                        <Star className='w-[16px] text-gray-400'/>
                    </div>
                    <CardDescription className="hidden sm:text-end sm:block">4.0/5.0</CardDescription>
                </div>
            </div>
        </CardContent>
        <CardFooter className='-mt-2 flex justify-between items-center px-2'>
            <Button  size="sm" className="w-full">Add to Cart</Button>
        </CardFooter>
    </Card>
  )
}

