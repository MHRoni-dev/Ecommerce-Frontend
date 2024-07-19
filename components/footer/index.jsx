import { House } from 'lucide-react'
import { Menu } from 'lucide-react'
import { UserRound } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { Copyright } from 'lucide-react'
import React from 'react'
import { CardTitle } from '../ui/card'
import Search from '../navbar/Search'
import { Facebook } from 'lucide-react'
import { MessageCircleMore } from 'lucide-react'
import { Globe } from 'lucide-react'
import { Youtube } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <>
        <div className='bg-gradient-to-b from-slate-100 via-orange-50 to-slate-100 py-8 px-8'>
            <footer className='text-muted-foreground space-y-8 hidden lg:block'>
                
                <div className='flex justify-between'>
                    <div className=''>
                        <p>Product</p>
                        <p>Category</p>
                        <p>Order</p>
                        <p>Cart</p>
                        <p>Helpline</p>
                        <p>QNA</p>
                    </div>
                    <div>
                        <p>TShirt</p>
                        <p>Shirt</p>
                        <p>Pant</p>
                        <p>Shooes</p>
                        <p>Shorts</p>
                    </div>
                    <div>
                        <p>Miles</p>
                        <p>Warfaze</p>
                        <p>Aurthohin</p>
                        <p>LRB </p>
                        <p>Artcell</p>
                        <p>Black</p>
                    </div>
                    <div className='w-4/12 flex flex-col justify-between '>
                        <div className=''>
                            <Search />
                        </div>
                        <div className='space-y-2'>
                            <p className="text-black text-lg font-medium">Follow Us</p>
                            <div className='flex items-center gap-4 '>
                                <Facebook className='hover:text-highlight'/>
                                <MessageCircleMore  className='hover:text-highlight'/>
                                <Globe  className='hover:text-highlight'/>
                                <Youtube  className='hover:text-highlight'/>
                                <Twitter  className='hover:text-highlight'/>
                                <Instagram  className='hover:text-highlight'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <p className='text-lg font-bold w-fit mx-auto'>E <span className='text-highlight'>COMMERCE</span></p>
                    <p className='text-muted-foreground text-sm flex items-center gap-1 justify-center'><Copyright className='w-5 h-5'/>All rights reserved to ECOMMERCE</p>
                </div>
            </footer>
        </div>
        <div className='fixed lg:hidden bottom-0 left-0 w-full h-20 bg-slate-200 gap-2 text-muted-foreground grid grid-cols-4 place-content-center place-items-center px-2'>
            <div className='flex justify-center items-center flex-col text-highlight'>
                <House />
                <p>Home</p>
            </div>
            <div className='flex justify-center items-center flex-col '>
                <Menu />
                <p>Category</p>
            </div>
            <div className='flex justify-center items-center flex-col '>
                <ShoppingCart />
                <p>Cart</p>
            </div>
            <div className='flex justify-center items-center flex-col '>
                <UserRound />
                <p>Account</p>
            </div>
        </div>
    </>
  )
}
