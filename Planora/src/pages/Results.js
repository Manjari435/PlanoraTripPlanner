import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { C } from '../styles/theme';
import { DESTINATIONS } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

export default function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const results = state?.results || DESTINATIONS;

  return (
    <div style={{ background:C.bg, minHeight:'calc(100vh - 66px)', padding:'60px 24px 80px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }} className="fu">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:44, flexWrap:'wrap', gap:14 }}>
          <div>
            <h2 className="pacifico" style={{ fontSize:44, color:C.ocean }}>Recommended for You</h2>
            <div className="wline" />
            <p style={{ color:C.mid, marginTop:8, fontWeight:600 }}>{results.length} destinations matched your preferences</p>
          </div>
          <button className="btn-out" onClick={() => navigate('/plan')}>← Refine Search</button>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:22 }}>
          {results.map(dest => <DestinationCard key={dest.id} dest={dest} />)}
        </div>
      </div>
    </div>
  );
}
