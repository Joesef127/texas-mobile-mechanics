import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { HeroShell } from "@/components/sections/HeroShell";

export function DiscountsHero() {
  return (
    <HeroShell
      leftColumn={
        <>
          <Badge className="in">Discounts</Badge>
          <h1 className="in">Exclusive labor savings on your repair.</h1>
          <p className="in mt-6 text-[20px] text-ink-muted max-w-[30em]">
            At Texas Mobile Mechanics, you already save by avoiding repair shop
            overhead and diagnostic fees. Take advantage of our{" "}
            <strong className="text-ink-text font-semibold">
              First Time Customer
            </strong>{" "}
            and{" "}
            <strong className="text-ink-text font-semibold">
              Senior Citizen
            </strong>{" "}
            coupons for extra savings on labor.
          </p>
          <div className="in flex flex-wrap gap-[14px] mt-9">
            <Button href={siteConfig.phoneHref} variant="red">
              Call {siteConfig.phoneDisplay} to Redeem
            </Button>
            <Button href="#contact" variant="line">
              Message Us
            </Button>
          </div>
        </>
      }
      rightColumn={<YouTubePlayer />}
    />
  );
}
