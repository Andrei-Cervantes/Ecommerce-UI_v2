import { Box, Handbag } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminNavButton from "./AdminNavButton";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useUserStore } from "@/zustand/stores/UserStore";

export interface AdminNavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const adminNavItems: AdminNavItem[] = [
  { label: "PRODUCTS", href: "/admin/products", icon: <Box size={14} /> },
  { label: "ORDERS", href: "/admin/orders", icon: <Handbag size={14} /> },
];

const AdminNavbar = () => {
  const { clearUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  return (
    <nav className="h-14 border-b px-4 bg-black">
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
        <div className="flex gap-9">
          <div className="flex gap-2 items-end">
            <NavLink
              className="text-white font-bebas-nue text-3xl leading-6"
              to="/"
            >
              B&W
            </NavLink>
            <p className="font-mono text-[8px] text-[#8A8A88] tracking-widest">
              ADMIN
            </p>
          </div>
          <Separator orientation="vertical" className="bg-[#2A2A2A]" />
          <div className="flex gap-2">
            {adminNavItems.map((item) => (
              <AdminNavButton key={item.href} {...item} />
            ))}
          </div>
        </div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
