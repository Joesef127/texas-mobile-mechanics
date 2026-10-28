import { ReactNode } from "react";

interface BadgeProps {
  variant?: "hero" | "eyebrow";
  className?: string;
  children: ReactNode;
}

export function Badge({
  variant = "hero",
  className = "",
  children,
}: BadgeProps) {
  if (variant === "eyebrow") {
    return (
      <span
        className={`inline-block text-[13px] font-semibold uppercase tracking-[0.04em] text-muted mb-2 ${className}`.trim()}
      >
        {children}
      </span>
    );
  }

  return (
    <p
      className={`inline-block mb-[22px] bg-brand-red text-white font-head font-extrabold italic text-[22px] leading-none px-[14px] py-[8px] rounded-[3px] uppercase tracking-[0.02em] ${className}`.trim()}
    >
      {children}
    </p>
  );
}
