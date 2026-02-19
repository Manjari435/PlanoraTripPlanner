import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C } from '../styles/theme';

export default function SavedTrips({ savedTrips, onRemove }) {
  const navigate = useNavigate();
  return (
    <div style={{ background:C.bg, minHeight:'calc(100vh - 66px)', padding:'60px 24px 80px' }}>
      <div style={{ maxWidth:960, margin:'0 auto' }} className="fu">
        <h2 className="pacifico" style={{ fontSize:44, color:C.ocean }}>My Saved Trips</h2>
        <div className="wline" />

        {savedTrips.length === 0 ? (
          <div style={{ textAlign:'center', padding:'80px 0' }}>
            <div style={{ fontSize:64, marginBottom:18 }}>🗺️</div>
            <p style={{ color:C.mid, fontSize:16, fontWeight:600 }}>No saved trips yet. Start exploring!</p>
            <button className="btn-main" style={{ marginTop:24 }} onClick={() => navigate('/explore')}>
              Explore Destinations
            </button>
          </div>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))', gap:22, marginTop:36 }}>
            {savedTrips.map((trip, idx) => (
              <div key={idx} className="card" style={{ padding:26 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
                  <span style={{ fontSize:44 }}>{trip.img}</span>
                  <button onClick={() => onRemove(trip.id)} style={{ background:'none', border:'none', cursor:'pointer', color:'#aaa', fontSize:18 }}>✕</button>
                </div>
                <h3 style={{ fontSize:20, marginBottom:5, color:C.deep, fontWeight:800 }}>{trip.name}</h3>
                <div style={{ fontSize:12, color:C.mid, marginBottom:12, fontWeight:600 }}>Saved on {trip.savedAt}</div>
                <div style={{ display:'flex', gap:8, marginBottom:16 }}>
                  <span className="badge">{trip.days} days</span>
                  <span className="badge">{trip.budget}</span>
                </div>
                <div style={{ display:'flex', gap:8 }}>
                  <button className="btn-main" style={{ flex:1, padding:'10px 8px', fontSize:13 }}
                    onClick={() => navigate('/destination/'+trip.id)}>
                    View Details
                  </button>
                  <button className="btn-out" style={{ padding:'10px 8px', fontSize:13 }}
                    onClick={() => navigate('/itinerary/'+trip.id, { state:{ dest:trip, days:trip.days, people:trip.people||2 } })}>
                    Itinerary
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
