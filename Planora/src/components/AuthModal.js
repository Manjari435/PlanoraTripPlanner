import React, { useState } from 'react';
import { C } from '../styles/theme';

export default function AuthModal({ onClose, onSuccess, showNotif }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handle = () => {
    if (mode === 'register' && !form.name.trim())
      return showNotif('Please enter your name', 'error');
    if (!form.email.includes('@'))
      return showNotif('Invalid email address', 'error');
    if (form.password.length < 6)
      return showNotif('Password must be at least 6 characters', 'error');
    onSuccess({ name: form.name || form.email.split('@')[0], email: form.email });
    onClose();
    showNotif('Welcome ' + (mode === 'register' ? form.name : 'back') + '! 🌊');
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(2,62,138,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        className="sr"
        style={{
          background: '#fff', borderRadius: 26, padding: '40px 36px',
          width: 400, maxWidth: '90vw',
          boxShadow: '0 24px 80px rgba(0,119,182,0.28)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ textAlign: 'center', marginBottom: 6 }}>
          <span style={{ fontSize: 44 }}>🌊</span>
        </div>
        <h2 className="pacifico" style={{ fontSize: 28, color: C.ocean, textAlign: 'center', marginBottom: 4 }}>
          {mode === 'login' ? 'Welcome Back!' : 'Join Planora'}
        </h2>
        <div className="wline" style={{ margin: '10px auto 22px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {mode === 'register' && (
            <input className="inp" placeholder="Full Name" value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
          )}
          <input className="inp" placeholder="Email" type="email" value={form.email}
            onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
          <input className="inp" placeholder="Password" type="password" value={form.password}
            onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
            onKeyDown={e => e.key === 'Enter' && handle()} />
          <button className="btn-main" onClick={handle}>
            {mode === 'login' ? 'Dive In' : 'Start Exploring'}
          </button>
          <p style={{ fontSize: 13, color: C.mid, textAlign: 'center' }}>
            {mode === 'login' ? 'New here? ' : 'Have an account? '}
            <span style={{ color: C.ocean, cursor: 'pointer', fontWeight: 800 }}
              onClick={() => setMode(m => m === 'login' ? 'register' : 'login')}>
              {mode === 'login' ? 'Create account' : 'Sign in'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
