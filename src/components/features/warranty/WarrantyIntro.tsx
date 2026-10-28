import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function WarrantyIntro() {
  return (
    <>
      <Badge className="in">Warranty</Badge>
      <h1 className="in">Texas Extended Auto Coverage.</h1>
      <p className="in mt-6 text-[20px] text-ink-muted max-w-[30em]">
        Texas Mobile Mechanics proudly offers customers an exclusive membership
        to{" "}
        <strong className="text-ink-text font-semibold">
          Texas Extended Auto Coverage (EAC)
        </strong>
        .
      </p>
      <p className="in mt-4 text-[20px] text-ink-muted max-w-[30em]">
        With a one-time membership fee of{" "}
        <strong className="text-ink-text font-semibold">$49.99</strong>, Texas
        EAC provides 3 convenient plans to cover your vehicle. Through extensive
        time and research, Texas EAC has found the way to save you, the
        consumer, money. Each category of Automotive Protection is specifically
        priced and timed according to the abuse a vehicle receives from the
        average commuter yearly (15,000 miles).
      </p>
      <div className="in flex flex-wrap gap-[14px] mt-9">
        <Button href={siteConfig.phoneHref} variant="red">
          Call {siteConfig.phoneDisplay}
        </Button>
        <Button href="#contact" variant="line">
          Email us
        </Button>
      </div>
    </>
  );
}
