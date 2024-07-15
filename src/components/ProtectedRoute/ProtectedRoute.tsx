import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
  isAllowed: boolean
}

export const ProtectedRoute = ({ isAllowed }: ProtectedRouteProps) => {
  if (isAllowed === false) {
    return <Navigate to={'/signin'} replace />
  }
  return <Outlet />
}
