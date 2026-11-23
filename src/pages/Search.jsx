import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const [input, setInput] = useState(q);

  const results = useMemo(() => {
    const term = q.toLowerCase().trim();
    if (!term) return [];
    return products.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) || p.category.includes(term));
  }, [q]);

  const submit = (e) => {
    e.preventDefault();
    setParams({ q: input });
  };

  return (
    <div className="container" style={{ padding: '40px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400, marginBottom: 24 }}>Recherche</h1>
      <form className="search-bar" onSubmit={submit}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Rechercher un produit..." />
        <button type="submit" className="btn btn-dark">Rechercher</button>
      </form>
      {q && <p style={{ fontSize: 13, color: 'var(--gray-500)', marginBottom: 24 }}>{results.length} résultat(s) pour "{q}"</p>}
      {results.length > 0 && (
        <div className="product-grid">{results.map(p => <ProductCard key={p.id} product={p} />)}</div>
      )}
      {q && results.length === 0 && (
        <div className="empty-state"><h2>Aucun résultat</h2><p>Essayez un autre terme.</p></div>
      )}
    </div>
  );
}