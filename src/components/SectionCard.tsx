import { Card } from "./ui/card";

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <Card className={`w-full p-6 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>}
      {children}
    </Card>
  );
};

export default SectionCard;
