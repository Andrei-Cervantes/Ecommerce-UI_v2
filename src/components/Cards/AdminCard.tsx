import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

interface AdminCardProps {
  children: React.ReactNode;
  className: string;
}

const AdminCard = ({ children, className }: AdminCardProps) => {
  return (
    <Card className={cn(className, "border-2 border-black")}>{children}</Card>
  );
};

export default AdminCard;
