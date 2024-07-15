import { Route, Routes } from 'react-router-dom'
import { authOnlyRoutes, publicRoutes } from './routerConfig'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'

export const Router = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <Routes>
      {publicRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}

      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        {authOnlyRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  )
}
