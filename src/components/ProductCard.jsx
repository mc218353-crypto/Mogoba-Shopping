import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';
import { formatPrice, colorMap } from '../data/products';

export default function ProductCard({ product }) {
  const { add } = useCart();
  const { toggle, isFav } = useFavorites();
  const toast = useToast();
  const fav = isFav(product.id);
  const img = product.images[0];

  const quickAdd = (e) => {
    e.preventDefault();
    add(product, product.sizes[0], product.colors[0], 1);
    toast('Ajouté au panier');
  };

  return (
    <div className="product-card">
      <Link to={`/produit/${product.id}`} className="product-media">
        <img src={img} alt={product.name} loading="lazy" />
        {product.stock < 1 ? (
          <span className="product-badge" style={{ background: 'var(--gray-500)' }}>Épuisé</span>
        ) : (
          <>
            {product.isNew && <span className="product-badge">Nouveau</span>}
            {product.salePrice && <span className="product-badge sale" style={{ left: product.isNew ? 80 : 12 }}>Promo</span>}
          </>
        )}
        <div className="product-actions">
          <button className="action-circle" onClick={(e) => { e.preventDefault(); toggle(product.id); }} aria-label="Favoris">
            <Heart size={16} fill={fav ? 'currentColor' : 'none'} />
          </button>
          <button className="action-circle" onClick={quickAdd} aria-label="Ajouter au panier">
            <ShoppingBag size={16} />
          </button>
        </div>
      </Link>
      <div className="product-name">{product.name}</div>
      <div className="product-price">
        {product.salePrice ? (
          <>
            <span className="sale">{formatPrice(product.salePrice)}</span>
            <span className="old">{formatPrice(product.price)}</span>
          </>
        ) : (
          formatPrice(product.price)
        )}
      </div>
    </div>
  );
}