import { serviceCategories } from "@/data/servicesData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCategoryCard } from "./ServiceCategoryCard";

export function ServiceDirectorySection() {
  return (
    <section className="py-[68px] md:py-24 bg-surface border-y border-line">
      <div className="wrap">
        <SectionHeader
          title="Complete repair & maintenance directory."
          subtitle="From major drivetrain repairs to routine preventive maintenance, we bring the shop to you."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
