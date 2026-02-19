import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C } from '../styles/theme';
import WaveDivider from '../components/WaveDivider';

const floaters = [
  ['🌊','8%','12%','0s'], ['🌴','82%','55%','1s'],
  ['☀️','15%','72%','2s'], ['🐠','75%','20%','0.5s'],
  ['🐚','45%','80%','1.5s'],
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero */}
      <div style={{
        minHeight: '91vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(160deg, #0077b6 0%, #00b4d8 45%, #90e0ef 80%, #caf0f8 100%)',
      }}>
        <div style={{ position:'absolute', width:520, height:520, borderRadius:'50%', background:'rgba(255,255,255,0.1)', top:-130, right:-80 }} />
        <div style={{ position:'absolute', width:350, height:350, borderRadius:'50%', background:'rgba(2,62,138,0.18)', bottom:-80, left:-60 }} />

        {floaters.map(([e,l,t,d]) => (
          <span key={e+l} className="fl" style={{ position:'absolute', left:l, top:t, fontSize:36, opacity:0.55, animationDelay:d }}>{e}</span>
        ))}

        <div style={{ textAlign:'center', position:'relative', zIndex:2, padding:'0 24px', maxWidth:820 }} className="fu">
          <div className="badge" style={{ background:'rgba(255,255,255,0.25)', color:'#fff', marginBottom:24, fontSize:12, letterSpacing:1.5, backdropFilter:'blur(10px)' }}>
            AI-Powered Travel Intelligence
          </div>
          <h1 className="pacifico" style={{ fontSize:'clamp(44px,9vw,90px)', lineHeight:1.18, color:'#fff', textShadow:'0 4px 24px rgba(0,40,100,0.35)', marginBottom:22 }}>
            Ride the Wave<br />of Adventure
          </h1>
          <p style={{ fontSize:18, color:'rgba(255,255,255,0.88)', maxWidth:510, margin:'0 auto 48px', lineHeight:1.85, fontWeight:400 }}>
            Let Biscoth craft your perfect escape — from sun-kissed beaches to exotic coasts, your dream trip is one wave away.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <button className="btn-white" onClick={() => navigate('/plan')}>
              🌊 Plan My Trip
            </button>
            <button className="btn-out" style={{ borderColor:'#fff', color:'#fff' }} onClick={() => navigate('/explore')}>
              Explore Destinations
            </button>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:0,
            marginTop:70, maxWidth:440, margin:'70px auto 0',
            background:'rgba(255,255,255,0.18)', borderRadius:22,
            padding:'22px 12px', backdropFilter:'blur(14px)',
            border:'1px solid rgba(255,255,255,0.25)',
          }}>
            {[['500+','Destinations'],['AI','Smart Plans'],['24/7','Support']].map(([v,l]) => (
              <div key={l}>
                <div className="pacifico" style={{ fontSize:30, color:'#fff' }}>{v}</div>
                <div style={{ fontSize:10, color:'rgba(255,255,255,0.75)', letterSpacing:1.5, textTransform:'uppercase', marginTop:3, fontWeight:700 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveDivider color="#fffbf5" />

      {/* How it works */}
      <div style={{ background:'#fffbf5', padding:'64px 32px 80px' }}>
        <div style={{ maxWidth:1080, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <h2 className="pacifico" style={{ fontSize:40, color:C.ocean }}>How Biscoth Works</h2>
            <div className="wline" style={{ margin:'12px auto' }} />
            <p style={{ color:C.mid, fontWeight:600 }}>Four simple steps to your perfect getaway</p>
          </div>
          <div className="featuregrid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:22 }}>
            {[
              { e:'🎯', t:'Tell Us Your Vibe',  d:'Share destination, budget, interests & dates.', c:'#caf0f8' },
              { e:'🤖', t:'AI Analyzes',         d:'Smart engine matches your preferences to curated spots.', c:'#90e0ef' },
              { e:'🗺️', t:'Get Your Plan',       d:'Personalized day-by-day itinerary delivered instantly.', c:'#caf0f8' },
              { e:'✈️', t:'Book & Go!',          d:'Edit your plan and book via trusted travel platforms.', c:'#90e0ef' },
            ].map(f => (
              <div key={f.t} className="card" style={{ padding:28, textAlign:'center' }}>
                <div style={{ width:64, height:64, borderRadius:'50%', background:f.c, display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, margin:'0 auto 16px' }}>{f.e}</div>
                <h3 style={{ fontSize:16, marginBottom:8, color:C.deep, fontWeight:800 }}>{f.t}</h3>
                <p style={{ fontSize:13, color:C.mid, lineHeight:1.75 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ background:'linear-gradient(135deg,#023e8a,#0077b6)', padding:'60px 32px', textAlign:'center' }}>
        <h2 className="pacifico" style={{ fontSize:38, color:'#fff', marginBottom:16 }}>Ready to Catch the Wave?</h2>
        <p style={{ color:'rgba(202,240,248,0.8)', marginBottom:32, fontSize:16, fontWeight:400 }}>
          Join thousands of travelers who plan smarter with Biscoth AI.
        </p>
        <button className="btn-white" onClick={() => navigate('/plan')}>
          Start Planning Now
        </button>
      </div>
    </div>
  );
}
