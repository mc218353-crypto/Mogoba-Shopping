import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container empty-state" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2>Page introuvable</h2>
      <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn btn-dark" style={{ alignSelf: 'center' }}>Retour à l'accueil</Link>
    </div>
  );
}