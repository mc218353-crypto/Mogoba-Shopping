import React, { createContext, useContext, useState, useEffect } from 'react';

const FavContext = createContext(null);
export function FavoritesProvider({ children }) {
  const [ids, setIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mogoba_fav') || '[]'); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem('mogoba_fav', JSON.stringify(ids)); }, [ids]);
  const toggle = (id) => setIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const isFav = (id) => ids.includes(id);
  return <FavContext.Provider value={{ ids, toggle, isFav }}>{children}</FavContext.Provider>;
}
export const useFavorites = () => useContext(FavContext);