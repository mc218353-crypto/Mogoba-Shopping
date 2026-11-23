import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../data/products';
import { openWhatsApp } from '../lib/whatsapp';

export default function Checkout() {
  const { items, total, clear } = useCart();
  const { user } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user?.name || user?.email || '', phone: '', address: '', city: 'Bamako', payment: 'orange', note: ''
  });
  const [done, setDone] = useState(false);
  const [orderId] = useState('MG' + Date.now().toString().slice(-8));

  const submit = (e) => {
    e.preventDefault();
    if (items.length === 0) { toast('Panier vide'); return; }
    setDone(true);
    clear();
    toast('Commande confirmée !');
  };

  if (done) return (
    <div className="container">
      <div className="empty-state">
        <h2>Merci pour votre commande !</h2>
        <p>Votre commande <strong>{orderId}</strong> a été enregistrée.</p>
        <p style={{ marginBottom: 24 }}>Vous recevrez une confirmation par téléphone. Paiement {form.payment === 'orange' ? 'Orange Money' : form.payment === 'wave' ? 'Wave' : 'à la livraison'}.</p>
        <button className="btn btn-dark" onClick={() => navigate('/')}>Retour à l'accueil</button>
      </div>
    </div>
  );

  if (items.length === 0) return (
    <div className="container empty-state"><h2>Panier vide</h2><Link to="/boutique" className="btn btn-dark">Boutique</Link></div>
  );

  return (
    <div className="container" style={{ padding: '40px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400, marginBottom: 32 }}>Commande</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40 }}>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Nom complet</label>
            <input className="form-input" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Téléphone (Mali)</label>
            <input className="form-input" required placeholder="+223 7X XX XX XX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Adresse de livraison</label>
            <input className="form-input" required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Ville / Région</label>
            <select className="form-input" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}>
              <option>Bamako</option>
              <option>Koulikoro</option>
              <option>Sikasso</option>
              <option>Segou</option>
              <option>Mopti</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label>Mode de paiement</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { v: 'orange', l: 'Orange Money' },
                { v: 'wave', l: 'Wave' },
                { v: 'cod', l: 'Paiement à la livraison' },
              ].map(o => (
                <label key={o.v} className="filter-option" style={{ padding: 12, border: '1px solid var(--gray-300)', cursor: 'pointer' }}>
                  <input type="radio" name="pay" checked={form.payment === o.v} onChange={() => setForm({ ...form, payment: o.v })} />
                  {o.l}
                </label>
              ))}
            </div>
            <p style={{ fontSize: 11, color: 'var(--gray-500)', marginTop: 8 }}>
              Les paiements mobiles seront connectés à un prestataire compatible avant activation.
            </p>
          </div>
          <div className="form-group">
            <label>Note (optionnel)</label>
            <textarea className="form-input" rows={3} value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
          </div>
          <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>Confirmer la commande</button>
        </form>
        <div className="cart-summary">
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, marginBottom: 20 }}>Votre commande</h3>
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 10 }}>
              <span>{it.name} × {it.qty}</span>
              <span>{formatPrice((it.salePrice || it.price) * it.qty)}</span>
            </div>
          ))}
          <div className="summary-row total"><span>Total</span><span>{formatPrice(total)}</span></div>
          <button
            type="button"
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}
            onClick={() => openWhatsApp('Bonjour, je souhaite passer commande :\n' + items.map(i => `• ${i.name} (Taille ${i.size}, ${i.color}) x${i.qty} - ${formatPrice((i.salePrice || i.price) * i.qty)}`).join('\n') + `\n\nTotal: ${formatPrice(total)}\nNom: ${form.name}\nTél: ${form.phone}\nAdresse: ${form.address}, ${form.city}`)}
          >
            Commander via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}