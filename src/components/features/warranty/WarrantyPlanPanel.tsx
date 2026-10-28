import { WarrantyPlan } from "@/types";
import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface WarrantyPlanPanelProps {
  plan: WarrantyPlan;
  isActive: boolean;
}

export function WarrantyPlanPanel({ plan, isActive }: WarrantyPlanPanelProps) {
  return (
    <div
      id={`panel-${plan.key}`}
      role="tabpanel"
      aria-labelledby={`tab-${plan.key}`}
      aria-hidden={!isActive}
      className={`col-start-1 row-start-1 grid gap-[22px] transition-all duration-300 ease-brand ${
        isActive
          ? "opacity-100 visible pointer-events-auto translate-y-0"
          : "opacity-0 invisible pointer-events-none translate-y-2"
      }`}
    >
      <div className="flex justify-between items-end gap-4 flex-wrap pb-5 border-b border-line">
        <div>
          <Badge variant="eyebrow">{plan.badge}</Badge>
          <h2 className="uppercase">{plan.name}</h2>
        </div>
        <div className="text-left xs:text-right leading-none">
          <strong className="block font-head font-extrabold italic text-[clamp(36px,4vw,52px)] leading-none text-brand-red">
            {plan.price}
          </strong>
          <span className="text-[15px] font-semibold text-muted uppercase tracking-[0.03em]">
            {plan.billingPeriod}
          </span>
        </div>
      </div>

      <p className="text-[18px]">
        <strong>{plan.leadBold}</strong> {plan.leadText}
      </p>

      <ul className="list-none m-0 p-0 grid grid-cols-1 xs:grid-cols-2 gap-3">
        {plan.perks.map((perk) => (
          <li
            key={perk.title}
            className="bg-surface border border-line border-l-4 border-l-brand-red rounded-[4px] px-4 py-[14px] font-head font-extrabold italic text-[22px] leading-[1.1] uppercase"
          >
            {perk.title}
            {perk.subtitle && (
              <small className="block font-body font-semibold not-italic text-[13px] leading-[1.35] text-muted normal-case mt-[6px]">
                {perk.subtitle}
              </small>
            )}
          </li>
        ))}
      </ul>

      <p className="text-muted">{plan.description}</p>

      <div className="pt-5 border-t border-line">
        <p className="text-[15px] font-semibold text-text">
          Please text, call, or e-mail a customer service agent so they can help
          evaluate what service you most likely will need.
        </p>
        <div className="flex flex-wrap gap-[14px] mt-[18px]">
          <Button href={siteConfig.phoneHref} variant="red">
            Call {siteConfig.phoneDisplay}
          </Button>
          <Button href={siteConfig.smsHref} variant="line">
            Text us
          </Button>
          <Button href="#contact" variant="line">
            Email us
          </Button>
        </div>
      </div>
    </div>
  );
}
