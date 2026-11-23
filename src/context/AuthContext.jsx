import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, hasSupabase } from '../lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasSupabase) {
      supabase.auth.getSession().then(({ data }) => { setUser(data.session?.user ?? null); setLoading(false); });
      const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
      return () => sub.subscription.unsubscribe();
    } else {
      try { setUser(JSON.parse(localStorage.getItem('mogoba_user') || 'null')); } catch { setUser(null); }
      setLoading(false);
    }
  }, []);

  const signUp = async (email, password, name) => {
    if (hasSupabase) {
      const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } });
      if (error) throw error;
      return data;
    }
    const u = { id: 'u_' + Date.now(), email, name };
    localStorage.setItem('mogoba_user', JSON.stringify(u));
    setUser(u);
    return u;
  };
  const signIn = async (email, password) => {
    if (hasSupabase) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return data;
    }
    const u = { id: 'u_' + Date.now(), email, name: email.split('@')[0] };
    localStorage.setItem('mogoba_user', JSON.stringify(u));
    setUser(u);
    return u;
  };
  const signOut = async () => {
    if (hasSupabase) await supabase.auth.signOut();
    localStorage.removeItem('mogoba_user');
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, hasSupabase }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);