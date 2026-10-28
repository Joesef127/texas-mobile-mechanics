import Link from "next/link";
import { footerNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foot text-ink-muted text-[15px] pt-8 pb-9">
      <div className="wrap flex justify-between items-center gap-5 flex-wrap">
        <span>
          © {currentYear} {siteConfig.legalName}
        </span>
        <div className="flex flex-wrap gap-y-2 gap-x-[18px] items-center">
          {footerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline transition-colors duration-200 ease-brand hover:text-ink-text hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
