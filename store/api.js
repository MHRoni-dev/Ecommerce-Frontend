import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecommerce-backend-lxhy.onrender.com/api/v1/'
  }),
  endpoints: () => ({})
})