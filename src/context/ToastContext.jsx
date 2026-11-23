import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext(null);
export function ToastProvider({ children }) {
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);
  const toast = useCallback((message) => {
    setMsg(message); setShow(true);
    setTimeout(() => setShow(false), 2600);
  }, []);
  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className={`toast ${show ? 'show' : ''}`}>{msg}</div>
    </ToastContext.Provider>
  );
}
export const useToast = () => useContext(ToastContext);