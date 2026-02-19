import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { C } from '../styles/theme';
import { DESTINATIONS, INTERESTS } from '../data/destinations';
import LoadingOverlay from '../components/LoadingOverlay';

export default function Plan() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ destination:'', budget:'Medium', days:5, people:2, interests:[] });

  const toggleInterest = (i) => {
    setForm(p => ({
      ...p,
      interests: p.interests.includes(i) ? p.interests.filter(x => x !== i) : [...p.interests, i],
    }));
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const map = { Low:['Low'], Medium:['Low','Medium'], High:['Low','Medium','High'] };
      const filtered = DESTINATIONS.filter(d => map[form.budget].includes(d.budget));
      const results = filtered.length ? filtered : DESTINATIONS.slice(0,3);
      setLoading(false);
      navigate('/results', { state: { results, form } });
    }, 1800);
  };

  return (
    <div style={{ background:'linear-gradient(180deg,#90e0ef 0%,#caf0f8 40%,#eaf6fb 100%)', minHeight:'calc(100vh - 66px)', padding:'60px 24px 80px' }}>
      {loading && <LoadingOverlay message="Finding your perfect trip..." />}
      <div style={{ maxWidth:660, margin:'0 auto' }} className="fu">
        <div style={{ textAlign:'center', marginBottom:40 }}>
          <span style={{ fontSize:52 }}>🏄</span>
          <h2 className="pacifico" style={{ fontSize:42, color:'#fff', marginTop:12, textShadow:'0 3px 14px rgba(0,60,120,0.25)' }}>Plan Your Trip</h2>
          <p style={{ color:'rgba(255,255,255,0.85)', marginTop:8, fontWeight:600 }}>Tell us about your dream beach getaway</p>
        </div>

        <div style={{ background:'#fff', borderRadius:28, padding:'44px 38px', boxShadow:'0 12px 48px rgba(0,119,182,0.14)' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:28 }}>

            {/* Destination */}
            <div>
              <label style={{ fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:C.mid, display:'block', marginBottom:10, fontWeight:800 }}>
                Where to?
              </label>
              <input className="inp" placeholder="e.g. Bali, Goa, Maldives..."
                value={form.destination} onChange={e => setForm(p => ({ ...p, destination: e.target.value }))} />
            </div>

            {/* Budget */}
            <div>
              <label style={{ fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:C.mid, display:'block', marginBottom:10, fontWeight:800 }}>
                Budget
              </label>
              <div style={{ display:'flex', gap:10 }}>
                {[['Low','Budget'],['Medium','Moderate'],['High','Luxury']].map(([b,l]) => (
                  <button key={b} onClick={() => setForm(p => ({ ...p, budget:b }))} style={{
                    flex:1, padding:'13px 6px',
                    border:'2px solid ' + (form.budget === b ? C.ocean : C.sky),
                    background: form.budget === b ? 'linear-gradient(135deg,#caf0f8,#90e0ef)' : '#f0faff',
                    color: form.budget === b ? C.deep : C.mid,
                    borderRadius:12, cursor:'pointer',
                    fontFamily:"'Nunito',sans-serif", fontSize:12, fontWeight:800, transition:'all 0.3s',
                  }}>
                    {b === 'Low' ? '🤙' : b === 'Medium' ? '💳' : '💎'} {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:22 }} className="twocol">
              <div>
                <label style={{ fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:C.mid, display:'block', marginBottom:10, fontWeight:800 }}>
                  Days: {form.days}
                </label>
                <input type="range" min={3} max={14} value={form.days}
                  onChange={e => setForm(p => ({ ...p, days:+e.target.value }))} />
              </div>
              <div>
                <label style={{ fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:C.mid, display:'block', marginBottom:10, fontWeight:800 }}>
                  Travelers: {form.people}
                </label>
                <input type="range" min={1} max={10} value={form.people}
                  onChange={e => setForm(p => ({ ...p, people:+e.target.value }))} />
              </div>
            </div>

            {/* Interests */}
            <div>
              <label style={{ fontSize:11, letterSpacing:1.5, textTransform:'uppercase', color:C.mid, display:'block', marginBottom:13, fontWeight:800 }}>
                Your Interests
              </label>
              <div style={{ display:'flex', flexWrap:'wrap', gap:9 }}>
                {INTERESTS.map(i => (
                  <button key={i} className={'chip' + (form.interests.includes(i) ? ' on' : '')}
                    onClick={() => toggleInterest(i)}>{i}</button>
                ))}
              </div>
            </div>

            <button className="btn-main" onClick={handleSearch} style={{ padding:'16px', fontSize:15 }}>
              🌊 Find My Perfect Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
