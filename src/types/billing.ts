export type SubscriptionStatus = "active" | "trialing" | "past_due" | "canceled";

export type PlanName = "basic" | "pro" | "enterprise";

export interface SubscriptionDetails {
  id: string;
  userId: string;
  plan: PlanName;
  status: SubscriptionStatus;
  currentPeriodEnd: Date;
}
