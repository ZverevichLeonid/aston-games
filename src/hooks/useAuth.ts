import { useAppDispatch, useAppSelector } from './reduxHooks'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { removeUser, setUser } from '../redux/store/userSlice/userSlice'
import { removeHistory } from '../redux/store/historySlice/historySlice'

export function useAuth() {
  const { email, id } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const auth = getAuth()

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
      } else {
        dispatch(removeUser())
        dispatch(removeHistory())
      }
    })

    return () => unsubscribe()
  }, [auth, dispatch])

  return {
    isAuth: !!id,
    email,
    id,
    signOut,
  }
}
