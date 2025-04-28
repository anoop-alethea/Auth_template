import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RoleBasedRouteProps {
  requiredRole: 'user' | 'admin';
}

export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({ requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== requiredRole) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
