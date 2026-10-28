import { siteConfig } from "@/data/siteConfig";

interface ReviewLogoCardsProps {
  variant?: "full" | "compact";
  className?: string;
}

export function ReviewLogoCards({
  variant = "full",
  className = "",
}: ReviewLogoCardsProps) {
  const { yelp, angi } = siteConfig.reviews;

  if (variant === "compact") {
    return (
      <div
        className={`flex  gap-3 mt-5 mb-4 ${className}`.trim()}
      >
        <a
          href={yelp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find us on Yelp"
          className=" no-underline transition-all duration-200 ease-brand hover:border-brand-red hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
        >
          <img
            src={yelp.imageSrc}
            alt={yelp.name}
            loading="lazy"
            className="block w-full max-w-[200px] max-h-[46px] h-auto object-contain"
          />
        </a>
        <a
          href={angi.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Angie's List"
          className=" no-underline transition-all duration-200 ease-brand hover:border-brand-red hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
        >
          <img
            src={angi.imageSrc}
            alt={angi.name}
            loading="lazy"
            className="block w-full max-w-[200px] max-h-[46px] h-auto object-contain"
          />
        </a>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 gap-[14px] mt-7 ${className}`.trim()}>
      <a
        href={yelp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find us on Yelp — Read reviews"
        className="transition-all duration-200 ease-brand hover:-translate-y-0.5"
      >
        <img
          src={yelp.imageSrc}
          alt={yelp.name}
          loading="lazy"
          className="block w-full max-w-[320px] max-h-[68px] h-auto object-contain"
        />
      </a>
      <a
        href={angi.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Angie's List — Read reviews"
        className="transition-all duration-200 ease-brand hover:-translate-y-0.5"
      >
        <img
          src={angi.imageSrc}
          alt={angi.name}
          loading="lazy"
          className="block w-full max-w-[320px] max-h-[68px] h-auto object-contain"
        />
      </a>
    </div>
  );
}
