'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Separator } from '../ui/separator'
import { logoutUser } from '@/features/user/userSlice'
import {  usePathname } from 'next/navigation'

function shouldShow(path) {
  const dontShowPaths = ['/auth/login', '/auth/register', '/auth/verify-account']
  return !dontShowPaths.includes(path)
}

export default function AuthenticationButton() {
  const path = usePathname()

  const isAuthenticated = useSelector(state => state.user.isLogin)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  if(!shouldShow(path)) {
    return null
  }

  return isAuthenticated ? 
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex flex-col gap-2 font-semibold'>
          <p className='cursor-pointer'>Order</p>
          <p className='cursor-pointer'>Wishlist</p>
          <Separator />
          <p className='cursor-pointer' onClick={handleLogout}>Logout</p>
        </div>
      </PopoverContent>
    </Popover>
     : 
  (
    <nav className='flex items-center gap-4'>
      <Button variant="primary" className='text-base bg-highlight hover:bg-highlight hover:scale-105 transition-all text-white font-semibold tracking-wide'><Link href='/auth/login'>Login</Link></Button>
      <Button variant="outline" className='text-base border-highlight border text-highlight hover:text-highlight hover:bg-highlight/20 font-semibold tracking-wide'><Link href='/auth/register'>Register</Link></Button>
    </nav>
  )
}
