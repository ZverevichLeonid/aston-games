import { Loader } from './components/Loader/Loader'
import { useAuth } from './hooks/useAuth'
import { Router } from './router/Router'

function App() {
  const { isAuth, isLoading } = useAuth()

  return <>{!isLoading ? <Router isAuth={isAuth} /> : <Loader />}</>
}
export default App
