import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  TransformedGameData,
  RawSingleGameData,
  TransformedSingleGameData,
} from '../../types/types'
import { transformGamesData } from '../../utils/transformGamesData'
import { transformSingleGameData } from '../../utils/transformSingleGameData'

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY,
      'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST,
    },
  }),
  endpoints: builder => ({
    getPopularGames: builder.query<TransformedGameData[], void>({
      query: () => ({
        url: '/popular',
        method: 'GET',
      }),
      transformResponse: transformGamesData,
    }),
    getGameInfo: builder.query<TransformedSingleGameData, string>({
      query: gameId => ({
        url: `/${gameId}`,
        method: 'GET',
      }),
      transformResponse(response: RawSingleGameData) {
        return transformSingleGameData(response)
      },
    }),
  }),
})
