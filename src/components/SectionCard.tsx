import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  logo?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  children,
  className,
  logo,
}) => {
  return (
    <Card className={cn("w-full p-6", className)}>
      {(title || description) && (
        <div className="space-y-1 text-center">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      )}
      {logo && logo}
      {children}
    </Card>
  );
};

export default SectionCard;
