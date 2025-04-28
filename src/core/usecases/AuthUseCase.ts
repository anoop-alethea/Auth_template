import { User } from "../entities/User";
import { AuthGateway } from "../../adapters/gateways/AuthGateway";

export class AuthUseCase {
  private authGateway: AuthGateway;

  constructor(authGateway: AuthGateway) {
    this.authGateway = authGateway;
  }

  async login(email: string, password: string): Promise<User> {
    return await this.authGateway.signIn(email, password);
  }

  async signup(email: string, password: string): Promise<User> {
    return await this.authGateway.signUp(email, password);
  }

  async logout(): Promise<void> {
    return await this.authGateway.signOut();
  }

  async resetPassword(email: string): Promise<void> {
    return await this.authGateway.resetPassword(email);
  }

  async updatePassword(newPassword: string): Promise<void> {
    return await this.authGateway.updatePassword(newPassword);
  }
}
