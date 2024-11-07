import React from 'react'
import Email from '@/components/form/Email'
import ReduxProvider from '@/store/reduxProvider'

export default function ResetPasswordPage() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div>
        <ReduxProvider>
          <Email />
        </ReduxProvider>
      </div>
    </div>
  )
}
