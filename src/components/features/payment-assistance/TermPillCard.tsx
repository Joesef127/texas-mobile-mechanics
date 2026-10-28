import { PaymentTermOption } from "@/types";

interface TermPillCardProps {
  term: PaymentTermOption;
}

export function TermPillCard({ term }: TermPillCardProps) {
  return (
    <div className="bg-surface border border-line border-l-4 border-l-brand-red rounded-[4px] px-[18px] py-4 flex flex-col justify-between items-center">
      <strong className="font-head font-extrabold italic text-[26px] leading-none uppercase">
        {term.duration}
      </strong>
      <span className="text-[13px] font-semibold text-muted uppercase">
        {term.label}
      </span>
    </div>
  );
}
