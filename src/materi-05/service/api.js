import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://65db586a3ea883a152918f56.mockapi.io/',
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
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: (id) => [{ type: "Product", id }],
    }),
    editProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: data,
      }),
    invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Products'],
    })
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useGetProductByIdQuery, useEditProductMutation, useDeleteProductMutation } = api;
