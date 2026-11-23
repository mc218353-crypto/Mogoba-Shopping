import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from 'lucide-react';
import { products, formatPrice, colorMap } from '../data/products';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/ProductCard';
import { openWhatsApp } from '../lib/whatsapp';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { add } = useCart();
  const { toggle, isFav } = useFavorites();
  const toast = useToast();

  const [imgIdx, setImgIdx] = useState(0);
  const [size, setSize] = useState(product?.sizes[0]);
  const [color, setColor] = useState(product?.colors[0]);
  const [qty, setQty] = useState(1);

  const similar = useMemo(() => product ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4) : [], [product]);

  if (!product) return <div className="container empty-state"><h2>Produit introuvable</h2><Link to="/boutique" className="btn btn-dark">Retour boutique</Link></div>;

  const fav = isFav(product.id);
  const price = product.salePrice || product.price;

  const addToCart = () => {
    add(product, size, color, qty);
    toast('Ajouté au panier');
  };

  return (
    <>
      <div className="container" style={{ padding: '24px 24px 0' }}>
        <Link to="/boutique" style={{ fontSize: 12, color: 'var(--gray-500)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <ChevronLeft size={14} /> Retour
        </Link>
      </div>
      <div className="container pd-layout">
        <div className="pd-gallery">
          <div className="pd-thumbs">
            {product.images.map((im, i) => (
              <div key={i} className={`pd-thumb ${i === imgIdx ? 'active' : ''}`} onClick={() => setImgIdx(i)}>
                <img src={im} alt="" />
              </div>
            ))}
          </div>
          <div className="pd-main">
            <img src={product.images[imgIdx]} alt={product.name} />
          </div>
        </div>
        <div className="pd-info">
          <h1>{product.name}</h1>
          <div className="pd-price">
            {product.salePrice ? (
              <>
                <span className="sale">{formatPrice(product.salePrice)}</span>
                <span className="old">{formatPrice(product.price)}</span>
              </>
            ) : formatPrice(product.price)}
          </div>
          <p className="pd-desc">{product.description}</p>

          <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>Couleur</div>
          <div className="color-list">
            {product.colors.map(c => (
              <button key={c} className={`color-dot ${color === c ? 'active' : ''}`} style={{ background: colorMap[c] }} onClick={() => setColor(c)} title={c} />
            ))}
          </div>

          <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>Taille</div>
          <div className="size-grid">
            {product.sizes.map(s => (
              <button key={s} className={`size-btn ${size === s ? 'active' : ''} ${product.stock < 1 ? 'disabled' : ''}`} onClick={() => setSize(s)}>{s}</button>
            ))}
          </div>

          <div style={{ fontSize: 12, color: product.stock > 5 ? 'var(--success)' : 'var(--danger)', marginBottom: 20 }}>
            {product.stock > 0 ? `En stock (${product.stock} disponibles)` : 'Rupture de stock'}
          </div>

          <div className="qty-row">
            <div className="qty-ctrl">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <button className="btn btn-dark" style={{ flex: 1 }} onClick={addToCart} disabled={product.stock < 1}>
              <ShoppingBag size={16} /> Ajouter au panier
            </button>
            <button className="action-circle" onClick={() => toggle(product.id)} aria-label="Favoris">
              <Heart size={18} fill={fav ? 'currentColor' : 'none'} />
            </button>
          </div>
          <button
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
            onClick={() => openWhatsApp(`Bonjour, je souhaite commander :\n• ${product.name}\n• Taille: ${size}\n• Couleur: ${color}\n• Quantité: ${qty}\n• Prix: ${formatPrice(price * qty)}\nMerci !`)}
          >
            Commander via WhatsApp
          </button>

          <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: 20, fontSize: 13, color: 'var(--gray-700)' }}>
            <p>Livraison à Bamako sous 24-48h. Paiement Orange Money, Wave ou à la livraison.</p>
          </div>
        </div>
      </div>

      {similar.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-header"><h2 className="section-title">Vous aimerez aussi</h2></div>
            <div className="product-grid">
              {similar.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}