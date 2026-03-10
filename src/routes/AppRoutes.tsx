import AdminDashboard from "@/pages/Admin/AdminDashboardPage";
import AdminOrders from "@/pages/Admin/AdminOrdersPage";

import PrivateHomePage from "@/pages/Private/HomePage";
import Orders from "@/pages/Private/OrdersPage";
import Products from "@/pages/Private/ProductsPage";
import ProductView from "@/pages/Private/ProductViewPage";
import Profile from "@/pages/Private/ProfilePage";

import PublicHomePage from "@/pages/Public/HomePage";
import Login from "@/pages/Public/LoginPage";
import Register from "@/pages/Public/RegisterPage";

import ProtectedRoute from "./ProtectedRoute";

export const AppRoutes = [
  { path: "/", element: <PublicHomePage /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute requiredRole="user">
        <PrivateHomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute requiredRole="user">
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <ProtectedRoute requiredRole="user">
        <ProductView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute requiredRole="user">
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute requiredRole="user">
        <Orders />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/products",
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminOrders />
      </ProtectedRoute>
    ),
  },
];
