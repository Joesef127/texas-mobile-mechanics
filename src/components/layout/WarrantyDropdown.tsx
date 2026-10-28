"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { warrantyDropdownItems } from "@/data/navigation";

interface WarrantyDropdownProps {
  onSelectLink?: () => void;
  isMobileMenuOpen?: boolean;
}

export function WarrantyDropdown({
  onSelectLink,
  isMobileMenuOpen,
}: WarrantyDropdownProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const isWarrantyRoute =
    pathname === "/standard" ||
    pathname === "/plus" ||
    pathname === "/premium";

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname, isMobileMenuOpen]);

  return (
    <div className="group relative flex flex-col nav:flex-row items-stretch nav:items-center">
      <div className="flex items-center justify-between nav:justify-start gap-[2px] border-b border-ink-line nav:border-b-0">
        <Link
          href="/standard"
          aria-current={isWarrantyRoute ? "page" : undefined}
          onClick={onSelectLink}
          className={`py-[14px] nav:py-2 text-[18px] nav:text-[15.5px] no-underline whitespace-nowrap transition-colors duration-200 ease-brand hover:text-ink-text ${
            isWarrantyRoute
              ? "text-ink-text font-semibold"
              : "text-ink-muted font-medium"
          }`}
        >
          Warranty
        </Link>

        <button
          type="button"
          aria-label={
            isExpanded ? "Collapse warranty plans" : "Expand warranty plans"
          }
          aria-expanded={isExpanded}
          aria-controls="warranty-dropdown-menu"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsExpanded((prev) => !prev);
          }}
          className={`inline-flex items-center justify-center p-2 -mr-2 nav:p-1 nav:mr-0 bg-transparent border-0 cursor-pointer transition-colors duration-200 ease-brand hover:text-ink-text ${
            isWarrantyRoute ? "text-ink-text" : "text-ink-muted"
          }`}
        >
          <svg
            className={`w-[16px] h-[16px] nav:w-[14px] nav:h-[14px] fill-none stroke-current stroke-[2.2] [stroke-linecap:round] [stroke-linejoin:round] transition-transform duration-200 ease-brand ${
              isExpanded ? "rotate-180" : "rotate-0"
            } nav:rotate-0 nav:group-hover:rotate-180 nav:group-focus-within:rotate-180`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <div
        id="warranty-dropdown-menu"
        role="menu"
        aria-label="Warranty plans"
        className={`${
          isExpanded ? "grid" : "hidden"
        } nav:grid static nav:absolute nav:top-full nav:-left-3 nav:min-w-[230px] bg-transparent nav:bg-ink border-0 border-l-[3px] border-l-brand-red nav:border nav:border-ink-line nav:border-t-[3px] nav:border-t-brand-red rounded-none nav:rounded-[6px] pl-4 pr-0 pt-1 pb-2 my-1 nav:my-0 nav:p-2 gap-1 shadow-none nav:shadow-[0_14px_32px_rgba(0,0,0,0.26)] opacity-100 visible pointer-events-auto nav:opacity-0 nav:invisible nav:translate-y-[6px] nav:pointer-events-none transition-all duration-200 ease-brand nav:group-hover:opacity-100 nav:group-hover:visible nav:group-hover:translate-y-0 nav:group-hover:pointer-events-auto nav:group-focus-within:opacity-100 nav:group-focus-within:visible nav:group-focus-within:translate-y-0 nav:group-focus-within:pointer-events-auto z-[70]`}
      >
        {warrantyDropdownItems.map((item) => {
          const isItemActive =
            pathname === item.href || pathname === `/${item.key}`;

          return (
            <Link
              key={item.key}
              href={item.href}
              role="menuitem"
              aria-current={isItemActive ? "page" : undefined}
              onClick={onSelectLink}
              className={`flex flex-col gap-[2px] py-2 px-2 nav:px-3 nav:py-[10px] rounded-[4px] no-underline transition-colors duration-150 ease-brand hover:bg-hover ${
                isItemActive ? "bg-hover text-ink-text" : ""
              }`}
            >
              <strong className="text-[15px] font-semibold text-ink-text">
                {item.title}
              </strong>
              <span className="text-[12.5px] text-ink-muted">
                {item.subtitle}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
