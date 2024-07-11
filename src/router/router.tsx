import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ErrorPage } from '../pages/ErrorPage'
import { GamePage } from '../pages/GamePage'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/game/:gameId',
    element: <GamePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/singup',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/singin',
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
])
