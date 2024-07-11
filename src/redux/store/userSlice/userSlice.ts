import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id
      state.email = action.payload.email
      state.token = action.payload.token
    },
    removeUser(state) {
      state.id = null
      state.email = null
      state.token = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions
export const { reducer } = userSlice