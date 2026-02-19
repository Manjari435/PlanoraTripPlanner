import React from 'react';
import { C } from '../styles/theme';

export default function Notification({ notif }) {
  if (!notif) return null;
  const isErr = notif.type === 'error';
  return (
    <div className="sr" style={{
      position: 'fixed', top: 78, right: 22, zIndex: 2000,
      padding: '13px 22px', borderRadius: 14,
      fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700,
      boxShadow: '0 6px 22px rgba(0,0,0,0.14)',
      background: isErr ? '#fff0f0' : '#f0faff',
      border: '2px solid ' + (isErr ? '#e76f51' : '#00b4d8'),
      color: isErr ? '#c0392b' : '#023e8a',
    }}>
      {notif.msg}
    </div>
  );
}
