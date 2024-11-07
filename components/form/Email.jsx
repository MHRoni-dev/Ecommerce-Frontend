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


const registerSchema = z.object({
  email: z.string().email(),
})

export default function RegisterForm() {
  const {toast} = useToast()
  const form = useForm({
    resolver: zodResolver(registerSchema)
  })
  const router = useRouter()
  const [loginMutation, {isSuccess, isError, isLoading, error }] = useLoginMutation()
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


  return (
    <Card className="min-w-[360px] flex-1  px-12 py-4 rounded-s-none">
        <CardHeader>
          <CardTitle>E Commerce</CardTitle>
          <CardDescription>Enter your Email to send you a verification to reset your password</CardDescription>
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
            
            <Button type="submit" className="w-full">Get Verification</Button>
            </form>
          </Form>
          

        </CardContent>
        {isLoading && <FullPageLoader />}
      </Card>
  )
}
