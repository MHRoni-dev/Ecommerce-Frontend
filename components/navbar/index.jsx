import React from 'react'
import LanguageSelect from './LanguageSelect'
import CurrencySelect from './CurrencySelect'
import { Button } from '../ui/button'
import Search from './Search'
import CategorySelect from './CategorySelect'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='px-6 py-4 border-b sticky top-0 z-50 bg-slate-50 hidden md:flex justify-between gap-12 items-center  '>
        <div className='flex items-center lg:flex-1 justify-between gap-12'>
            <Link href="/" className='font-extrabold tracking-tighter text-2xl flex '>E <span className='text-highlight'> COMMERCE</span></Link>
            <nav className='hidden lg:flex items-center gap-4 mr-6 '>
                <Button variant="link" className='text-base text-highlight font-semibold tracking-wide'><Link href='/product'>Product</Link></Button>
                <CategorySelect />
            </nav>
        </div>
        <Search />
        <div className='flex items-center justify-between ml-6 gap-4 lg:flex-1 max-w-sm '>
            <nav className='flex items-center gap-4'>
                <Button variant="link" className='text-base text-highlight font-semibold tracking-wide'>Login</Button>
                <Button variant="link" className='text-base text-highlight font-semibold tracking-wide'>Signup</Button>
            </nav>
            <div className='hidden lg:flex items-center gap-4 font-semibold text-highlight'>
                <LanguageSelect />
                <CurrencySelect />
            </div>
        </div>
    </div>
  )
}
