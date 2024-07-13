import {
  arrayUnion,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  arrayRemove,
  DocumentData,
} from 'firebase/firestore'
import { db } from '../../../firebase/db.config'
import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const addUrlToHistory: AsyncThunk<
  void,
  {
    id: string
    url: string
  },
  {
    [fields: string]: void // костыль с типами, ts2742
  }
> = createAsyncThunk(
  'history/addUrlToHistory',
  async ({ id, url }: { id: string; url: string }) => {
    const docRef = doc(db, 'users', id)
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
  },
)

export const deleteUrlHistory: AsyncThunk<
  void,
  {
    id: string
    url: string
  },
  {
    [fields: string]: void // костыль с типами, ts2742
  }
> = createAsyncThunk(
  'history/deleteUrlHistory',
  async ({ id, url }: { id: string; url: string }) => {
    const docRef = doc(db, 'users', id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        history: arrayRemove(url),
      })
    }
  },
)

export const getHistory: AsyncThunk<
  DocumentData | null,
  {
    id: string
  },
  {
    [fields: string]: void // костыль с типами, ts2742
  }
> = createAsyncThunk<DocumentData | null, { id: string }>(
  'history/getHistory',
  async ({ id }: { id: string }) => {
    const docRef = doc(db, 'users', id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const history = docSnap.data()
      return history
    } else {
      return null
    }
  },
)

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
        state.history = action.payload.history
      } else {
        state.history = []
      }
    })
  },
})

export const { removeHistory } = historySlice.actions
export const { reducer } = historySlice
