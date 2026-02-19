import React from 'react';

export default function WaveDivider({ color = '#fff', flip = false }) {
  return (
    <div style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: 56, display: 'block' }}>
        <path
          d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
