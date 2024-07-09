import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { ErrorPage } from '../pages/ErrorPage'
import { GamePage } from '../pages/GamePage'

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
])
