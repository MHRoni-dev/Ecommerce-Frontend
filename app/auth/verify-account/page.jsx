"use client"
import { toast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { useVerifyAccountQuery } from '@/features/auth/userAuthApiSlice'
import ReduxProvider from '@/store/reduxProvider'
import Otp from '@/components/form/Otp'

export default function InputOTPForm() {
  

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <ReduxProvider>
        <Otp />
    </ReduxProvider>
    <Toaster />
    </div>
  )
}
