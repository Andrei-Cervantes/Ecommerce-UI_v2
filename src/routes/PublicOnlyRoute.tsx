import { useUserStore } from "@/zustand/stores/UserStore";
import { Navigate } from "react-router-dom";

interface PublicOnlyRouteProps {
  children: React.ReactNode;
}

const PublicOnlyRoute = ({ children }: PublicOnlyRouteProps) => {
  const { user } = useUserStore();
  const isAuthenticated = !!user?.token;
  const isAdmin = user?.isAdmin;

  // If already logged in → redirect away
  if (isAuthenticated) {
    return <Navigate to={isAdmin ? "/admin/products" : "/home"} replace />;
  }

  return children;
};

export default PublicOnlyRoute;
