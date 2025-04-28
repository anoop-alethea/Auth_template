import { User } from "../../core/entities/User";

export interface ProfileGateway {
  fetchProfile(userId: string): Promise<User>;
  updateProfile(user: User): Promise<User>;
}
