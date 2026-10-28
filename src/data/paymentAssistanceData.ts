import { PaymentTermOption, ProcessStepItem } from "@/types";

export const paymentTermOptions: PaymentTermOption[] = [
  { duration: "3 Months", label: "Installment Plan" },
  { duration: "6 Months", label: "Installment Plan" },
  { duration: "9 Months", label: "Installment Plan" },
  { duration: "12 Months", label: "Installment Plan" },
];

export const financingSteps: ProcessStepItem[] = [
  {
    stepNumber: 1,
    title: "First Step",
    description:
      "Please have your vehicle’s title on hand to use as collateral to receive the loan.",
  },
  {
    stepNumber: 2,
    title: "Second Step",
    description:
      "Fill out the simple contract agreement that a Customer Service Representative will assist you with when he/she arrives to gather all the necessary information and to set up a date for your repair.",
  },
  {
    stepNumber: 3,
    title: "Final Step",
    description:
      "With a flat rate 10% interest, next you choose the length of time (3, 6, 9, or 12 months) you would like to utilize to suit your financial needs.",
  },
];
