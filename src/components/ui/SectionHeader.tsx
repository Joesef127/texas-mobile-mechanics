import { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = "mb-12",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-[640px] ${className}`.trim()}>
      <h2>{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted text-[19px]">{subtitle}</p>
      )}
    </div>
  );
}
