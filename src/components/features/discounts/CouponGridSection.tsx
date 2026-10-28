import { discountCoupons } from "@/data/couponsData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CouponCard } from "./CouponCard";

export function CouponGridSection() {
  return (
    <section className="py-[68px] md:py-24 bg-surface border-y border-line">
      <div className="wrap">
        <SectionHeader
          title="Current service coupons."
          subtitle="Mention your coupon when calling, texting, or messaging us to schedule your service."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7">
          {discountCoupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>
    </section>
  );
}
