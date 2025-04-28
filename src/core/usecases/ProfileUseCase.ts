import { Subscription } from "../entities/Subscription";
import { BillingGateway } from "../../adapters/gateways/BillingGateway";

interface ProfileUseCaseInterface {
  getProfile(): Promise<any>;
  updateProfile(data: any): Promise<any>;
  deleteProfile(): Promise<void>;
}

export class ProfileUseCase implements ProfileUseCaseInterface {
  constructor() {
    // Initialize dependencies
  }

  async getProfile() {
    // Implementation
    return {};
  }

  async updateProfile(data: any) {
    // Implementation using the data parameter
    const updatedProfile = { ...data, lastUpdated: new Date() };
    return updatedProfile;
  }

  async deleteProfile() {
    // Implementation
  }
}

export class BillingUseCase {
  private billingGateway: BillingGateway;

  constructor(billingGateway: BillingGateway) {
    this.billingGateway = billingGateway;
  }

  async fetchSubscription(userId: string): Promise<Subscription> {
    return await this.billingGateway.fetchSubscription(userId);
  }

  async upgradePlan(userId: string, newPlan: 'basic' | 'pro' | 'enterprise'): Promise<Subscription> {
    return await this.billingGateway.upgradePlan(userId, newPlan);
  }
}
