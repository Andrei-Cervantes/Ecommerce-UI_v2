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

const adminNavItems = [
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
];

const userStyle = {
  navBg: "bg-white",
  textActive: "text-foreground",
  textInactive: "text-muted-foreground hover:text-foreground",
  logoText: "text-black",
};

const adminStyle = {
  navBg: "bg-black",
  textActive: "text-white",
  textInactive: "text-muted-foreground hover:text-white",
  logoText: "text-white",
};

const Navbar = () => {
  const { user } = useUserStore();
  const { pathname } = useLocation();

  const isAuthenticated = !!user?.token;
  const isAdmin = user?.isAdmin;

  const style = !isAuthenticated ? userStyle : isAdmin ? adminStyle : userStyle;

  const navItems = !isAuthenticated
    ? publicNavItems
    : isAdmin
      ? adminNavItems
      : privateNavItems;

  const filteredNavItems = !isAuthenticated
    ? navItems.filter((item) => item.href !== pathname)
    : navItems;

  return (
    <nav className={cn("h-14 border-b px-4 bg-black", style.navBg)}>
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
        <NavLink className={style.logoText} to="/">
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
                  isActive ? style.textActive : style.textInactive,
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
