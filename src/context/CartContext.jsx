import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mogoba_cart') || '[]'); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem('mogoba_cart', JSON.stringify(items)); }, [items]);

  const add = (product, size, color, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === product.id && i.size === size && i.color === color);
      if (idx > -1) {
        const next = [...prev];
        next[idx].qty += qty;
        return next;
      }
      return [...prev, { ...product, size, color, qty }];
    });
  };
  const remove = (id, size, color) => setItems(prev => prev.filter(i => !(i.id === id && i.size === size && i.color === color)));
  const updateQty = (id, size, color, qty) => setItems(prev => prev.map(i => (i.id === id && i.size === size && i.color === color) ? { ...i, qty: Math.max(1, qty) } : i));
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * (i.salePrice || i.price), 0);
  return <CartContext.Provider value={{ items, add, remove, updateQty, clear, count, total }}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);