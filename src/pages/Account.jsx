import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 400, marginBottom: 16 }}>Profil</h2>
      <p><strong>Nom :</strong> {user?.name || user?.email}</p>
      <p><strong>Email :</strong> {user?.email}</p>
    </div>
  );
}
function Orders() {
  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 400, marginBottom: 16 }}>Mes commandes</h2>
      <p style={{ color: 'var(--gray-500)' }}>Aucune commande pour le moment.</p>
    </div>
  );
}

export default function Account() {
  const { user, signOut } = useAuth();
  if (!user) return <Navigate to="/connexion" replace />;
  return (
    <div className="container account-layout">
      <aside className="account-nav">
        <Link to="/compte" className="active">Profil</Link>
        <Link to="/compte/commandes">Commandes</Link>
        <Link to="/favoris">Favoris</Link>
        <button onClick={signOut} style={{ padding: '12px 0', fontSize: 13, textAlign: 'left', width: '100%', borderTop: '1px solid var(--gray-200)', marginTop: 8 }}>Déconnexion</button>
      </aside>
      <div>
        <Routes>
          <Route index element={<Profile />} />
          <Route path="commandes" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}