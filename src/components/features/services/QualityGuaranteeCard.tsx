import { qualityGuaranteeHighlights } from "@/data/servicesData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function QualityGuaranteeCard() {
  return (
    <div className="bg-bg text-text border border-ink-line border-t-[5px] border-t-brand-red rounded-[6px] p-5 xs:p-9 grid gap-5">
      <div>
        <Badge variant="eyebrow">Our Quality Guarantee</Badge>
        <h2 className="text-brand-red text-[clamp(32px,3.8vw,48px)]">
          We match dealerships’ Qualities &amp; Warranties!
        </h2>
      </div>
      <p className="text-muted">
        Every repair and maintenance service is backed by our commitment to
        dealership-grade workmanship without the shop overhead.
      </p>
      <ul className="list-none m-0 p-0 grid gap-3">
        {qualityGuaranteeHighlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-3 bg-surface border border-line border-l-4 border-l-brand-red px-4 py-[14px] rounded-[4px] font-semibold"
          >
            {highlight}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-[14px] mt-2">
        <Button href="/standard" variant="red">
          Explore Warranty Plans
        </Button>
        <Button href="/parts" variant="line">
          Parts Partners
        </Button>
      </div>
    </div>
  );
}
