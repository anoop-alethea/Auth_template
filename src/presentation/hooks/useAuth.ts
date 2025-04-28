import { useAuthContext } from "../context/AuthContext";
import { supabase } from "../../infrastructure/db/supabaseClient";
import { useState } from "react";

export const useAuth = () => {
  const context = useAuthContext();
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    return { data, error };
  };

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);
    return { data, error };
  };

  const signOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    return { error };
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);
    return { error };
  };

  const updatePassword = async (newPassword: string) => {
    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    setLoading(false);
    return { error };
  };

  const signInWithProvider = async (provider: "google" | "github") => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) throw error;
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    ...context,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    signInWithProvider, // Add this to the returned object
  };
};
