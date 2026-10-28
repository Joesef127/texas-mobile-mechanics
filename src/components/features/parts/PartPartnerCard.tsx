import { PartsPartner } from "@/types";

interface PartPartnerCardProps {
  partner: PartsPartner;
}

export function PartPartnerCard({ partner }: PartPartnerCardProps) {
  return (
    <div className="bg-white border border-line rounded-[8px] px-6 py-7 flex flex-col items-center justify-between gap-[18px] min-h-[200px] transition-all duration-200 ease-brand hover:-translate-y-1 hover:border-brand-red hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)]">
      <div className="w-full h-[110px] grid place-items-center">
        <img
          src={partner.logoSrc}
          alt={partner.alt}
          loading="lazy"
          className="max-w-full max-h-[100px] w-auto h-auto object-contain block"
        />
      </div>
      <span className="font-head font-bold italic text-[20px] leading-none text-[#16181C] uppercase tracking-[0.03em] border-t border-[#E5E7EB] w-full text-center pt-3">
        {partner.name}
      </span>
    </div>
  );
}
