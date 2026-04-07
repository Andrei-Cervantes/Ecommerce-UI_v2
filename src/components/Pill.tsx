interface PillProps {
  status: "active" | "inactive";
}

const Pill: React.FC<PillProps> = ({ status }) => {
  const bgColor = status === "active" ? "bg-green-100" : "bg-zinc-500";
  const textColor = status === "active" ? "text-green-800" : "text-zinc-500";
  const text = status === "active" ? "Active" : "Inactive";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
    >
      {text}
    </span>
  );
};

export default Pill;
