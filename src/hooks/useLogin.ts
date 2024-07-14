import { useAppDispatch } from './reduxHooks'
import { setUser } from '../redux/store/userSlice/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          }),
        )
        navigate('/')
      })
      .catch(() => alert('Invalid user'))
  }

  return handleLogin
}
