import { DiscountCoupon } from "@/types";

export const discountCoupons: DiscountCoupon[] = [
  {
    id: "first-time-customer",
    tag: "Texas Mobile Mechanics Coupon",
    titleLine1: "First Time",
    titleLine2: "Customer",
    discountText: "10% OFF",
    exclusions: ["(Exclusions Apply)", "(Labor Only)"],
    ctaLabel: "Claim 10% Off — Call Now",
  },
  {
    id: "senior-citizen",
    tag: "Texas Mobile Mechanics Coupon",
    titleLine1: "Senior",
    titleLine2: "Citizen",
    discountText: "15% OFF",
    exclusions: ["(Exclusions Apply)", "(Labor Only)"],
    ctaLabel: "Claim 15% Off — Call Now",
  },
];
