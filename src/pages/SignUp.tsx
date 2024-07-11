import { useState } from 'react'
import { useRegisterUser } from '../hooks/useRegister'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleRegister = useRegisterUser()

  return (
    <div>
      <h1> sign up</h1>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input value={pass} onChange={e => setPass(e.target.value)} type="text" />
      <button onClick={() => handleRegister(email, pass)} type="submit">
        submit
      </button>
    </div>
  )
}
