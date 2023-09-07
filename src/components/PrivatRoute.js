import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export default function PrivatRoute({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (currentUser === null) {
    return <Navigate to='/login' state={{ from: location.pathname }} replace />;
  }

  return children ? children : <Outlet />;
}
