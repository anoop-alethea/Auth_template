import { supabase } from "../db/supabaseClient";
import { ProfileGateway } from "../../adapters/gateways/ProfileGateway";
import { User } from "../../core/entities/User";

export class SupabaseProfileService implements ProfileGateway {
  async fetchProfile(userId: string): Promise<User> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !data) {
      throw new Error(error?.message ?? "Failed to fetch profile");
    }

    return new User({
      id: data.id,
      email: data.email,
      fullName: data.full_name,
      avatarUrl: data.avatar_url,
      role: 'user', // Assume basic user role, customize if needed
    });
  }

  async updateProfile(user: User): Promise<User> {
    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: user.fullName,
        avatar_url: user.avatarUrl,
      })
      .eq('id', user.id);

    if (error) {
      throw new Error(error.message);
    }

    return user;
  }
}
