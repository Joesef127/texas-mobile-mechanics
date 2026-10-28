"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

interface StickyCallBarProps {
  /** Id of an element at the end of the hero. The bar shows once it scrolls past. */
  sentinelId: string;
}

export function StickyCallBar({ sentinelId }: StickyCallBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(sentinelId);
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [sentinelId]);

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-ink-line bg-ink px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-out motion-reduce:transition-none [&>a]:w-full [&>a]:justify-center ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button href={siteConfig.phoneHref} variant="red">
        Call or Text {siteConfig.phoneDisplay}
      </Button>
    </div>
  );
}