import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroShell } from "@/components/sections/HeroShell";
import { PromiseQuoteCard } from "./PromiseQuoteCard";

export function AboutHero() {
  return (
    <HeroShell
      leftColumn={
        <>
          <Badge className="in">About Us</Badge>
          <h1 className="in">Saving you time and money on every repair.</h1>
          <p className="in mt-6 text-base xl:text-lg text-ink-muted max-w-[30em]">
            At Texas Mobile Mechanics we strive to provide you the best quality
            parts and services. A lot of time and research has been devoted into
            this service that we are happy to provide you.
          </p>
          <p className="in mt-4 text-base xl:text-lg text-ink-muted max-w-[30em]">
            Texas Mobile Mechanics has found the way to save you, the consumer,
            time and money.{" "}
            <strong className="text-ink-text font-semibold">
              Our ultimate goal is to build a long-lasting relationship with
              every one of our customers.
            </strong>
          </p>
          <div className="in flex flex-wrap gap-[14px] mt-9">
            <Button href={siteConfig.phoneHref} variant="red">
              Call or Text {siteConfig.phoneDisplay}
            </Button>
            <Button href="#contact" variant="line">
              Email Us
            </Button>
          </div>
        </>
      }
      rightColumn={<PromiseQuoteCard />}
    />
  );
}
