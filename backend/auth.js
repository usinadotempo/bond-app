/**
 * Auth module - Supabase integration
 */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function signUp(email, password, role) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { role } // 'parent' or 'child'
    }
  });
  if (error) throw error;
  return data;
}

async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
  localStorage.setItem('user_id', data.user.id);
  return data;
}

export { signUp, signIn };
