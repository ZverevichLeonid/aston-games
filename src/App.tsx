import { Loader } from './components/Loader/Loader'
import { useAuth } from './hooks/useAuth'
import { ErrorPage } from './pages/ErrorPage.tsx'
import { Router } from './router/router.tsx'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  const { isAuth, isLoading } = useAuth()

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      {!isLoading ? <Router isAuth={isAuth} /> : <Loader />}
    </ErrorBoundary>
  )
}
export default App
