import type { ReactNode } from "react";
import { useUserStore } from "../zustand/stores/UserStore";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: "admin" | "user";
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user } = useUserStore();
  const isAuthenticated = !!user?.token;
  const isAdmin = user?.isAdmin;

  // Not logged in — go to login
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // Admin trying to access user-only route
  if (requiredRole === "user" && isAdmin)
    return <Navigate to="/admin/products" replace />;

  // User trying to access admin-only route
  if (requiredRole === "admin" && !isAdmin)
    return <Navigate to="/home" replace />;

  return children;
};

export default ProtectedRoute;
