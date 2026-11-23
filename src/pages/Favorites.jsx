import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useFavorites } from '../context/FavoritesContext';

export default function Favorites() {
  const { ids } = useFavorites();
  const favProducts = products.filter(p => ids.includes(p.id));
  if (favProducts.length === 0) return (
    <div className="container">
      <div className="empty-state">
        <h2>Aucun favori</h2>
        <p>Ajoutez des articles à vos favoris en cliquant sur le cœur.</p>
        <Link to="/boutique" className="btn btn-dark">Découvrir</Link>
      </div>
    </div>
  );
  return (
    <div className="container" style={{ padding: '40px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400, marginBottom: 32 }}>Favoris</h1>
      <div className="product-grid">
        {favProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}