import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Star } from 'lucide-react'
import ProductImage from './ProductImage'


export default function ProductCard() {
  return (
    <Card className="min-w-[280px] w-full max-w-[340px] overflow-hidden">
        <CardHeader className="relative h-60 group">
            <ProductImage />
        </CardHeader>
        <CardContent>
            <div className='flex justify-between mt-4'>
                <div>
                    <CardTitle>Tshirt </CardTitle>
                    <CardDescription>
                        <span className='text-black'><span className='text-lg'>500$</span></span>
                    </CardDescription>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <Star className='w-5  text-primary' fill/>
                        <Star className='w-5' fill/>
                        <Star className='w-5'fill/>
                        <Star className='w-5'fill/>
                        <Star className='w-5'/>
                    </div>
                    <CardDescription className="text-end">4.0/5.0</CardDescription>
                </div>
            </div>
        </CardContent>
        <CardFooter className='-mt-2'>
            <Button>Add to Cart</Button>
        </CardFooter>
    </Card>
  )
}

