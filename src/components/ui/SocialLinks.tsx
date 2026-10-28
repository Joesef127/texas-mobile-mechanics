import { siteConfig } from "@/data/siteConfig";

export function SocialLinks() {
  const { facebook, x, instagram } = siteConfig.socials;

  const iconBtnClasses =
    "grid place-items-center w-12 h-12 rounded-full border border-ink-line text-ink-text transition-all duration-200 ease-brand hover:text-white hover:bg-brand-red hover:border-brand-red hover:-translate-y-0.5";

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      <a
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Facebook"
        className={iconBtnClasses}
      >
        <svg
          className="w-[22px] h-[22px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href={x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        title="X"
        className={iconBtnClasses}
      >
        <svg
          className="w-[22px] h-[22px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
        className={iconBtnClasses}
      >
        <svg
          className="w-[22px] h-[22px] fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
