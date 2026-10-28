import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";
import { HeroShell } from "@/components/sections/HeroShell";
import { HomeHeroLedger } from "@/components/sections/HomeHeroLedger";
import { StickyCallBar } from "@/components/ui/StickyCallBar";

const smsHref = siteConfig.phoneHref.replace(/^tel:/, "sms:");

export function HomeHero() {
  return (
    <>
      <HeroShell
        isHomePage
        leftColumn={
          <div className="flex flex-col items-start gap-4">
            <p className="in mb-5 flex items-center gap-3 font-head italic font-extrabold uppercase tracking-[0.06em] text-[15px] text-brand-red">
              <span aria-hidden className="h-[3px] w-4 bg-brand-red" />
              Free diagnosis
            </p>
            <h1 className="in text-[clamp(3rem,7.2vw,6rem)] leading-normal text-balance">
              We repair your car
              <span className="block text-brand-red">where it’s parked.</span>
            </h1>
            <p className="in mt-16 text-[18px] md:text-[20px] text-ink-muted max-w-[32em] text-pretty">
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
          </div>
        }
        rightColumn={
          <div className="in relative">
            {/* Offset slab behind the panel. Delete this div to remove it. */}
            <div
              aria-hidden
              className="hidden md:block absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl bg-brand-red"
            />
            <div className="overflow-hidden rounded-2xl border border-ink-line bg-ink shadow-[0_24px_60px_-24px_rgba(11,12,14,0.45)]">
              <YouTubePlayer facade className="rounded-none border-0" />
              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6">
                <p>
                  <span className="block font-head italic font-extrabold uppercase text-[20px] leading-none">
                    Car acting up?
                  </span>
                  <span className="mt-1 block text-[15px] text-ink-muted">
                    Describe the problem by text.
                  </span>
                </p>
                <Button href={smsHref} variant="line">
                  Text us
                </Button>
              </div>
            </div>
          </div>
        }
        bottomRow={
          <>
            <HomeHeroLedger />
            <div id="home-hero-end" aria-hidden />
          </>
        }
      />
      <StickyCallBar sentinelId="home-hero-end" />
    </>
  );
}