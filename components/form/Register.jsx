'use client'
import React, { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useRegisterMutation, useResendVerificationMutation } from '@/features/auth/userAuthApiSlice'
import FullPageLoader from '../loader/FullPageLoader'
import Link from 'next/link'
import { useRedirectIfAuthenticated } from '@/lib/protectPageAccess'
import { useDispatch } from 'react-redux'
import { setEmail } from '@/features/auth/userAuthSlice'


const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export default function RegisterForm() {
  const dispatch = useDispatch()
  const isAuthenticated = useRedirectIfAuthenticated()
  const [userData, setUserData] = React.useState({email: '', password: '', confirmPassword: ''})
  const {toast} = useToast()
  const form = useForm({
    resolver: zodResolver(registerSchema)
  })
  const router = useRouter()
  
  const [registerMutation, { isLoading, isSuccess, isError, error }] = useRegisterMutation()
  const [resendVerificationMutation] = useResendVerificationMutation()
  const onSubmit = async (values) => {
    registerMutation(values)
  }

  useEffect(() => {
    if(isSuccess && !isLoading) {
      toast({
        description: 'Check your email for account verification',
        title: 'Account created successfully',
        variant: 'success'
      })
      dispatch(setEmail(form.getValues('email')))
      router.push('./verify-account',)
    }
  
    if(isError && !isLoading) {
      if(error?.data?.message === 'User already exist') {
        resendVerificationMutation({email: form.getValues('email')})
        toast({
          description: 'Check your email for account verification',
          title: 'User already exists',
          variant: 'success'
        })
        dispatch(setEmail(form.getValues('email')))
        router.push('./verify-account')
      } else {
        toast({
          description: error?.data?.message,
          title: 'Try again',
          variant: 'destructive'
        })
      }
    }
  }, [isLoading])
  


  return isAuthenticated ? null : (
    <Card className="min-w-[360px] flex-1 px-12 py-4 rounded-e-none">
        <CardHeader>
          <CardTitle>E Commerce</CardTitle>
          <CardDescription>Register your account with email and password</CardDescription>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem >
                  <FormLabel >Repeat Password</FormLabel>
                  <FormControl>
                    <Input placeholder='password' {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full ">Register</Button>
            <CardDescription className="text-center">Already have an account? <Link href="./login" className='text-highlight'>Login</Link></CardDescription>
          
          <div className="mt-8 flex gap-4 flex-1 justify-center ">
          <Separator className="my-4 w-[40%] " />
            <p className="text-center text-nowrap flex-1">or</p>
            <Separator className="my-4 w-[40%]" />
          </div>
          <div className='space-y-2'>
            <Button className="w-full flex items-center gap-2" variant="outline"> <img src='/google.png' alt="google" className='w-6 h-6' /> Continue with Google</Button>
            <Button className="w-full flex items-center gap-2" variant="outline"> <img src='/facebook.png' alt="google" className='w-6 h-6' /> Continue with Facebook</Button>
            </div>
            </form>
            </Form>
        </CardContent>
        {isLoading && <FullPageLoader />}
      </Card>
  )
}
