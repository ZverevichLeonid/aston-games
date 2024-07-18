import {
  arrayUnion,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  arrayRemove,
} from 'firebase/firestore'
import { db } from '../../../firebase/db.config'
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const addGameToFavorites = createAsyncThunk<
  void,
  Favorite,
  { state: RootState }
>(
  'favorites/addGameToFavorites',
  async ({ gameId, image, name, score }: Favorite, { getState }) => {
    const state = getState()
    const id = state.user.id
    const docRef = doc(db, 'users', id!)
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        favorites: arrayUnion({
          gameId,
          image,
          name,
          score,
        }),
      })
    } else {
      await updateDoc(docRef, {
        favorites: arrayUnion({
          gameId,
          image,
          name,
          score,
        }),
      })
    }
  },
)

export const deleteGameFromFavorites = createAsyncThunk<
  void,
  Favorite,
  { state: RootState }
>(
  'favorites/deleteGameFromFavorites',
  async ({ gameId, image, name, score }: Favorite, { getState }) => {
    const state = getState()
    const id = state.user.id
    const docRef = doc(db, 'users', id!)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        favorites: arrayRemove({ gameId, name, image, score }),
      })
    }
  },
)

export const getFavorites = createAsyncThunk<
  Favorite[],
  void,
  { state: RootState }
>('favorites/getFavorites', async (_, { getState }) => {
  const state = getState()
  const id = state.user.id
  const docRef = doc(db, 'users', id!)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    const favorites = docSnap.data()
    return Array.isArray(favorites.favorites) ? favorites.favorites : []
  } else {
    return []
  }
})

const initialState: FavoritesState = {
  favorites: [],
  isLoading: false,
}

export interface FavoritesState {
  favorites: Favorite[]
  isLoading: boolean
}

export interface Favorite {
  name: string
  image: string
  score: string
  gameId: string
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    removeFavorites(state) {
      state.favorites = []
    },
  },
  extraReducers(builder) {
    builder.addCase(addGameToFavorites.pending, state => {
      state.isLoading = true
    })
    builder.addCase(addGameToFavorites.fulfilled, (state, action) => {
      state.isLoading = false
      state.favorites.push({
        ...action.meta.arg,
      })
    })
    builder.addCase(deleteGameFromFavorites.pending, state => {
      state.isLoading = true
    })
    builder.addCase(deleteGameFromFavorites.fulfilled, (state, action) => {
      state.isLoading = false
      const arrayWithDeletedItem = state.favorites.filter(
        item => item.gameId !== action.meta.arg.gameId,
      )
      state.favorites = arrayWithDeletedItem
    })
    builder.addCase(getFavorites.pending, state => {
      state.isLoading = true
    })
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload) {
        state.favorites = action.payload
      } else {
        state.favorites = []
      }
    })
  },
  selectors: {
    selectIsLoading: state => state.isLoading,
    selectAllFavorites: state => state.favorites,
    selectGameIsFavorite: createSelector(
      [
        (state: FavoritesState) => state.favorites,
        (_: FavoritesState, gameId: string) => gameId,
      ],
      (favorites, gameId) => {
        return favorites.some(game => game.gameId === gameId)
      },
    ),
  },
})

export const { removeFavorites } = favoritesSlice.actions
export const { reducer } = favoritesSlice
export const { selectAllFavorites, selectGameIsFavorite, selectIsLoading } =
  favoritesSlice.selectors
