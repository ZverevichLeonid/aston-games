import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = useLogin()

  return (
    <div>
      <h1>SIGN IN</h1>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="email"
      />
      <input value={pass} onChange={e => setPass(e.target.value)} type="text" />
      <button onClick={() => handleLogin(email, pass)} type="submit">
        submit
      </button>
    </div>
  )
}
