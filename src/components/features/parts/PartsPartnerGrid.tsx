import { partsPartners } from "@/data/partsPartners";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PartPartnerCard } from "./PartPartnerCard";

export function PartsPartnerGrid() {
  return (
    <section className="py-[68px] md:py-24 bg-surface border-y border-line">
      <div className="wrap">
        <SectionHeader
          title="Our trusted parts partners."
          subtitle="We work directly with America’s premier retail, wholesale, and specialty auto parts distributors."
        />
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-[18px] md:gap-6">
          {partsPartners.map((partner) => (
            <PartPartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
