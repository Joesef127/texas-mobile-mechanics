import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ManufacturerDiagCard() {
  return (
    <div className="bg-surface border border-line border-t-[5px] border-t-brand-red rounded-[6px] p-5 xs:p-9">
      <Badge variant="eyebrow">Manufacturer-Level Precision</Badge>
      <h3 className="text-[clamp(30px,3.5vw,42px)] mb-4">
        Manufacturer Diagnostic Option
      </h3>
      <p className="text-muted text-[18px]">
        However, we believe that there is no one better suited to diagnose your
        vehicle’s current or future problems than the auto manufacturer.
      </p>
      <p className="text-text font-semibold text-[18px] mt-4">
        That is why at Texas Mobile Mechanics we give you the option to have
        your vehicle diagnosed by the manufacturer’s qualified technicians.
      </p>
      <div className="flex flex-wrap gap-[14px] mt-7">
        <Button href="/services" variant="red">
          Explore Our Services
        </Button>
        <Button href="#contact" variant="line">
          Ask About Diagnostics
        </Button>
      </div>
    </div>
  );
}
