import {
  arrayUnion,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  arrayRemove,
} from 'firebase/firestore'
import { db } from '../../../firebase/db.config'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const addUrlToHistory = createAsyncThunk<
  void, // Return type of the payload creator
  { url: string }, // First argument to the payload creator
  { state: RootState } // Types for ThunkAPI
>('history/addUrlToHistory', async ({ url }: { url: string }, { getState }) => {
  const state = getState()
  const id = state.user.id
  const docRef = doc(db, 'users', id!)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    await setDoc(docRef, {
      history: [url],
    })
  } else {
    await updateDoc(docRef, {
      history: arrayUnion(url),
    })
  }
})

export const deleteUrlHistory = createAsyncThunk<
  void,
  { url: string },
  { state: RootState }
>(
  'history/deleteUrlHistory',
  async ({ url }: { url: string }, { getState }) => {
    const state = getState()
    const id = state.user.id
    const docRef = doc(db, 'users', id!)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        history: arrayRemove(url),
      })
    }
  },
)

export const getHistory = createAsyncThunk<
  string[],
  void,
  { state: RootState }
>('history/getHistory', async (_, { getState }) => {
  const state = getState()
  const id = state.user.id
  const docRef = doc(db, 'users', id!)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const history = docSnap.data()
    return Array.isArray(history.history) ? history.history : []
  } else {
    return []
  }
})

const initialState: HistoryState = {
  history: [],
}

export interface HistoryState {
  history: string[]
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    removeHistory(state) {
      state.history = []
    },
  },
  extraReducers(builder) {
    builder.addCase(addUrlToHistory.fulfilled, (state, action) => {
      state.history.push(action.meta.arg.url)
    })
    builder.addCase(deleteUrlHistory.fulfilled, (state, action) => {
      const arrayWithDeletedItem = state.history.filter(
        item => item !== action.meta.arg.url,
      )
      state.history = arrayWithDeletedItem
    })
    builder.addCase(getHistory.fulfilled, (state, action) => {
      if (action.payload) {
        state.history = action.payload
      } else {
        state.history = []
      }
    })
  },
  selectors: {
    selectAllHistory: state => state.history,
  },
})

export const { removeHistory } = historySlice.actions
export const { reducer } = historySlice
export const { selectAllHistory } = historySlice.selectors
