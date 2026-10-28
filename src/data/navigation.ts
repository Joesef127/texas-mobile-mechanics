import { NavItem, WarrantyDropdownItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Parts", href: "/parts" },
  { label: "Warranty", href: "/standard", hasDropdown: true },
  { label: "Discounts", href: "/discounts" },
  { label: "Payment Assistance", href: "/payment-assistance" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export const warrantyDropdownItems: WarrantyDropdownItem[] = [
  {
    key: "standard",
    title: "Standard Plan",
    subtitle: "$19.99/mo · Under 30k mi",
    href: "/standard?plan=standard",
  },
  {
    key: "plus",
    title: "Plus Plan",
    subtitle: "$29.99/mo · 30k–60k mi",
    href: "/plus?plan=plus",
  },
  {
    key: "premium",
    title: "Premium Plan",
    subtitle: "$39.99/mo · New or Used",
    href: "/premium?plan=premium",
  },
];

export const footerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Parts", href: "/parts" },
  { label: "Warranty", href: "/standard" },
  { label: "Discounts", href: "/discounts" },
  { label: "Payment Assistance", href: "/payment-assistance" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];
