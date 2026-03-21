import { cn } from "@/lib/utils";
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

const userStyle = {
  navBg: "bg-white",
  textActive: "text-foreground",
  textInactive: "text-muted-foreground hover:text-foreground",
  logoText: "text-black",
};

const Navbar = () => {
  const { user } = useUserStore();
  const { pathname } = useLocation();

  const isAuthenticated = !!user?.token;

  const navItems = isAuthenticated ? privateNavItems : publicNavItems;

  const filteredNavItems = !isAuthenticated
    ? navItems.filter((item) => item.href !== pathname)
    : navItems;

  return (
    <nav className={cn("h-14 border-b px-4 bg-black", userStyle.navBg)}>
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
        <NavLink className={userStyle.logoText} to="/">
          B&W Shop
        </NavLink>
        <div className="flex gap-4">
          {filteredNavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive ? userStyle.textActive : userStyle.textInactive,
                )
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
