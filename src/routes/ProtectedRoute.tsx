import type { ReactNode } from "react";
import { useUserStore } from "../zustand/stores/UserStore";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useUserStore();
  const isAuthenticated = !!user.user; // Check if user is authenticated

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
