import { siteConfig } from "@/data/siteConfig";
import { Badge } from "@/components/ui/Badge";
import { HeroShell } from "@/components/sections/HeroShell";
import { ContactDetailBox } from "./ContactDetailBox";
import { DfwMapCard } from "./DfwMapCard";

export function ContactHero() {
  return (
    <HeroShell
      leftColumn={
        <>
          <Badge className="in">Contact Us</Badge>
          <h1 className="in">We come to you anywhere in DFW.</h1>
          <div className="in grid gap-4 mt-7">
            <ContactDetailBox
              label="Address"
              value={siteConfig.addressLabel}
            />
            <ContactDetailBox
              label="Telephone"
              value={siteConfig.phoneDisplay}
              href={siteConfig.phoneHref}
            />
            <ContactDetailBox
              label="E-mail"
              value={siteConfig.email.toUpperCase()}
              href={siteConfig.emailHref}
            />
            <ContactDetailBox
              label="Business Hours"
              value={siteConfig.businessHours}
            />
          </div>
        </>
      }
      rightColumn={<DfwMapCard />}
    />
  );
}
