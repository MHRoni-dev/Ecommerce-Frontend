'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/features/auth/userAuthApiSlice'
import FullPageLoader from '../loader/FullPageLoader'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/features/user/userSlice'
import { useRedirectIfAuthenticated } from '@/lib/protectPageAccess'


const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export default function RegisterForm() {
  const isAuthenticated = useRedirectIfAuthenticated()
  const [userData, setUserData] = React.useState({email: '', password: ''})
  const [loading, setLoading] = React.useState(false)
  const {toast} = useToast()
  const form = useForm({
    resolver: zodResolver(registerSchema)
  })
  const router = useRouter()
  const dispatch = useDispatch()
  const [loginMutation, {isSuccess, isError,data, isLoading, error }] = useLoginMutation()
  const [retryNo , setRetryNo] = useState(0)
  
  async function onSubmit(values) {
   loginMutation(values)
  }

  useEffect(() => {
    if(isSuccess) {
      toast({
        description: 'Login successfully',
        title: 'Welcome back',
        variant: 'success'
      })
      
      dispatch(loginUser(data))
      router.push('/')
    }
  
    if(isError) {
      setRetryNo(retryNo + 1)
      toast({
        description: error?.data?.message,
        title: 'Try again',
        variant: 'destructive'
      })
    }
  }, [isSuccess, isError, isLoading])


  return isAuthenticated ? null : (
    <Card className="min-w-[360px] flex-1  px-12 py-4 rounded-s-none">
        <CardHeader>
          <CardTitle>E Commerce</CardTitle>
          <CardDescription>Loin with email and password</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <Form {...form} > 
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem >
                  <FormLabel >Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Email' {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> 
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem >
                  <FormLabel >Password</FormLabel>
                  <FormControl>
                    <Input placeholder='password' {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> 
            
            <Button type="submit" className="w-full">Login</Button>
            {
              retryNo >= 3 ? 
              <CardDescription className="text-center">Forgot your password? <Link href="./register" className="text-highlight">Reset</Link></CardDescription>
                :
              <CardDescription className="text-center">Don&apos;t have an account? <Link href="./register" className="text-highlight">Register</Link></CardDescription>
            }
            </form>
          </Form>

          <div className="mt-8 flex gap-4 flex-1 justify-center">
          <Separator className="my-4 w-[40%] " />
            <p className="text-center text-nowrap flex-1">or</p>
            <Separator className="my-4 w-[40%]" />
          </div>
          <div className='space-y-2'>
            <Button className="w-full flex items-center gap-2" variant="outline"> <img src='/google.png' alt="google" className='w-6 h-6' /> Login with Google</Button>
            <Button className="w-full flex items-center gap-2" variant="outline"> <img src='/facebook.png' alt="google" className='w-6 h-6' /> Login with Facebook</Button>
          </div>

        </CardContent>
        {isLoading && <FullPageLoader />}
      </Card>
  )
}
