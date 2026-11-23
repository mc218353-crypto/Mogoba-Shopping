import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import { openWhatsApp } from '../lib/whatsapp';

export default function Cart() {
  const { items, remove, updateQty, total } = useCart();

  if (items.length === 0) return (
    <div className="container">
      <div className="empty-state">
        <h2>Votre panier est vide</h2>
        <p>Découvrez nos collections et ajoutez vos articles favoris.</p>
        <Link to="/boutique" className="btn btn-dark">Continuer mes achats</Link>
      </div>
    </div>
  );

  return (
    <div className="container cart-layout">
      <div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400, marginBottom: 24 }}>Panier</h1>
        {items.map((it, i) => (
          <div className="cart-item" key={i}>
            <img src={it.images[0]} alt={it.name} />
            <div>
              <div style={{ fontWeight: 500, marginBottom: 4 }}>{it.name}</div>
              <div style={{ fontSize: 12, color: 'var(--gray-500)', marginBottom: 12 }}>Taille: {it.size} · Couleur: {it.color}</div>
              <div className="qty-ctrl" style={{ width: 'fit-content' }}>
                <button onClick={() => updateQty(it.id, it.size, it.color, it.qty - 1)}>−</button>
                <span>{it.qty}</span>
                <button onClick={() => updateQty(it.id, it.size, it.color, it.qty + 1)}>+</button>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 600, marginBottom: 12 }}>{formatPrice((it.salePrice || it.price) * it.qty)}</div>
              <button onClick={() => remove(it.id, it.size, it.color)} style={{ color: 'var(--gray-500)' }}><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, marginBottom: 20 }}>Résumé</h3>
        <div className="summary-row"><span>Sous-total</span><span>{formatPrice(total)}</span></div>
        <div className="summary-row"><span>Livraison</span><span>Calculée à la commande</span></div>
        <div className="summary-row total"><span>Total</span><span>{formatPrice(total)}</span></div>
        <Link to="/commande" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>Passer la commande</Link>
        <button
          className="btn btn-outline"
          style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}
          onClick={() => openWhatsApp('Bonjour, je souhaite commander :\n' + items.map(i => `• ${i.name} (Taille ${i.size}, ${i.color}) x${i.qty} - ${formatPrice((i.salePrice || i.price) * i.qty)}`).join('\n') + `\n\nTotal: ${formatPrice(total)}`)}
        >
          Commander via WhatsApp
        </button>
        <Link to="/boutique" style={{ display: 'block', textAlign: 'center', marginTop: 14, fontSize: 12, textDecoration: 'underline' }}>Continuer mes achats</Link>
      </div>
    </div>
  );
}