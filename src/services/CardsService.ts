import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Article } from '../pages/Main/Main';
const urlNew = 'https://newsapi.org/';
const API_KEY = 'c2e5e6b5c91c4304912a4cb5ca0dc3281';

interface responce {
  articles: Article[];
  status: string;
  totalResults: number;
}
export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: urlNew }),
  endpoints: (builder) => ({
    fetchAllPersons: builder.query<responce, string>({
      query: (text) => {
        if (text !== '') {
          return `v2/everything?q=${text.toLowerCase()}&apiKey=${API_KEY}`;
        } else {
          return ``;
        }
      },
    }),
  }),
});

export default cardsAPI;
