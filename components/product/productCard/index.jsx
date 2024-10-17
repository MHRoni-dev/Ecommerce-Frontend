import { Star } from 'lucide-react'
import ProductImage from './ProductImage'
import { Card, CardContent, CardDescription, CardFooter, CardHeader,CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Rating from './Rating'
import { StarHalf } from 'lucide-react'

const exampleData = {
    title : 'example',
    image : 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price : 100,
    rating : {
        count : 40,
        rate : 3.9
    }
}

export default function ProductCard({data = exampleData}) {
    console.log(data.title)
  return (
    <Card className="min-w-[150px] w-full max-w-[340px] overflow-hidden shadow-md drop-shadow-lg h-fit">
        <CardHeader className="relative h-40 group">
            <ProductImage src={data.image} productName={data.title}/>
        </CardHeader>
        <CardContent className="px-2">
            <div className=' mt-4 flex-col sm:flex-row sm:justify-start '>
                <CardTitle><Link href="/product/tshirt" className='text-wrap text-lg leading-tight line-clamp-2'>{data.title}</Link> </CardTitle>
                <div className='w-auto'>
                    <CardDescription>
                        <span className='text-black '><span className='text-lg'>{data.price}$</span><span className='text-muted-foreground line-through'>560$</span></span>
                    </CardDescription>
                </div>
                <div className='flex flex-col items-start md:basis-48 lg:basis-96'>
                    <Rating rate={data.rating.rate}/>
                    <CardDescription className="sm:text-end hidden ">{data.rating.rate}/5.0</CardDescription>
                    <CardDescription className="sm:text-end sm:block">{data.rating.count} sells</CardDescription>
                </div>
            </div>
        </CardContent>
        <CardFooter className='-mt-2 flex justify-between items-center px-2'>
            <Button  size="sm" className="w-full">Add to Cart <span className='-mt-2 ml-2 bg-highlight w-[18px] h-[18px] rounded-full flex items-center justify-center'>4</span></Button>
        </CardFooter>
    </Card>
  )
}

