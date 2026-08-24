import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from 'src/hooks/useAuth';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/auth/auth2/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
