import { HomeServicePreviewItem, ProcessStepItem, ServiceCategory } from "@/types";

export const homeServicesPreview: HomeServicePreviewItem[] = [
  {
    title: "Diagnostics",
    description:
      "Warning lights, strange noises, rough starts. We find the cause before you pay for any repair.",
  },
  {
    title: "Brakes",
    description: "Pads, rotors and brake fluid replaced where your car sits.",
  },
  {
    title: "Battery, starter and alternator",
    description:
      "Car won’t start or keeps dying. We test the charging system and replace the failed part.",
  },
  {
    title: "Oil and fluid service",
    description: "Oil changes and fluid top-offs without a trip to the shop.",
  },
  {
    title: "Belts, hoses and cooling",
    description:
      "Leaks, overheating and worn belts repaired before they leave you stranded.",
  },
];

export const howItWorksSteps: ProcessStepItem[] = [
  {
    stepNumber: 1,
    title: "Call or text",
    description: "Describe the problem and give us your location.",
  },
  {
    stepNumber: 2,
    title: "Free diagnosis",
    description: "We come to you, inspect the car and explain what is wrong.",
  },
  {
    stepNumber: 3,
    title: "Repair on site",
    description: "Approve the work and we fix it where the car is parked.",
  },
];

export const qualityGuaranteeHighlights: string[] = [
  "Free On-Site Vehicle Diagnosis",
  "Pay Only for Parts + Discounted Labor",
  "Serviced at Home, Work, or Roadside",
  "Backed by Texas Extended Auto Coverage",
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "auto-repair",
    titlePrefix: "Auto",
    titleAccent: "Repair",
    badge: "13 Specialties",
    items: [
      "Transmissions",
      "Radiator",
      "Air Conditioning",
      "Alternators",
      "Clutch",
      "Timing Belt",
      "Steering alignment",
      "Engine Tuning",
      "Emissions / Smog Repair",
      "Overheating",
      "Electrical",
      "Starters",
      "Water Pumps",
    ],
  },
  {
    id: "auto-maintenance",
    titlePrefix: "Auto",
    titleAccent: "Maintenance",
    badge: "Preventive Care",
    items: [
      "Oil change",
      "Fluids change",
      "Tire rotation / Tires",
      "Tune ups",
      "Fuel Injection",
      "Check engine light",
      "Belt and hoses replacement",
      "Detailing",
      "Alignments",
      "Shocks / Struts",
      "Air Filters",
      "Computer Diagnostic",
    ],
  },
];
