import { supabase } from "../db/supabaseClient";
import { AuthGateway } from "../../adapters/gateways/AuthGateway";
import { User } from "../../core/entities/User";

export class SupabaseAuthService implements AuthGateway {
  async signIn(email: string, password: string): Promise<User> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      throw new Error(error?.message ?? "Login failed");
    }

    return new User({
      id: data.user.id,
      email: data.user.email ?? '',
      fullName: data.user.user_metadata?.full_name,
      avatarUrl: data.user.user_metadata?.avatar_url,
      role: data.user.role ?? 'user',
    });
  }

  async signUp(email: string, password: string): Promise<User> {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error || !data.user) {
      throw new Error(error?.message ?? "Signup failed");
    }

    return new User({
      id: data.user.id,
      email: data.user.email ?? '',
      fullName: '',
      avatarUrl: '',
      role: 'user',
    });
  }

  async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  }

  async resetPassword(email: string): Promise<void> {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/update-password',
    });
    if (error) {
      throw new Error(error.message);
    }
  }

  async updatePassword(newPassword: string): Promise<void> {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      throw new Error(error.message);
    }
  }
}
