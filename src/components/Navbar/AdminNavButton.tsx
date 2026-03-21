import { NavLink } from "react-router-dom";
import type { AdminNavItem } from "./AdminNavbar";
import { cn } from "@/lib/utils";

type AdminNavButtonProps = AdminNavItem;

const AdminNavButton = ({ label, href, icon }: AdminNavButtonProps) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "flex gap-2 text-[#F5F5F0] tracking-widest rounded-sm text-[10px] px-4 py-2",
          isActive && "text-red-500",
        )
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default AdminNavButton;
