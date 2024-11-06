
// >> import
import React from 'react'
import RegisterForm from '@/components/form/Register'
import { Toaster } from '@/components/ui/toaster'
import Image from 'next/image'
import ReduxProvider from '@/store/reduxProvider'

export default function RegisterPage() {
  

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-[80%] grid grid-cols-2'>
      <ReduxProvider>
        <RegisterForm />
      </ReduxProvider>
        <div className='relative h-full flex-1 min-h-full rounded-e-lg overflow-hidden'>
            <Image fill src='/figure01.webp' alt='SignUp or LogIn' />
        </div>
      </div>
      <Toaster />
    </div>
  )
}
