import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserState = {
  email: null,
  id: null,
}

export interface UserState {
  id: string | null
  email: string | null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id
      state.email = action.payload.email
    },
    removeUser(state) {
      state.id = null
      state.email = null
    },
  },
  selectors: {
    selectUser: state => state,
  },
})

export const { setUser, removeUser } = userSlice.actions
export const { reducer } = userSlice
export const { selectUser } = userSlice.selectors
