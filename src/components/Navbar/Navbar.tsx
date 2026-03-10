import { useUserStore } from "@/zustand/stores/UserStore";
import { NavLink, useLocation } from "react-router-dom";

const publicNavItems = [
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
];

const privateNavItems = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/products" },
  { label: "Profile", href: "/profile" },
  { label: "Orders", href: "/orders" },
];

const adminNavItems = [
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
];

const Navbar = () => {
  const { user } = useUserStore();
  const { pathname } = useLocation();

  const isAuthenticated = !!user?.token;
  const isAdmin = user?.isAdmin;

  const navItems = !isAuthenticated
    ? publicNavItems
    : isAdmin
      ? adminNavItems
      : privateNavItems;

  const filteredNavItems = !isAuthenticated
    ? navItems.filter((item) => item.href !== pathname)
    : navItems;

  return (
    <nav className="h-10 border-b px-4">
      <div className="max-w-6xl mx-auto h-full flex justify-between items-center">
        <NavLink to="/">B&W Shop</NavLink>
        <div className="flex gap-4">
          {filteredNavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
