import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp('Bonjour MOGOBA SHOPPING, je souhaite des informations sur vos produits.')}
      aria-label="Contacter sur WhatsApp"
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 900,
        width: 56, height: 56, borderRadius: '50%',
        background: '#25D366', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <MessageCircle size={26} />
    </button>
  );
}