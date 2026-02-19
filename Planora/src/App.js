import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { STYLES } from './styles/theme';

import Navbar from './components/Navbar';
import Notification from './components/Notification';
import AuthModal from './components/AuthModal';

import Home from './pages/Home';
import Plan from './pages/Plan';
import Explore from './pages/Explore';
import Results from './pages/Results';
import DestinationDetail from './pages/DestinationDetail';
import Itinerary from './pages/Itinerary';
import SavedTrips from './pages/SavedTrips';

export default function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [savedTrips, setSavedTrips] = useState([]);
  const [notification, setNotification] = useState(null);

  const showNotif = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSaveTrip = (trip) => {
    setSavedTrips(p => [trip, ...p.filter(t => t.id !== trip.id)]);
  };

  const handleRemoveTrip = (id) => {
    setSavedTrips(p => p.filter(t => t.id !== id));
    showNotif('Trip removed.');
  };

  const sharedProps = {
    user,
    onRequireAuth: () => setShowAuth(true),
    savedTrips,
    onSave: handleSaveTrip,
    showNotif,
  };

  return (
    <>
      {/* Global styles injected once */}
      <style>{STYLES}</style>

      <Notification notif={notification} />

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={u => setUser(u)}
          showNotif={showNotif}
        />
      )}

      <Navbar
        user={user}
        onSignIn={() => setShowAuth(true)}
        onSignOut={() => { setUser(null); showNotif('Signed out. See you soon!'); }}
        savedCount={savedTrips.length}
      />

      <div style={{ paddingTop: 66 }}>
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/plan"               element={<Plan />} />
          <Route path="/explore"            element={<Explore />} />
          <Route path="/results"            element={<Results />} />
          <Route path="/destination/:id"    element={<DestinationDetail {...sharedProps} />} />
          <Route path="/itinerary/:id"      element={<Itinerary {...sharedProps} />} />
          <Route path="/saved"              element={<SavedTrips savedTrips={savedTrips} onRemove={handleRemoveTrip} />} />
          <Route path="*"                   element={<div style={{ textAlign:'center', padding:80 }}>404 - Page Not Found</div>} />
        </Routes>

        {/* Footer */}
        <footer style={{
          background:'linear-gradient(135deg,#023e8a,#0077b6)',
          padding:'48px 32px 36px', textAlign:'center',
        }}>
          <span style={{ fontSize:36 }} className="fl">🐚</span>
          <div className="pacifico" style={{ fontSize:24, color:'#caf0f8', marginTop:12, marginBottom:5 }}>
            Planora Trip Planner
          </div>
          <p style={{ color:'rgba(202,240,248,0.55)', fontSize:12, letterSpacing:1, fontWeight:700 }}>
            AI-Powered Travel · Made with React · Ride the Wave of Adventure
          </p>
          <p style={{ color:'rgba(202,240,248,0.35)', fontSize:11, marginTop:8 }}>
            Planora
          </p>
        </footer>
      </div>
    </>
  );
}
