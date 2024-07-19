import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

interface ProtectedRouteProps {
  isAllowed: boolean
}

export const ProtectedRoute = ({ isAllowed }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={'/signin'} replace />
  }
  return <Outlet />
}

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool.isRequired,
}
