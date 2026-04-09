interface PillProps {
  status: "active" | "inactive";
}

const Pill: React.FC<PillProps> = ({ status }) => {
  const isActive = status === "active";

  const bgColor = isActive ? "bg-green-100" : "bg-zinc-100";
  const textColor = isActive ? "text-green-800" : "text-zinc-600";
  const dotColor = isActive ? "bg-green-500" : "bg-zinc-400";
  const text = isActive ? "Active" : "Inactive";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
      {text}
    </span>
  );
};

export default Pill;
