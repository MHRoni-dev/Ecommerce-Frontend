"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { toast } from '@/hooks/use-toast'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLazyVerifyAccountQuery, useVerifyAccountQuery } from '@/features/auth/userAuthApiSlice'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export default function InputOTPForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })
  const [makeRequest, {isSuccess, isError, isLoading, error, isFetching}] = useLazyVerifyAccountQuery()

  async function onSubmit() {
    const data = {email, otp: form.getValues("pin")}
    const res = await makeRequest({...data},{
      forceRefetch: true
    })
  }

  useEffect(() => {
    setEmail(sessionStorage.getItem("email"))
  }, [])

  useEffect(() => {
    if(isSuccess) {
      toast({
        description: 'Please login to continue',
        title: 'Account verified successfully',
        variant: 'success'
      })
      sessionStorage.removeItem("email")
      router.push('./login')
    }

    if(isError) {
      toast({
        description: error?.data?.message,
        title: 'Try again',
        variant: 'destructive',
      })
    }
  }, [isLoading, isFetching])


  return (
    <Card className="px-12 py-14 shadow-lg">
      <CardHeader>
        <CardTitle>Verify your account</CardTitle>
      </CardHeader>
      <CardContent>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-fit space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Verify Account</Button>
      </form>
    </Form>
      </CardContent>
    </Card>
  )
}
