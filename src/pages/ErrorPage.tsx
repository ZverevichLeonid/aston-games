import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

export const ErrorPage = () => {
  const navigate = useNavigate()
  const { resetBoundary } = useErrorBoundary()

  useEffect(() => {
    setTimeout(() => {
      resetBoundary()
      navigate('/', { replace: true })
    }, 5000)
  }, [navigate, resetBoundary])

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <h1 style={{ fontSize: '58px' }}>Oops! Error!</h1>
          <h2>You will be redirected to the main page in 5 seconds</h2>
        </div>
      </section>
    </>
  )
}
