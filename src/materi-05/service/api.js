import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://65db586a3ea883a152918f56.mockapi.io/',
    fetchFn: async (...args) => {
    await new Promise((r) => setTimeout(r, 1000)); 
    return fetch(...args);}
   }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'products', 
      providesTags: ['Products'],
    }),
    addPost: builder.mutation({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
    invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = api;
