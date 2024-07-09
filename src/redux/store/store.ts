import { configureStore } from '@reduxjs/toolkit'
import { gameApi } from '../services/gameService'

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
})
