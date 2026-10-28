import { partsSourcingHighlights } from "@/data/partsPartners";
import { Badge } from "@/components/ui/Badge";

export function DirectSourcingCard() {
  return (
    <div className="bg-bg text-text border border-ink-line border-t-[5px] border-t-brand-red rounded-[6px] p-5 xs:p-9 grid gap-5">
      <div>
        <Badge variant="eyebrow">Direct Parts Sourcing</Badge>
        <h2 className="text-brand-red text-[clamp(32px,3.8vw,48px)]">
          Quality parts without the shop markup.
        </h2>
      </div>
      <p className="text-muted">
        Whether your repair requires same-day local commercial inventory in DFW
        or specialty components, our supplier partnerships keep your repair fast
        and affordable.
      </p>
      <ul className="list-none m-0 p-0 grid gap-3">
        {partsSourcingHighlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-3 bg-surface border border-line border-l-4 border-l-brand-red px-4 py-[14px] rounded-[4px] font-semibold"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
