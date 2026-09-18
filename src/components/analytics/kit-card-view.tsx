"use client";

import { useEffect, useRef } from "react";
import { trackKitEvent } from "@/lib/analytics";
import type { KitStatus } from "@/types/kit";

export function KitCardView({
  slug,
  status,
  children,
  className,
}: {
  slug: string;
  status: KitStatus;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          trackKitEvent("kit_card_view", { slug, status });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [slug, status]);

  return <div ref={ref} className={className} data-kit-card-view>{children}</div>;
}
