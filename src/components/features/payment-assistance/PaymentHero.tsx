import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroShell } from "@/components/sections/HeroShell";
import { PaymentSummaryCard } from "./PaymentSummaryCard";

export function PaymentHero() {
  return (
    <HeroShell
      leftColumn={
        <>
          <Badge className="in">No Credit Check!</Badge>
          <h1 className="in">Repair your vehicle today. Pay over time.</h1>
          <p className="in mt-6 text-[20px] text-ink-muted max-w-[30em]">
            We understand that sometimes people need assistance with affording
            repairs on your vehicle when you get caught off guard.{" "}
            <strong className="text-ink-text font-semibold">
              “It’s happened to all of us!”
            </strong>
          </p>
          <p className="in mt-4 text-[20px] text-ink-muted max-w-[30em]">
            That is why as a member of{" "}
            <strong className="text-ink-text font-semibold">Texas EAC</strong>{" "}
            and through our partner,{" "}
            <strong className="text-ink-text font-semibold">
              Auto Loan Repair (“ALR”)
            </strong>
            , we are able to assist you with getting those repairs done today
            and having the ability to make an affordable monthly payment which
            best suits your financial needs.
          </p>
          <div className="in flex flex-wrap gap-[14px] mt-9">
            <Button href={siteConfig.phoneHref} variant="red">
              Call {siteConfig.phoneDisplay}
            </Button>
            <Button href="/standard" variant="line">
              Texas EAC Membership
            </Button>
          </div>
        </>
      }
      rightColumn={<PaymentSummaryCard />}
    />
  );
}
