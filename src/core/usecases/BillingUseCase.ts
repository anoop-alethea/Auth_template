import { User } from "../entities/User";
import { ProfileGateway } from "../../adapters/gateways/ProfileGateway";

interface BillingUseCaseInterface {
  getSubscription(): Promise<any>;
  updateSubscription(data: any): Promise<any>;
  cancelSubscription(): Promise<void>;
}

export class BillingUseCase implements BillingUseCaseInterface {
  constructor() {
    // Initialize dependencies
  }

  async getSubscription() {
    // Implementation
    return {};
  }

  async updateSubscription(data: any) {
    // Implementation using the data parameter
    const updatedSubscription = { ...data, updatedAt: new Date() };
    return updatedSubscription;
  }

  async cancelSubscription() {
    // Implementation
  }
}

export class ProfileUseCase {
  private profileGateway: ProfileGateway;

  constructor(profileGateway: ProfileGateway) {
    this.profileGateway = profileGateway;
  }

  async fetchProfile(userId: string): Promise<User> {
    return await this.profileGateway.fetchProfile(userId);
  }

  async updateProfile(user: User): Promise<User> {
    return await this.profileGateway.updateProfile(user);
  }
}
