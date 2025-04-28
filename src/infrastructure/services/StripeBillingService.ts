//  Note: Stripe operations are via your server API endpoints (/api/billing/*), not directly client-side, for security reasons.
import { BillingGateway } from "../../adapters/gateways/BillingGateway";
import { Subscription } from "../../core/entities/Subscription";

// Stripe client is usually server-side. On frontend we call APIs.
export class StripeBillingService implements BillingGateway {
  async fetchSubscription(userId: string): Promise<Subscription> {
    const response = await fetch(`/api/billing/subscription?userId=${userId}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch subscription");
    }

    return new Subscription({
      id: data.id,
      userId: data.userId,
      status: data.status,
      plan: data.plan,
      currentPeriodEnd: new Date(data.currentPeriodEnd),
    });
  }

  async upgradePlan(userId: string, newPlan: 'basic' | 'pro' | 'enterprise'): Promise<Subscription> {
    const response = await fetch(`/api/billing/upgrade`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, newPlan }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to upgrade plan");
    }

    return new Subscription({
      id: data.id,
      userId: data.userId,
      status: data.status,
      plan: data.plan,
      currentPeriodEnd: new Date(data.currentPeriodEnd),
    });
  }
}
