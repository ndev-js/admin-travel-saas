import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from 'src/hooks/useAuth';

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const redirectTo = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/';

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
