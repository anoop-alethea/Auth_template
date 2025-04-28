export type UserRole = "user" | "admin";

export interface UserProfile {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
  role?: UserRole;
}
