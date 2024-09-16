import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  keepUnusedDataFor: 0.5,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2',
    prepareHeaders: (headers) => {
      headers.set('Authorization', '34a6e9715fe245728f1bf2fd256ebd60');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getLatestNews: builder.query({
      query: ({ category, search, startDate, endDate }) => `top-headlines?category=${category}${search ? `&q=${search}` : ''}&from=${startDate}&to=${endDate}`
    }),
    getNewsEverything: builder.query({
      query: () => `everything?domains=techcrunch.com`
    })
  })
});

export const {
  useGetLatestNewsQuery,
  useGetNewsEverythingQuery
} = newsApi;
