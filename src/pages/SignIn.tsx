import { Form } from '../components/Form/Form'
import { useLogin } from '../hooks/useLogin'

export const SignIn = () => {
  const handleLogin = useLogin()

  return <Form onSubmit={handleLogin} title={'Sign In'} />
}
