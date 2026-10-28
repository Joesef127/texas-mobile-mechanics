import { homeServicesPreview } from "@/data/servicesData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { HomeServiceItem } from "./HomeServiceItem";

export function HomeServicesPreview() {
  return (
    <section id="services" className="py-[68px] md:py-24">
      <div className="wrap">
        <SectionHeader
          title="Repairs at your home or workplace."
          subtitle="Common jobs we handle on site. Not sure what you need? Start with the free diagnosis."
        />
        <ul className="list-none m-0 p-0 border-t-2 border-text">
          {homeServicesPreview.map((item) => (
            <HomeServiceItem key={item.title} item={item} />
          ))}
        </ul>
        <div className="flex flex-wrap gap-[14px] mt-8">
          <Button href="/services" variant="red">
            View all repair &amp; maintenance services
          </Button>
          <Button href="/parts" variant="line">
            Our parts suppliers
          </Button>
        </div>
      </div>
    </section>
  );
}
