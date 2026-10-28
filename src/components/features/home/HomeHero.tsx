import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { HeroShell } from "@/components/sections/HeroShell";

export function HomeHero() {
  return (
    <HeroShell
      leftColumn={
        <>
          <Badge className="in">Free diagnosis</Badge>
          <h1 className="in">We repair your car where it’s parked.</h1>
          <p className="in mt-6 text-[20px] text-ink-muted max-w-[30em]">
            Mobile mechanics serving{" "}
            <strong className="text-ink-text font-semibold">
              Dallas, Fort Worth, Arlington and surrounding cities.
            </strong>{" "}
            Tell us what your car is doing. We find the cause at no charge.
          </p>
          <div className="in flex flex-wrap gap-[14px] mt-9">
            <Button href={siteConfig.phoneHref} variant="red">
              Call or Text {siteConfig.phoneDisplay}
            </Button>
            <Button href={siteConfig.emailHref} variant="line">
              Send a mail
            </Button>
          </div>
        </>
      }
      rightColumn={<YouTubePlayer />}
    />
  );
}
