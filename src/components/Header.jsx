import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export default function Header() {
  const { count } = useCart();
  const { ids } = useFavorites();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { to: '/collection/femme', label: 'FEMME' },
    { to: '/collection/homme', label: 'HOMME' },
    { to: '/collection/enfant', label: 'ENFANT' },
    { to: '/accessoires', label: 'ACCESSOIRES' },
    { to: '/nouveautes', label: 'NOUVEAUTÉS' },
  ];

  return (
    <>
      <div className="announcement">
        Livraison gratuite à Bamako dès 50 000 FCFA · Nouvelle collection disponible
      </div>
      <header className="site-header">
      <div className="container header-inner">
        <button className="icon-btn mobile-menu-btn" onClick={() => setOpen(true)} aria-label="Menu">
          <Menu size={22} />
        </button>
        <Link to="/" className="logo">MOGOBA <span>SHOPPING</span></Link>
        <nav className="main-nav">
          {nav.map(n => (
            <Link key={n.to} to={n.to} className={location.pathname === n.to ? 'active' : ''}>{n.label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link to="/recherche" className="icon-btn" aria-label="Recherche"><Search size={20} /></Link>
          <Link to="/compte" className="icon-btn" aria-label="Compte"><User size={20} /></Link>
          <Link to="/favoris" className="icon-btn" aria-label="Favoris">
            <Heart size={20} />
          </Link>
          <Link to="/panier" className="icon-btn" aria-label="Panier">
            <ShoppingBag size={20} />
            {count > 0 && <span className="cart-count">{count}</span>}
          </Link>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="icon-btn" onClick={() => setOpen(false)} style={{ alignSelf: 'flex-end' }}><X size={24} /></button>
        {nav.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>)}
        <Link to="/favoris" onClick={() => setOpen(false)}>FAVORIS</Link>
        <Link to="/panier" onClick={() => setOpen(false)}>PANIER</Link>
        <Link to="/compte" onClick={() => setOpen(false)}>COMPTE</Link>
      </div>
    </header>
    </>
  );
}