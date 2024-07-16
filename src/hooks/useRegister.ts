import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/db.config'
import { useNavigate } from 'react-router-dom'

export const useRegisterUser = () => {
  const navigate = useNavigate()

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/')
      })
      .catch(e => alert(e.toString()))
  }
  return handleRegister
}
