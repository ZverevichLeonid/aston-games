import { configureStore } from '@reduxjs/toolkit'
import { gameApi } from '../services/gameService'
import { reducer as userReducer } from '../store/userSlice/userSlice'
import { reducer as historyReducer } from '../store/historySlice/historySlice'
import { reducer as favoritesReducer } from '../store/favoritesSlice/favoritesSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    history: historyReducer,
    favorites: favoritesReducer,
    [gameApi.reducerPath]: gameApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gameApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
