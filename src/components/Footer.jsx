import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo" style={{ color: '#fff', marginBottom: 16 }}>MOGOBA <span>SHOPPING</span></div>
            <p>Mode premium accessible. Une sélection raffinée de vêtements, chaussures et accessoires pour femme, homme et enfant.</p>
            <p style={{ marginTop: 12 }}>Bamako, Mali</p>
            <p style={{ marginTop: 8, fontSize: 13 }}>WhatsApp : +223 83 44 66 01</p>
            <div style={{ display: 'flex', gap: 14, marginTop: 16, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#" aria-label="X"><X size={14} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Boutique</h4>
            <Link to="/collection/femme">Femme</Link>
            <Link to="/collection/homme">Homme</Link>
            <Link to="/collection/enfant">Enfant</Link>
            <Link to="/accessoires">Accessoires</Link>
            <Link to="/nouveautes">Nouveautés</Link>
          </div>
          <div className="footer-col">
            <h4>Service client</h4>
            <Link to="/contact">Contact</Link>
            <Link to="/suivi">Suivi de commande</Link>
            <Link to="/compte">Mon compte</Link>
            <a href="#">Livraison & retours</a>
            <a href="#">Guide des tailles</a>
          </div>
          <div className="footer-col">
            <h4>Paiement</h4>
            <p>Orange Money</p>
            <p>Wave</p>
            <p>Paiement à la livraison</p>
            <p style={{ marginTop: 12, fontSize: 12 }}>Livraison à Bamako et dans tout le Mali.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MOGOBA SHOPPING. Tous droits réservés.</span>
          <span>Conditions générales · Politique de confidentialité</span>
        </div>
      </div>
    </footer>
  );
}