interface TechChipProps {
  label: string;
}

export default function TechChip({ label }: TechChipProps) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
      {label}
    </span>
  );
}
