import { createClient } from '@supabase/supabase-js';

// Access variables using import.meta.env and the VITE_ prefix
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string; // Updated variable name

// Optional: Add checks to ensure variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided as environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);