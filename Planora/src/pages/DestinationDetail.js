import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { C } from '../styles/theme';
import { DESTINATIONS } from '../data/destinations';
import LoadingOverlay from '../components/LoadingOverlay';

export default function DestinationDetail({ user, onRequireAuth, savedTrips, onSave, showNotif }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(5);
  const [people, setPeople] = useState(2);

  const dest = DESTINATIONS.find(d => d.id === parseInt(id));
  if (!dest) return <div style={{ padding:80, textAlign:'center', color:C.mid }}>Destination not found.</div>;

  const isSaved = savedTrips.some(t => t.id === dest.id);

  const handleGenerateItinerary = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/itinerary/' + dest.id, { state: { dest, days, people } });
    }, 1400);
  };

  const handleSave = () => {
    if (!user) { onRequireAuth(); return; }
    onSave({ ...dest, days, people, savedAt: new Date().toLocaleDateString() });
    showNotif(isSaved ? 'Already saved!' : 'Trip saved to your profile!');
  };

  return (
    <div style={{ background:C.bg, minHeight:'calc(100vh - 66px)', padding:'60px 24px 80px' }}>
      {loading && <LoadingOverlay message="Building your itinerary..." />}
      <div style={{ maxWidth:960, margin:'0 auto' }} className="fu">
        <button className="btn-out" style={{ marginBottom:28 }} onClick={() => navigate(-1)}>← Back</button>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:44 }} className="twocol">
          {/* Left Column */}
          <div>
            <div style={{
              height:280, borderRadius:24,
              background:'linear-gradient(135deg,#90e0ef,#00b4d8,#0077b6)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:110, marginBottom:22, boxShadow:'0 12px 40px rgba(0,119,182,0.22)',
            }}>
              {dest.img}
            </div>

            {/* Stats */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
              {[['☀️ Weather', dest.weather], ['📅 Your Plan', days+' days'], ['💰 Est. Cost', dest.cost], ['⭐ Rating', dest.rating+'/5']].map(([k,v]) => (
                <div key={k} className="statbox">
                  <div style={{ fontSize:11, letterSpacing:1, color:C.mid, textTransform:'uppercase', marginBottom:5, fontWeight:700 }}>{k}</div>
                  <div style={{ fontSize:15, color:C.ocean, fontWeight:900 }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Days/People sliders */}
            <div style={{ background:'#fff', borderRadius:18, padding:24, marginTop:16, boxShadow:'0 4px 16px rgba(0,119,182,0.08)' }}>
              <div style={{ marginBottom:20 }}>
                <label style={{ fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:C.mid, display:'block', marginBottom:10, fontWeight:800 }}>
                  Days: {days}
                </label>
                <input type="range" min={3} max={14} value={days} onChange={e => setDays(+e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:C.mid, display:'block', marginBottom:10, fontWeight:800 }}>
                  Travelers: {people}
                </label>
                <input type="range" min={1} max={10} value={people} onChange={e => setPeople(+e.target.value)} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <span className="badge" style={{ marginBottom:12, display:'inline-block' }}>{dest.tag}</span>
            <h1 className="pacifico" style={{ fontSize:38, marginBottom:8, color:C.deep, lineHeight:1.25 }}>{dest.name}</h1>
            <div className="wline" />
            <p style={{ color:C.mid, marginTop:16, marginBottom:26, lineHeight:1.9, fontSize:15 }}>{dest.description}</p>

            {/* Activities */}
            <h3 style={{ fontSize:16, marginBottom:12, color:C.deep, fontWeight:800 }}>🎯 Top Activities</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:24 }}>
              {dest.activities.map(a => (
                <div key={a} style={{ display:'flex', alignItems:'center', gap:10, fontSize:14, color:C.mid, padding:'10px 14px', background:'#f0faff', borderRadius:10, fontWeight:700 }}>
                  <span style={{ color:C.wave }}>🌊</span>{a}
                </div>
              ))}
            </div>

            {/* Hotels */}
            <h3 style={{ fontSize:16, marginBottom:12, color:C.deep, fontWeight:800 }}>🏨 Hotels</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:28 }}>
              {dest.hotels.map(h => (
                <div key={h} style={{ fontSize:14, color:C.mid, padding:'11px 14px', background:'#f0faff', borderRadius:10, display:'flex', justifyContent:'space-between', alignItems:'center', fontWeight:700 }}>
                  <span>🏨 {h}</span>
                  <span style={{ color:C.ocean, fontSize:12, cursor:'pointer', fontWeight:800 }}
                    onClick={() => showNotif('Redirecting to book ' + h)}>
                    Book →
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display:'flex', gap:12 }}>
              <button className="btn-main" style={{ flex:1 }} onClick={handleGenerateItinerary}>
                🗺️ Generate Itinerary
              </button>
              <button className="btn-out" onClick={handleSave}>
                {isSaved ? '💙 Saved' : '🤍 Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
