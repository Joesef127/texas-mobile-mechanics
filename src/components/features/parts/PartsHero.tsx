import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroShell } from "@/components/sections/HeroShell";
import { DirectSourcingCard } from "./DirectSourcingCard";

export function PartsHero() {
  return (
    <HeroShell
      leftColumn={
        <>
          <Badge className="in">Parts Services</Badge>
          <h1 className="in">
            We have partnered with all the leading parts suppliers in the United
            States!
          </h1>
          <p className="in mt-6 text-[20px] text-ink-muted max-w-[30em]">
            At Texas Mobile Mechanics, you never pay inflated repair shop
            markups on parts. We source OEM and trusted aftermarket components
            directly from the nation’s top auto parts networks and install them
            right where your car is parked.
          </p>
          <div className="in flex flex-wrap gap-[14px] mt-9">
            <Button href={siteConfig.phoneHref} variant="red">
              Call or Text {siteConfig.phoneDisplay}
            </Button>
            <Button href="#contact" variant="line">
              Request Parts &amp; Service
            </Button>
          </div>
        </>
      }
      rightColumn={<DirectSourcingCard />}
    />
  );
}
