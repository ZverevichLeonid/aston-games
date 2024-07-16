import { useState } from 'react'
import s from './Form.module.scss'
import { Header } from '../Header/Header'

interface FormProps {
  title: string
  onSubmit: (email: string, passwowrd: string) => void
}

export const Form = ({ onSubmit, title }: FormProps) => {
  const [email, setEmail] = useState('')
  const [password, sePassword] = useState('')

  return (
    <>
      <Header />
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault()
          onSubmit(email, password)
        }}
      >
        <h1>{title}</h1>
        <input
          className={s.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          required
        />
        <input
          className={s.input}
          value={password}
          onChange={e => sePassword(e.target.value)}
          type="password"
          placeholder="password"
          required
        />
        <button className={s.btn} type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
