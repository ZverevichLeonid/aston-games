import { useAppDispatch, useAppSelector } from './reduxHooks'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { removeUser, setUser } from '../redux/store/userSlice/userSlice'
import { removeHistory } from '../redux/store/historySlice/historySlice'
import {
  getFavorites,
  removeFavorites,
} from '../redux/store/favoritesSlice/favoritesSlice'

export function useAuth() {
  const { email, id } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const auth = getAuth()
  const [isLoading, setIsLoading] = useState(true)

  const signOut = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      alert(`Error signing out: ${error}`)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const userData = {
          email: user.email,
          id: user.uid,
        }
        dispatch(setUser(userData))
        dispatch(getFavorites())
      } else {
        dispatch(removeUser())
        dispatch(removeHistory())
        dispatch(removeFavorites())
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [auth, dispatch])

  return {
    isAuth: !!id,
    isLoading,
    email,
    id,
    signOut,
  }
}
