import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import Image from 'next/image'

export default function Category() {
  return (
    <Card className='max-w-60 overflow-hidden hover:shadow-lg hover:border-none hover:drop-shadow cursor-pointer transition-all duration-200'>
        <CardHeader className="p-0">
            <div className='w-full h-40 relative '>
                <Image src="/tshirt2.avif" alt="category image" fill />
            </div>
        </CardHeader>
        <CardContent>
            <CardTitle className="text-center mt-2">
                Tshirt
            </CardTitle>
            <CardDescription className="text-center">4000+ product</CardDescription>
        </CardContent>
    </Card>
  )
}
