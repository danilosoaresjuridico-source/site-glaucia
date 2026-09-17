"use client";

import { useEffect } from "react";
import { trackKitEvent } from "@/lib/analytics";
import type { KitStatus } from "@/types/kit";

export function KitPageView({ slug, status }: { slug: string; status: KitStatus }) {
  useEffect(() => {
    trackKitEvent("kit_page_view", { slug, status });
  }, [slug, status]);

  return null;
}
