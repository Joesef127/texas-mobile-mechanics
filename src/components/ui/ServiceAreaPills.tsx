import { siteConfig } from "@/data/siteConfig";

interface ServiceAreaPillsProps {
  className?: string;
}

export function ServiceAreaPills({ className = "mt-7" }: ServiceAreaPillsProps) {
  return (
    <div className={`flex flex-wrap gap-[10px] ${className}`.trim()}>
      {siteConfig.serviceAreas.map((area) => (
        <span
          key={area}
          className="px-[18px] py-[10px] border border-line rounded-full bg-surface font-medium"
        >
          {area}
        </span>
      ))}
    </div>
  );
}
