import { WarrantyPlan, WarrantyPlanKey } from "@/types";

export const warrantyPlanOrder: WarrantyPlanKey[] = [
  "standard",
  "plus",
  "premium",
];

export const warrantyPlans: Record<WarrantyPlanKey, WarrantyPlan> = {
  standard: {
    key: "standard",
    name: "Standard",
    tabPrice: "$19.99/mo",
    price: "$19.99",
    billingPeriod: "a month",
    badge: "Recommended under 30,000 miles",
    leadBold: "STANDARD PLAN",
    leadText:
      "provides you the protection you need! Recommended for Brand New and Lightly Used Vehicles with fewer than 30,000 miles.",
    perks: [
      { title: "20% OFF Total Labor" },
      { title: "4 Year 0% Deductible" },
    ],
    description:
      "The Standard Plan is ideal for owners who opted to pass on their dealership’s extended warranty, yet still want the minimum amount of coverage just in case a disaster strikes them.",
  },
  plus: {
    key: "plus",
    name: "Plus",
    tabPrice: "$29.99/mo",
    price: "$29.99",
    billingPeriod: "a month",
    badge: "Mileage between 30,000 and 60,000 miles",
    leadBold: "PLUS PLAN",
    leadText:
      "provides you the protection you need for Vehicles with mileage between 30,000 and 60,000 Miles.",
    perks: [
      { title: "35% OFF Total Labor" },
      { title: "3 Year 0% Deductible" },
    ],
    description:
      "The Plus Plan is suited for someone that doesn’t commute a lot, but still is active and wants to make sure they have average protection rather than none at all.",
  },
  premium: {
    key: "premium",
    name: "Premium",
    tabPrice: "$39.99/mo",
    price: "$39.99",
    billingPeriod: "a month",
    badge: "Best coverage · New or used vehicles",
    leadBold: "PREMIUM PLAN",
    leadText:
      "provides you the best coverage at the best rate possible if anything were to ever happen to your vehicle NEW or USED.",
    perks: [
      { title: "50% OFF Total Labor" },
      {
        title: "Choose Your Benefit",
        subtitle: "2 Year 0% Deductible OR 50% Cash Back Annually",
      },
    ],
    description:
      "With the Premium Plan you have the option of a 50% Cash Back Annually. However, if you select this feature you DO NOT get to collect a 0% Deductible after being a committed member for 2 years.",
  },
};
