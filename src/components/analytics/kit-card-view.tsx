"use client";

import { useEffect, useRef } from "react";
import { trackKitEvent } from "@/lib/analytics";
import type { KitStatus } from "@/types/kit";

export function KitCardView({
  slug,
  status,
  children,
}: {
  slug: string;
  status: KitStatus;
  children: React.ReactNode;
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

  return <div ref={ref}>{children}</div>;
}
