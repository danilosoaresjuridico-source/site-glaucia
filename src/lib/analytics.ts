export type KitAnalyticsEvent =
  | "kit_card_view"
  | "kit_page_view"
  | "kit_checkout_click";

export interface KitAnalyticsPayload {
  slug: string;
  status?: "ativo" | "em_breve";
}

/**
 * Analytics is intentionally disabled in phase 1 because the Vercel plan could
 * not be confirmed. This adapter is the only integration point for a future
 * provider and must never receive personal, contact, or clinical data.
 */
export function trackKitEvent(
  event: KitAnalyticsEvent,
  payload: KitAnalyticsPayload,
): void {
  void event;
  void payload;
  // Safe no-op by design.
}
