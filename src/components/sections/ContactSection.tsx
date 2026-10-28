import { siteConfig } from "@/data/siteConfig";
import { ReviewLogoCards } from "@/components/ui/ReviewLogoCards";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "@/components/features/contact/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-ink text-ink-text py-[68px] md:py-24"
    >
      <div className="wrap grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16">
        <div>
          <div className="max-w-[640px] mb-8">
            <h2>Get your free diagnosis.</h2>
          </div>

          <a
            href={siteConfig.phoneHref}
            className="block font-head font-extrabold italic text-[clamp(34px,4vw,48px)] leading-[1.05] no-underline mb-2 transition-colors duration-200 hover:text-brand-red"
          >
            {siteConfig.phoneDisplay}
          </a>

          <p className="text-ink-muted mb-7">
            Call or text · {siteConfig.businessHoursShort}
          </p>

          <a
            href={siteConfig.emailHref}
            className="block font-head font-extrabold italic text-[clamp(22px,2.6vw,30px)] leading-[1.05] no-underline mb-2 break-all transition-colors duration-200 hover:text-brand-red"
          >
            {siteConfig.email}
          </a>

          {/* <ReviewLogoCards variant="compact" /> */}
          <SocialLinks />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
