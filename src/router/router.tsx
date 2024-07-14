import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ErrorPage } from '../pages/ErrorPage'
import { GamePage } from '../pages/GamePage'
import { HistoryPage } from '../pages/HistoryPage'
import { SearchPage } from '../pages/SearchPage'
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
    path: '/history',
    element: <HistoryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
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
