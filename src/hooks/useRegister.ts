import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/db.config'
import { useAppDispatch } from './reduxHooks'
import { setUser } from '../redux/store/userSlice/userSlice'
import { useNavigate } from 'react-router-dom'

export const useRegisterUser = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        )
        navigate('/')
      })
      .catch(() => alert('email already in use'))
  }
  return handleRegister
}
