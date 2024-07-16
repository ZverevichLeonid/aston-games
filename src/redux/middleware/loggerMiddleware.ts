import { createListenerMiddleware } from '@reduxjs/toolkit'
import { removeUser, setUser } from '../store/userSlice/userSlice'

export const loggerMiddleWare = createListenerMiddleware()
loggerMiddleWare.startListening({
  actionCreator: setUser,
  /* eslint-disable no-console */
  effect: () => console.log('Вы вошли в аккаунт'),
})
loggerMiddleWare.startListening({
  actionCreator: removeUser,
  effect: () => console.log('Вы вышли из аккаунта'),
})
