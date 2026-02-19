import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C } from '../styles/theme';

export default function DestinationCard({ dest }) {
  const navigate = useNavigate();
  return (
    <div className="card" style={{ cursor: 'pointer' }}
      onClick={() => navigate('/destination/' + dest.id)}>
      <div style={{
        height: 165,
        background: 'linear-gradient(135deg, #90e0ef, #caf0f8 50%, #00b4d8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 72, position: 'relative',
      }}>
        {dest.img}
        <span className="badge" style={{ position: 'absolute', top: 12, right: 12 }}>
          {dest.budget}
        </span>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 5 }}>
          <h3 style={{ fontSize: 19, color: C.deep, fontWeight: 800, lineHeight: 1.3 }}>{dest.name}</h3>
          <span style={{ color: C.coral, fontWeight: 800, fontSize: 13, flexShrink: 0, marginLeft: 8 }}>
            {dest.rating}
          </span>
        </div>
        <div style={{ fontSize: 11, color: C.mid, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>
          {dest.tag}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 20, color: C.ocean, fontWeight: 900 }}>{dest.cost}</div>
            <div style={{ fontSize: 11, color: C.mid }}>est. per person</div>
          </div>
          <div style={{ fontSize: 13, color: C.mid, textAlign: 'right' }}>
            {dest.weather}<br />{dest.days} days
          </div>
        </div>
        <button
          className="btn-main"
          style={{ width: '100%', padding: '12px' }}
          onClick={e => { e.stopPropagation(); navigate('/destination/' + dest.id); }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
