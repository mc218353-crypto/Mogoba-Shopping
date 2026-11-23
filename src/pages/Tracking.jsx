import React, { useState } from 'react';

export default function Tracking() {
  const [id, setId] = useState('');
  const [status, setStatus] = useState(null);
  const check = (e) => {
    e.preventDefault();
    if (!id.trim()) return;
    setStatus({ step: 2, label: 'En cours de livraison', eta: '24-48h (Bamako)' });
  };
  const steps = ['Commande confirmée', 'En préparation', 'Expédiée', 'Livrée'];
  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: 640 }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400, marginBottom: 24 }}>Suivi de commande</h1>
      <form onSubmit={check} style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
        <input className="form-input" placeholder="Numéro de commande" value={id} onChange={e => setId(e.target.value)} />
        <button type="submit" className="btn btn-dark">Suivre</button>
      </form>
      {status && (
        <div>
          <p style={{ marginBottom: 20, fontWeight: 600 }}>Statut : {status.label} · ETA {status.eta}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {steps.map((s, i) => (
              <div key={s} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ height: 4, background: i <= status.step ? 'var(--black)' : 'var(--gray-200)', marginBottom: 8 }} />
                <div style={{ fontSize: 11, color: i <= status.step ? 'var(--black)' : 'var(--gray-500)' }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}