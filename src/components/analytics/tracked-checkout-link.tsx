"use client";

import { trackKitEvent } from "@/lib/analytics";

export function TrackedCheckoutLink({
  slug,
  href,
  price,
}: {
  slug: string;
  href: string;
  price: number;
}) {
  return (
    <a
      className="button button-primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackKitEvent("kit_checkout_click", { slug })}
    >
      Quero este kit · R$ {price}
    </a>
  );
}
