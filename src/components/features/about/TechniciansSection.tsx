import { Badge } from "@/components/ui/Badge";
import { ManufacturerDiagCard } from "./ManufacturerDiagCard";

export function TechniciansSection() {
  return (
    <section className="py-[68px] md:py-24 bg-surface border-y border-line">
      <div className="wrap grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <Badge className="mb-4">Our Technicians</Badge>
          <h2>Qualified for every year, make, or model.</h2>
          <p className="mt-5 text-muted text-[19px]">
            At Texas Mobile Mechanics we strive to provide you the most
            qualified technicians in the industry. Any service we provide you
            will be of the highest standards possible.
          </p>
          <p className="mt-4 text-muted text-[19px]">
            In addition, all our technicians go through our personalized
            training program to ensure customer satisfaction. That is why Texas
            Mobile Mechanics technicians are able to diagnose your vehicle’s
            problems regardless of year, make, or model.
          </p>
        </div>

        <ManufacturerDiagCard />
      </div>
    </section>
  );
}
