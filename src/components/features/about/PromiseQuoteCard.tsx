import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function PromiseQuoteCard() {
  return (
    <div className="bg-bg text-text border border-ink-line border-t-[5px] border-t-brand-red rounded-[6px] p-5 xs:p-9 grid gap-5">
      <Badge variant="eyebrow">Our Promise to You</Badge>
      <blockquote className="m-0 text-[21px] leading-[1.5] font-medium">
        “We strongly recommend that you contact us via phone, email, or even
        text message so that we can explain to you what services you will
        receive for every penny!”
      </blockquote>
      <cite className="font-head font-extrabold italic text-[22px] leading-[1.1] text-brand-red uppercase">
        Thank You from everyone here at Texas Mobile Mechanics
      </cite>
      <div className="flex flex-wrap gap-[14px] mt-2">
        <Button href={siteConfig.phoneHref} variant="red">
          Call {siteConfig.phoneDisplay}
        </Button>
        <Button href={siteConfig.smsHref} variant="line">
          Send a Text
        </Button>
      </div>
    </div>
  );
}
