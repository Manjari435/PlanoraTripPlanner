import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C } from '../styles/theme';
import { DESTINATIONS } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

export default function Explore() {
  const navigate = useNavigate();
  return (
    <div style={{ background:C.bg, minHeight:'calc(100vh - 66px)', padding:'60px 24px 80px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }} className="fu">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:44, flexWrap:'wrap', gap:14 }}>
          <div>
            <h2 className="pacifico" style={{ fontSize:44, color:C.ocean }}>Explore Destinations</h2>
            <div className="wline" />
            <p style={{ color:C.mid, marginTop:8, fontWeight:600 }}>{DESTINATIONS.length} amazing destinations waiting for you</p>
          </div>
          <button className="btn-main" onClick={() => navigate('/plan')}>Plan a Custom Trip</button>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:22 }}>
          {DESTINATIONS.map(dest => <DestinationCard key={dest.id} dest={dest} />)}
        </div>
      </div>
    </div>
  );
}
