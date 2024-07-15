import { Navigate, Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
  isAllowed: boolean
}

export const ProtectedRoute = ({ isAllowed }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={'/signin'} replace />
  }
  return <Outlet />
}
