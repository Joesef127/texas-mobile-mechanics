import Link from "next/link";

// No numbers on purpose. Add real figures (rating, years, warranty length)
// when the owner provides them. Adjust the hrefs to match your routes.
const items = [
  { title: "Free diagnosis", body: "We find the cause at no charge." },
  { title: "On-site repairs", body: "At your home or workplace." },
  {
    title: "Warranty",
    body: "See how our repair warranty works.",
    href: "/standard?plan=standard",
  },
  {
    title: "Payment assistance",
    body: "See your payment options.",
    href: "/payment-assistance",
  },
];

export function HomeHeroLedger() {
  return (
    <ul className="in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7 border-t border-ink-line pt-8">
      {items.map(({ title, body, href }) => {
        const content = (
          <>
            <span className="block font-head italic font-extrabold uppercase text-[22px] leading-none">
              {title}
            </span>
            <span className="mt-2 block text-[15px] text-ink-muted">
              {body}
            </span>
          </>
        );
        return (
          <li
            key={title}
            className="lg:border-l lg:border-ink-line lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
          >
            {href ? (
              <Link
                href={href}
                className="block hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
              >
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}