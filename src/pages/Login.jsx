import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Login() {
  const { signIn, signUp } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [err, setErr] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      if (mode === 'login') await signIn(email, password);
      else await signUp(email, password, name);
      toast(mode === 'login' ? 'Connexion réussie' : 'Compte créé');
      navigate('/compte');
    } catch (e) { setErr(e.message || 'Erreur'); }
  };

  return (
    <div className="container">
      <div className="auth-card">
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, fontWeight: 400, marginBottom: 8, textAlign: 'center' }}>
          {mode === 'login' ? 'Connexion' : 'Inscription'}
        </h1>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--gray-500)', marginBottom: 28 }}>
          {mode === 'login' ? 'Bienvenue chez Mogoba' : 'Créez votre compte'}
        </p>
        <form onSubmit={submit}>
          {mode === 'signup' && (
            <div className="form-group">
              <label>Nom</label>
              <input className="form-input" required value={name} onChange={e => setName(e.target.value)} />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input className="form-input" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input className="form-input" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {err && <p style={{ color: 'var(--danger)', fontSize: 13, marginBottom: 12 }}>{err}</p>}
          <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
            {mode === 'login' ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13 }}>
          {mode === 'login' ? "Pas de compte ?" : 'Déjà un compte ?'}{' '}
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{ textDecoration: 'underline', fontWeight: 600 }}>
            {mode === 'login' ? "S'inscrire" : 'Se connecter'}
          </button>
        </p>
      </div>
    </div>
  );
}