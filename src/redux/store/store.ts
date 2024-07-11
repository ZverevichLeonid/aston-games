import { configureStore } from '@reduxjs/toolkit'
import { gameApi } from '../services/gameService'
import { reducer as userReducer } from '../store/userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [gameApi.reducerPath]: gameApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
