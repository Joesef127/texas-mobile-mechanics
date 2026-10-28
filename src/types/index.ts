export type WarrantyPlanKey = "standard" | "plus" | "premium";

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface WarrantyDropdownItem {
  key: WarrantyPlanKey;
  title: string;
  subtitle: string;
  href: string;
}

export interface WarrantyPerk {
  title: string;
  subtitle?: string;
}

export interface WarrantyPlan {
  key: WarrantyPlanKey;
  name: string;
  tabPrice: string;
  price: string;
  billingPeriod: string;
  badge: string;
  leadBold: string;
  leadText: string;
  perks: WarrantyPerk[];
  description: string;
  highlightNote?: string;
}

export interface HomeServicePreviewItem {
  title: string;
  description: string;
}

export interface ProcessStepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  titlePrefix: string;
  titleAccent: string;
  badge: string;
  items: string[];
}

export interface PartsPartner {
  name: string;
  logoSrc: string;
  alt: string;
}

export interface DiscountCoupon {
  id: string;
  tag: string;
  titleLine1: string;
  titleLine2: string;
  discountText: string;
  exclusions: string[];
  ctaLabel: string;
}

export interface PaymentTermOption {
  duration: string;
  label: string;
}
