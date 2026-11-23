import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { useToast } from '../context/ToastContext';

const HERO_IMG = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&q=80&auto=format&fit=crop';

export default function Home() {
  const toast = useToast();
  const news = products.filter(p => p.isNew).slice(0, 8);
  const best = products.filter(p => p.isBestSeller).slice(0, 8);

  const handleNewsletter = (e) => {
    e.preventDefault();
    toast('Merci pour votre inscription !');
    e.target.reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <img src={HERO_IMG} alt="Collection Mogoba" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">Nouvelle collection · Automne 2026</div>
          <h1 className="hero-title">L'élégance commence ici</h1>
          <p className="hero-sub">Découvrez les nouvelles collections Mogoba Shopping. Mode premium accessible, pensée pour vous.</p>
          <Link to="/boutique" className="btn btn-primary">Découvrir la collection <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* Collections */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Collections</h2>
            <Link to="/boutique" className="section-link">Tout voir</Link>
          </div>
          <div className="collection-grid">
            {categories.map(c => (
              <Link key={c.key} to={c.key === 'accessories' ? '/accessoires' : `/collection/${c.key === 'women' ? 'femme' : c.key === 'men' ? 'homme' : 'enfant'}`} className="collection-card">
                <img src={c.img} alt={c.label} loading="lazy" />
                <div className="overlay">
                  <p>Nouvelle saison</p>
                  <h3>{c.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nouveautés */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nouveautés</h2>
            <Link to="/nouveautes" className="section-link">Voir tout</Link>
          </div>
          <div className="product-grid">
            {news.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Editorial banner */}
      <section style={{ position: 'relative', height: '60vh', minHeight: 400, overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=1800&q=80&auto=format&fit=crop" alt="Editorial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 16 }}>Sélection de la rédaction</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px,5vw,56px)', fontWeight: 400, marginBottom: 24 }}>L'art de s'habiller</h2>
            <Link to="/boutique" className="btn btn-primary">Explorer</Link>
          </div>
        </div>
      </section>

      {/* Femme */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Femme</h2>
            <Link to="/collection/femme" className="section-link">Voir tout</Link>
          </div>
          <div className="product-grid">
            {products.filter(p => p.category === 'women').slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Homme */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Homme</h2>
            <Link to="/collection/homme" className="section-link">Voir tout</Link>
          </div>
          <div className="product-grid">
            {products.filter(p => p.category === 'men').slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Chaussures et accessoires */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Chaussures & Accessoires</h2>
            <Link to="/accessoires" className="section-link">Voir tout</Link>
          </div>
          <div className="product-grid">
            {products.filter(p => p.category === 'accessories').slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Meilleures ventes */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meilleures ventes</h2>
            <Link to="/boutique" className="section-link">Voir tout</Link>
          </div>
          <div className="product-grid">
            {best.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Promo campaign */}
      <section style={{ position: 'relative', height: '55vh', minHeight: 360, overflow: 'hidden', margin: '40px 0' }}>
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1800&q=80&auto=format&fit=crop" alt="Promo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 16 }}>Offre saisonnière</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px,5vw,56px)', fontWeight: 400, marginBottom: 24 }}>Jusqu'à -30% sur la sélection</h2>
            <Link to="/boutique" className="btn btn-primary">Profiter de l'offre</Link>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, textAlign: 'center' }}>
            {[
              { t: 'Livraison rapide', d: 'Bamako sous 24-48h' },
              { t: 'Paiement sécurisé', d: 'Orange Money, Wave, à la livraison' },
              { t: 'Retours faciles', d: 'Sous 14 jours' },
              { t: 'Service client', d: 'À votre écoute 7j/7' },
            ].map(b => (
              <div key={b.t} style={{ padding: 24, border: '1px solid var(--gray-200)', background: 'var(--white)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 8 }}>{b.t}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-700)' }}>{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <h2>Rejoignez l'univers Mogoba</h2>
          <p>Inscrivez-vous pour recevoir nos nouveautés et offres exclusives.</p>
          <form className="newsletter-form" onSubmit={handleNewsletter}>
            <input type="email" placeholder="Votre adresse email" required />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </section>
    </>
  );
}