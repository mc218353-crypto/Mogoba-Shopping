import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function Contact() {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const submit = (e) => {
    e.preventDefault();
    toast('Message envoyé. Nous vous répondrons rapidement.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };
  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: 720 }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 400, marginBottom: 12 }}>Contact & Service client</h1>
      <p style={{ color: 'var(--gray-700)', marginBottom: 32 }}>Une question ? Écrivez-nous, notre équipe vous répond sous 24h.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40 }}>
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Téléphone</h3>
          <p style={{ color: 'var(--gray-700)', fontSize: 14 }}>+223 83 44 66 01</p>
          <a href="https://wa.me/22383446601" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 8, fontSize: 13, textDecoration: 'underline' }}>Écrire sur WhatsApp</a>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Email</h3>
          <p style={{ color: 'var(--gray-700)', fontSize: 14 }}>contact@mogobashopping.com</p>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Adresse</h3>
          <p style={{ color: 'var(--gray-700)', fontSize: 14 }}>Bamako, Mali</p>
        </div>
        <form onSubmit={submit}>
          <div className="form-group"><label>Nom</label><input className="form-input" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
          <div className="form-group"><label>Email</label><input className="form-input" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
          <div className="form-group"><label>Sujet</label><input className="form-input" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} /></div>
          <div className="form-group"><label>Message</label><textarea className="form-input" rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></div>
          <button type="submit" className="btn btn-dark">Envoyer</button>
        </form>
      </div>
    </div>
  );
}