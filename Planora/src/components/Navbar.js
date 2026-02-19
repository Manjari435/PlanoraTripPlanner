import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { C } from '../styles/theme';

export default function Navbar({ user, onSignOut, onSignIn, savedCount }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navBtn = (label, path) => (
    <button
      key={path}
      onClick={() => navigate(path)}
      style={{
        color: location.pathname === path ? C.ocean : C.mid,
        fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700,
        cursor: 'pointer', padding: '8px 6px', border: 'none',
        background: 'none', transition: 'color 0.3s',
        borderBottom: location.pathname === path ? `2px solid ${C.ocean}` : '2px solid transparent',
      }}
    >
      {label}
    </button>
  );

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      padding: '0 32px', height: 66,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.94)',
      borderBottom: `2px solid ${C.sky}`,
      zIndex: 100, backdropFilter: 'blur(14px)',
      boxShadow: '0 2px 18px rgba(0,119,182,0.07)',
    }}>
      {/* Logo */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        <span style={{ fontSize: 30 }} className="fl">🐚</span>
        <div style={{ lineHeight: 1.1 }}>
          <div className="pacifico" style={{ fontSize: 22, color: C.ocean }}>Planora</div>
          <div style={{ fontSize: 9, color: C.mid, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 800 }}>
            Trip Planner
          </div>
        </div>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {navBtn('🏠 Home', '/')}
        {navBtn('🌍 Explore', '/explore')}
        {navBtn('🔍 Plan', '/plan')}
        {savedCount > 0 && navBtn(`💾 Saved (${savedCount})`, '/saved')}
      </div>

      {/* Auth */}
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: `linear-gradient(135deg, ${C.ocean}, ${C.wave})`,
            color: '#fff', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontWeight: 900, fontSize: 14,
          }}>
            {user.name[0].toUpperCase()}
          </div>
          <span style={{ color: C.ocean, fontWeight: 700, fontSize: 13 }}>{user.name}</span>
          <button
            className="btn-out"
            style={{ padding: '7px 16px', fontSize: 12 }}
            onClick={onSignOut}
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="btn-main" style={{ padding: '10px 22px', fontSize: 13 }} onClick={onSignIn}>
          Sign In 🌊
        </button>
      )}
    </nav>
  );
}
