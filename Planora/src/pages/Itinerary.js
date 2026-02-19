import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { C } from '../styles/theme';
import { DESTINATIONS } from '../data/destinations';

export default function Itinerary({ user, onRequireAuth, onSave, showNotif }) {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const dest = state?.dest || DESTINATIONS.find(d => d.id === parseInt(id));
  const days = state?.days || 5;
  const people = state?.people || 2;

  if (!dest) return <div style={{ padding:80, textAlign:'center', color:C.mid }}>Destination not found.</div>;

  const itinerary = dest.itinerary
    ? dest.itinerary.slice(0, Math.min(days, dest.itinerary.length))
    : Array.from({ length: Math.min(days, 3) }, (_, i) => ({
        day: i + 1, title: 'Day ' + (i+1) + ' - Explore ' + dest.name,
        items: dest.activities,
      }));

  const handleSave = () => {
    if (!user) { onRequireAuth(); return; }
    onSave({ ...dest, days, people, savedAt: new Date().toLocaleDateString() });
    showNotif('Trip saved to your profile!');
  };

  return (
    <div style={{ background:C.bg, minHeight:'calc(100vh - 66px)', padding:'60px 24px 80px' }}>
      <div style={{ maxWidth:800, margin:'0 auto' }} className="fu">
        <button className="btn-out" style={{ marginBottom:28 }} onClick={() => navigate('/destination/'+dest.id)}>
          Back to {dest.name}
        </button>

        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:36, flexWrap:'wrap', gap:14 }}>
          <div>
            <span className="badge" style={{ marginBottom:10, display:'inline-block' }}>AI Generated</span>
            <h2 className="pacifico" style={{ fontSize:42, color:C.ocean }}>Your Itinerary</h2>
            <div className="wline" />
            <p style={{ color:C.mid, marginTop:8, fontWeight:600 }}>
              {dest.name} · {days} Days · {people} {people === 1 ? 'Traveler' : 'Travelers'}
            </p>
          </div>
          <div style={{ display:'flex', gap:10 }}>
            <button className="btn-out" onClick={handleSave}>🤍 Save Trip</button>
            <button className="btn-main" onClick={() => showNotif('Itinerary downloaded! PDF ready.')}>
              Download PDF
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:40 }} className="fourcol">
          {[['📅', days+'d', 'Duration'], ['👥', people, 'Travelers'], ['💰', dest.cost, 'Est. Cost'], ['⭐', dest.rating, 'Rating']].map(([icon,val,label]) => (
            <div key={label} className="statbox">
              <div style={{ fontSize:22, marginBottom:5 }}>{icon}</div>
              <div style={{ fontSize:16, fontWeight:900, color:C.ocean }}>{val}</div>
              <div style={{ fontSize:10, color:C.mid, letterSpacing:1, textTransform:'uppercase', marginTop:2, fontWeight:700 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Day-by-day */}
        <div style={{ background:'#fff', borderRadius:24, padding:'36px 30px', boxShadow:'0 4px 24px rgba(0,119,182,0.09)', marginBottom:28 }}>
          {itinerary.map((day, idx) => (
            <div key={idx} className="daycrd fu" style={{ animationDelay: idx*0.15+'s' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
                <span style={{
                  background:'linear-gradient(135deg,#0077b6,#00b4d8)',
                  color:'#fff', width:34, height:34, borderRadius:'50%',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  fontSize:14, fontWeight:900, flexShrink:0,
                }}>
                  {day.day}
                </span>
                <h3 style={{ fontSize:20, color:C.deep, fontWeight:800 }}>{day.title}</h3>
              </div>
              {day.items.map((item, i) => (
                <div key={i} className="itrow">
                  <span style={{ color:C.wave, fontSize:14, marginTop:1 }}>🌊</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Booking */}
        <div style={{ background:'linear-gradient(135deg,#caf0f8,#90e0ef)', borderRadius:24, padding:32 }}>
          <h3 className="pacifico" style={{ fontSize:26, marginBottom:20, color:C.deep }}>
            Ready to Book?
          </h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:12 }}>
            {['✈️ Flights', '🏨 Hotels', '🎯 Activities', '🚕 Transport'].map(b => (
              <button key={b} className="btn-main" style={{ padding:'13px 8px', fontSize:13 }}
                onClick={() => showNotif('Opening ' + b + ' on MakeMyTrip...')}>
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
