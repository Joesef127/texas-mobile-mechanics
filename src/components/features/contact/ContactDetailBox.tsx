interface ContactDetailBoxProps {
  label: string;
  value: string;
  href?: string;
}

export function ContactDetailBox({
  label,
  value,
  href,
}: ContactDetailBoxProps) {
  const valueClasses =
    "font-head font-extrabold italic text-[clamp(22px,2.5vw,30px)] leading-[1.1] no-underline text-text break-words";

  return (
    <div className="bg-bg text-text border border-ink-line border-l-4 border-l-brand-red rounded-[4px] px-5 py-4">
      <small className="block text-[12.5px] font-bold uppercase tracking-[0.05em] text-brand-red mb-1">
        {label}
      </small>
      {href ? (
        <a
          href={href}
          className={`${valueClasses} transition-colors duration-200 hover:text-brand-red`}
        >
          {value}
        </a>
      ) : (
        <strong className={valueClasses}>{value}</strong>
      )}
    </div>
  );
}
