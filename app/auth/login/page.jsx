import React from 'react'
import LoginForm from '@/components/form/Login'
import Image from 'next/image'
import ReduxProvider from '@/store/reduxProvider'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className='w-[80%] grid grid-cols-2  gap-0'>
        <div className='relative w-full flex-1 min-h-full rounded-s-lg overflow-hidden'>
          <Image fill src='/figure01.webp' alt='SignUp or LogIn'/>
        </div>
        <ReduxProvider>
        <LoginForm />
        </ReduxProvider>
      </div>
    </div>
  )
}
