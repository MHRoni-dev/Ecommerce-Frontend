import { api } from '@/store/api'

export const apiAuthSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
      }),
    }),
    verifyAccount: builder.query({
      query: ({email, otp}) => ({
        url: `/user/verify/${email}?otp=${otp}`
      }),
      forceRefetch: () => true
    }),
    resendVerification: builder.mutation({
      query: ({email}) => ({
        url: `/user/resend-verification/${email}`,
        method: 'POST'
      })
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/user/register',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useLazyVerifyAccountQuery, useResendVerificationMutation, useRegisterMutation } = apiAuthSlice