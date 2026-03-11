import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

interface AdminStatCardProps {
  title: string;
  stat: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
}

const AdminStatCard = ({
  title,
  stat,
  description,
  className,
  descriptionClassName,
}: AdminStatCardProps) => {
  return (
    <Card className={cn("border-2 border-black p-6", className)}>
      <h3 className="text-muted-foreground tracking-widest text-xs">{title}</h3>
      <p className="tracking-wider text-5xl font-bebas-nue">{stat}</p>
      <p
        className={cn(
          "text-muted-foreground tracking-widest text-xs",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </Card>
  );
};

export default AdminStatCard;
