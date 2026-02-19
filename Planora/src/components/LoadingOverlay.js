import React from 'react';
import { C } from '../styles/theme';

export default function LoadingOverlay({ message = 'Surfing the best deals...' }) {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(202,240,248,0.93)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 200, backdropFilter: 'blur(8px)',
    }}>
      <span style={{ fontSize: 68, marginBottom: 22 }} className="fl">🌊</span>
      <div className="pacifico" style={{ fontSize: 26, color: C.ocean, marginBottom: 26 }}>
        {message}
      </div>
      <div>
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </div>
  );
}
