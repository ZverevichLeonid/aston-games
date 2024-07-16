import { Form } from '../components/Form/Form'
import { useRegisterUser } from '../hooks/useRegister'

export const SignUp = () => {
  const handleRegister = useRegisterUser()

  return <Form onSubmit={handleRegister} title={'Sign Up'} />
}
