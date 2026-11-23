import React, { useState } from 'react';
import { products, formatPrice } from '../data/products';

export default function Admin() {
  const [tab, setTab] = useState('products');
  const [items, setItems] = useState(products);
  return (
    <div className="container" style={{ padding: '40px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400, marginBottom: 24 }}>Tableau de bord admin</h1>
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        {['products','orders','categories'].map(t => (
          <button key={t} onClick={() => setTab(t)} className={tab === t ? 'btn btn-dark' : 'btn btn-outline'} style={{ padding: '8px 16px', fontSize: 11 }}>
            {t === 'products' ? 'Produits' : t === 'orders' ? 'Commandes' : 'Catégories'}
          </button>
        ))}
      </div>
      {tab === 'products' && (
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr><th>ID</th><th>Nom</th><th>Catégorie</th><th>Prix</th><th>Stock</th><th>Nouveau</th><th>Promo</th></tr>
            </thead>
            <tbody>
              {items.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{formatPrice(p.salePrice || p.price)}</td>
                  <td>{p.stock}</td>
                  <td>{p.isNew ? 'Oui' : '—'}</td>
                  <td>{p.salePrice ? 'Oui' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tab === 'orders' && (
        <div className="empty-state" style={{ padding: 40 }}><p>Aucune commande récente (démo).</p></div>
      )}
      {tab === 'categories' && (
        <div style={{ display: 'grid', gap: 12 }}>
          {['Femme','Homme','Enfant','Accessoires'].map(c => <div key={c} style={{ padding: 16, border: '1px solid var(--gray-200)' }}>{c}</div>)}
        </div>
      )}
    </div>
  );
}