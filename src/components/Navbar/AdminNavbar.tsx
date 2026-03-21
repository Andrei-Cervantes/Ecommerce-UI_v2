import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const adminNavItems = [
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
];

const AdminNavbar = () => {
  return (
    <nav className="h-14 border-b px-4 bg-black">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
        <NavLink className="text-white" to="/">
          B&W Shop
        </NavLink>
        <div className="flex gap-4">
          {adminNavItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-white",
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

export default AdminNavbar;
