import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'

export default function Category() {
  return (
    <Card className='mb-[100vh] mt-20 w-40 overflow-hidden hover:shadow-lg hover:border-none hover:drop-shadow cursor-pointer transition-all duration-200'>
        <CardHeader className="p-0">
            <div className='w-full h-40 relative '>
                <Image src="/tshirt.avif" alt="category image" fill />
            </div>
        </CardHeader>
        <CardContent>
            <CardTitle className="text-center mt-2">
                Tshirt
            </CardTitle>
            <CardDescription>4000+   product</CardDescription>
        </CardContent>
    </Card>
  )
}
