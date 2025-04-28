export interface SubscriptionProps {
    id: string;
    userId: string;
    status: 'active' | 'trialing' | 'past_due' | 'canceled';
    plan: 'basic' | 'pro' | 'enterprise';
    currentPeriodEnd: Date;
  }
  
  export class Subscription {
    readonly id: string;
    readonly userId: string;
    readonly status: 'active' | 'trialing' | 'past_due' | 'canceled';
    readonly plan: 'basic' | 'pro' | 'enterprise';
    readonly currentPeriodEnd: Date;
  
    constructor(props: SubscriptionProps) {
      this.id = props.id;
      this.userId = props.userId;
      this.status = props.status;
      this.plan = props.plan;
      this.currentPeriodEnd = props.currentPeriodEnd;
    }
  }
  