import { paymentTermOptions } from "@/data/paymentAssistanceData";
import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TermPillCard } from "./TermPillCard";

export function PaymentSummaryCard() {
  return (
    <div className="bg-bg text-text border border-ink-line border-t-[5px] border-t-brand-red rounded-[6px] p-5 xs:p-9 grid gap-6">
      <div className="flex justify-between items-end gap-4 flex-wrap pb-5 border-b border-line">
        <div>
          <Badge variant="eyebrow">
            Texas EAC + Auto Loan Repair (“ALR”)
          </Badge>
          <h2 className="uppercase">Simple Payment Plans</h2>
        </div>
        <div className="text-left leading-none">
          <strong className="block font-head font-extrabold italic text-[clamp(36px,4vw,52px)] leading-none text-brand-red">
            10%
          </strong>
          <span className="text-[15px] font-semibold text-muted uppercase tracking-[0.03em]">
            Flat rate interest
          </span>
        </div>
      </div>

      <p className="text-[18px]">
        Choose the length of time you would like to utilize to suit your
        financial needs. We offer the following simple plans:
      </p>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
        {paymentTermOptions.map((term) => (
          <TermPillCard key={term.duration} term={term} />
        ))}
      </div>

      <p className="text-muted">
        Your total bill will be divided out amongst the payment plan you feel is
        best suited for you. And the interest will be calculated per month by
        multiplying your remaining balance at the end of each month.
      </p>

      <div className="pt-5 border-t border-line">
        <p className="text-[15px] font-semibold text-text">
          If you have any more questions or concerns please contact a Customer
          Service Representative, who will assist you.
        </p>
        <div className="flex flex-wrap gap-[14px] mt-[18px]">
          <Button href={siteConfig.phoneHref} variant="red">
            Call {siteConfig.phoneDisplay}
          </Button>
          <Button href={siteConfig.smsHref} variant="line">
            Text us
          </Button>
          <Button href="#contact" variant="line">
            Email us
          </Button>
        </div>
      </div>
    </div>
  );
}
