import { Box, Handbag } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminNavButton from "./AdminNavButton";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useUserStore } from "@/zustand/stores/UserStore";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback } from "../ui/avatar";

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
  const { user, clearUser } = useUserStore();
  const navigate = useNavigate();

  const userInitial = user?.firstName[0];

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
        <div className="flex gap-4 items-center">
          <div className="px-3 py-1 border border-[#2E2E2E] bg-[#1A1A1A] rounded-2xl flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-2xl bg-green-500/50 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-2xl bg-[#27AE60]" />
            </div>
            <p className="text-[#8A8A88] text-xs">LIVE STORE</p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarFallback className="text-black">
                    {userInitial || "A"}
                  </AvatarFallback>
                </Avatar>
                <p className="text-xs text-[#8A8A88]">ADMIN</p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-1">
              <div>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
