import { Subscription } from "../../core/entities/Subscription";

export interface BillingGateway {
  fetchSubscription(userId: string): Promise<Subscription>;
  upgradePlan(userId: string, newPlan: 'basic' | 'pro' | 'enterprise'): Promise<Subscription>;
}
