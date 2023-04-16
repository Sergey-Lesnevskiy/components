import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Article } from 'pages/Main/Main';
const urlNew = 'https://newsapi.org/';
const API_KEY = 'c2e5e6b5c91c4304912a4cb5ca0dc328';

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
// export const cardsAPI = createApi({
//   reducerPath: 'cardsAPI',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://swapi.dev/api',
//   }),
//   endpoints: (build) => ({
//     fetchAllPersons: build.query({
//       query: (search) => ({
//         url: '/people',
//         params: {
//           search,
//         },
//       }),
//     }),
//   }),
// });

export default cardsAPI;
