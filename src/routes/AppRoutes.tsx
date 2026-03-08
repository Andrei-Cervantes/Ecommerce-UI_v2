import AdminDashboard from "@/pages/Admin/AdminDashboard";
import AdminOrders from "@/pages/Admin/AdminOrders";

import PrivateHomePage from "@/pages/Private/Home";
import Orders from "@/pages/Private/Orders";
import Products from "@/pages/Private/Products";
import ProductView from "@/pages/Private/ProductView";
import Profile from "@/pages/Private/Profile";

import PublicHomePage from "@/pages/Public/Home";
import Login from "@/pages/Public/Login";
import Register from "@/pages/Public/Register";

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
      <ProtectedRoute>
        <PrivateHomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <ProtectedRoute>
        <ProductView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/products",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedRoute>
        <AdminOrders />
      </ProtectedRoute>
    ),
  },
];
