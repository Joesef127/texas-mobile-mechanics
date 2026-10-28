import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroShell } from "@/components/sections/HeroShell";
import { QualityGuaranteeCard } from "./QualityGuaranteeCard";

export function ServicesHero() {
  return (
    <HeroShell
      leftColumn={
        <>
          <Badge className="in">Services</Badge>
          <h1 className="in">A mobile mechanic service unlike anything else.</h1>
          <p className="in mt-6 text-[20px] text-ink-muted max-w-[30em]">
            When your vehicle needs an auto repair due to wear and tear, you
            would normally go to an auto repair shop where they charge a large
            bill that includes diagnosis, parts, labor, and overhead.
          </p>
          <p className="in mt-4 text-[20px] text-ink-muted max-w-[30em]">
            With Texas Mobile Mechanics,{" "}
            <strong className="text-ink-text font-semibold">
              all you ever pay for are the parts and a discount on labor!
            </strong>{" "}
            All labor is serviced at your home or anywhere you like for your
            convenience—no more waiting at the shop taking valuable time off
            your schedule.
          </p>
          <div className="in flex flex-wrap gap-[14px] mt-9">
            <Button href={siteConfig.phoneHref} variant="red">
              Call or Text {siteConfig.phoneDisplay}
            </Button>
            <Button href="#contact" variant="line">
              Get Free Diagnosis
            </Button>
          </div>
        </>
      }
      rightColumn={<QualityGuaranteeCard />}
    />
  );
}
