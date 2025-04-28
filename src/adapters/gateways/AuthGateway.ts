import { User } from "../../core/entities/User";

export interface AuthGateway {
  signIn(email: string, password: string): Promise<User>;
  signUp(email: string, password: string): Promise<User>;
  signOut(): Promise<void>;
  resetPassword(email: string): Promise<void>;
  updatePassword(newPassword: string): Promise<void>;
}
