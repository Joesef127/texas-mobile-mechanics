"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { useScrolledHeader } from "@/hooks/useScrolledHeader";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { WarrantyDropdown } from "./WarrantyDropdown";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolledHeader(8);
  const { isOpen, closeMenu, toggleMenu, headerRef } = useMobileMenu();

  return (
    <header
      id="top"
      ref={headerRef}
      className={`sticky top-[env(safe-area-inset-top,0px)] z-50 bg-ink text-ink-text border-b border-ink-line transition-shadow duration-250 ease-brand ${
        scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,0.28)]" : ""
      }`}
    >
      <div className="wrap flex items-center justify-between h-[100px] gap-6">
        <Link
          href="/"
          aria-label="Texas Mobile Mechanics, home"
          className="flex items-center no-underline"
        >
          <img
            src="/TMM_logo.png"
            alt={siteConfig.name}
            className="logo-img h-[38px] max-w-[170px] xs:h-[48px] xs:max-w-[220px] w-auto object-contain block"
          />
        </Link>

        <nav
          id="nav"
          aria-label="Main"
          className={`${
            isOpen
              ? "flex absolute top-full left-0 right-0 bg-ink border-b border-ink-line px-6 pt-3 pb-6 flex-col items-stretch gap-0 shadow-[0_12px_28px_rgba(0,0,0,0.22)] max-h-[calc(100vh-72px)] overflow-y-auto"
              : "hidden"
          } nav:static nav:flex nav:flex-row nav:items-center nav:gap-[clamp(14px,1.8vw,26px)] nav:p-0 nav:border-0 nav:shadow-none nav:max-h-none nav:overflow-visible`}
        >
          {mainNavItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <WarrantyDropdown
                  key={item.label}
                  onSelectLink={closeMenu}
                  isMobileMenuOpen={isOpen}
                />
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMenu}
                className={`py-[14px] nav:py-0 text-[18px] nav:text-[15.5px] border-b border-ink-line nav:border-b-0 no-underline whitespace-nowrap transition-colors duration-200 ease-brand hover:text-ink-text ${
                  isActive
                    ? "text-ink-text font-semibold"
                    : "text-ink-muted font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={siteConfig.phoneHref}
            onClick={closeMenu}
            className="inline-flex nav:hidden items-center justify-center gap-2 w-full mt-4 px-[26px] py-[15px] rounded-[4px] bg-brand-red text-white font-body font-semibold text-[17px] leading-none no-underline hover:bg-brand-redDark"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggleButton />

          <a
            href={siteConfig.phoneHref}
            className="hidden nav:inline-flex items-center justify-center px-5 py-[11px] rounded-[4px] bg-brand-red text-white font-body font-semibold text-[16px] leading-none no-underline transition-all duration-200 ease-brand hover:bg-brand-redDark active:scale-[0.97]"
          >
            Call {siteConfig.phoneDisplay}
          </a>

          <button
            type="button"
            id="menu-btn"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="nav"
            className="grid nav:hidden place-items-center w-11 h-11 p-0 rounded-full bg-transparent text-ink-text border border-ink-line cursor-pointer transition-all duration-200 ease-brand hover:bg-hover hover:border-ink-muted active:scale-[0.94]"
          >
            {isOpen ? (
              <svg
                className="w-4 h-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
