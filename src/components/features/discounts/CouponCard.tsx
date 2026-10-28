import { DiscountCoupon } from "@/types";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

interface CouponCardProps {
  coupon: DiscountCoupon;
}

export function CouponCard({ coupon }: CouponCardProps) {
  return (
    <article className="bg-surface text-text border-[3px] border-dashed border-text rounded-[8px] px-5 py-6 xs:px-7 xs:py-9 text-center flex flex-col items-center justify-between gap-4 relative transition-all duration-200 ease-brand hover:border-brand-red hover:-translate-y-[3px]">
      <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-muted">
        {coupon.tag}
      </span>

      <h3 className="font-head font-extrabold italic text-[clamp(34px,3.8vw,48px)] leading-[0.98] uppercase">
        {coupon.titleLine1}
        <br />
        {coupon.titleLine2}
      </h3>

      <div className="font-head font-extrabold italic text-[clamp(54px,6vw,78px)] leading-[0.92] text-brand-red uppercase my-1">
        {coupon.discountText}
      </div>

      <p className="font-head font-bold italic text-[18px] leading-[1.3] text-muted">
        {coupon.exclusions.map((line, i) => (
          <span key={line}>
            {line}
            {i < coupon.exclusions.length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className="flex flex-wrap gap-[14px] mt-2 justify-center w-full">
        <Button href={siteConfig.phoneHref} variant="red">
          {coupon.ctaLabel}
        </Button>
      </div>
    </article>
  );
}
