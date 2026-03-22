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
          "flex gap-2 text-[#8A8A88] tracking-widest rounded-sm text-[10px] px-4 py-2 border border-transparent",
          isActive && "text-[#F5F5F0] rounded-sm border-[#3A3A3A] bg-[#1E1E1E]",
        )
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default AdminNavButton;
