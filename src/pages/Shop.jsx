import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Shop() {
  const location = useLocation();
  const path = location.pathname;

  let title = 'Boutique';
  let baseFilter = () => true;
  if (path.includes('/femme')) { title = 'Collection Femme'; baseFilter = p => p.category === 'women'; }
  else if (path.includes('/homme')) { title = 'Collection Homme'; baseFilter = p => p.category === 'men'; }
  else if (path.includes('/enfant')) { title = 'Collection Enfant'; baseFilter = p => p.category === 'kids'; }
  else if (path.includes('/accessoires')) { title = 'Accessoires'; baseFilter = p => p.category === 'accessories'; }
  else if (path.includes('/nouveautes')) { title = 'Nouveautés'; baseFilter = p => p.isNew; }

  const [sort, setSort] = useState('new');

  const filtered = useMemo(() => {
    let list = products.filter(baseFilter);
    if (sort === 'price-asc') list = [...list].sort((a,b) => (a.salePrice||a.price) - (b.salePrice||b.price));
    if (sort === 'price-desc') list = [...list].sort((a,b) => (b.salePrice||b.price) - (a.salePrice||a.price));
    if (sort === 'new') list = [...list].sort((a,b) => (b.isNew?1:0) - (a.isNew?1:0));
    return list;
  }, [baseFilter, sort]);

  return (
    <>
      <div className="page-hero">
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80&auto=format&fit=crop" alt={title} />
        <div className="content"><h1>{title}</h1><p>{filtered.length} articles</p></div>
      </div>
      <div className="container" style={{ padding: '40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <span style={{ fontSize: 13, color: 'var(--gray-500)' }}>{filtered.length} articles</span>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{ padding: '8px 12px', border: '1px solid var(--gray-300)', fontSize: 12 }}>
            <option value="new">Nouveautés</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
          </select>
        </div>
        {filtered.length === 0 ? (
          <div className="empty-state"><h2>Aucun produit</h2></div>
        ) : (
          <div className="product-grid">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </>
  );
}