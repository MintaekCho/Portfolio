interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "outline";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-gray-100 text-gray-700 border border-gray-200",
    success: "bg-green-50 text-green-700 border border-green-200",
    outline: "bg-white text-gray-700 border border-gray-300",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
}
