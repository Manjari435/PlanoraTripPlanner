export const C = {
  ocean:    '#0077b6',
  deep:     '#023e8a',
  wave:     '#00b4d8',
  light:    '#90e0ef',
  sky:      '#caf0f8',
  foam:     '#fffbf5',
  sand:     '#fdf0d5',
  coral:    '#e76f51',
  bg:       '#eaf6fb',
  text:     '#0d3b52',
  mid:      '#2d7da3',
  white:    '#ffffff',
};

export const STYLES = `
  .pacifico { font-family: 'Pacifico', cursive; }
  .nunito   { font-family: 'Nunito', sans-serif; }

  /* Buttons */
  .btn-main {
    background: linear-gradient(135deg, #0077b6, #00b4d8);
    color: #fff; border: none;
    padding: 13px 30px; border-radius: 50px;
    font-family: 'Nunito', sans-serif;
    font-weight: 800; font-size: 14px;
    cursor: pointer; transition: all 0.3s;
    box-shadow: 0 4px 18px rgba(0,119,182,0.35);
  }
  .btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 32px rgba(0,119,182,0.5); }

  .btn-out {
    background: transparent; color: #0077b6;
    border: 2px solid #0077b6;
    padding: 11px 26px; border-radius: 50px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700; font-size: 13px;
    cursor: pointer; transition: all 0.3s;
  }
  .btn-out:hover { background: rgba(0,119,182,0.08); transform: translateY(-2px); }

  .btn-white {
    background: #fff; color: #0077b6;
    border: none; padding: 13px 30px;
    border-radius: 50px;
    font-family: 'Nunito', sans-serif;
    font-weight: 800; font-size: 14px;
    cursor: pointer; transition: all 0.3s;
    box-shadow: 0 6px 24px rgba(0,0,0,0.16);
  }
  .btn-white:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(0,0,0,0.22); }

  /* Cards */
  .card {
    background: #fff; border-radius: 22px;
    overflow: hidden; transition: all 0.35s;
    box-shadow: 0 4px 18px rgba(0,100,180,0.09);
  }
  .card:hover { transform: translateY(-7px); box-shadow: 0 18px 50px rgba(0,119,182,0.18); }

  /* Inputs */
  .inp {
    background: #f0faff; border: 2px solid #caf0f8;
    color: #0d3b52; padding: 13px 16px;
    border-radius: 14px;
    font-family: 'Nunito', sans-serif;
    font-size: 14px; font-weight: 600;
    width: 100%; outline: none; transition: all 0.3s;
  }
  .inp:focus { border-color: #0077b6; background: #fff; box-shadow: 0 0 0 3px rgba(0,119,182,0.1); }

  /* Badge */
  .badge {
    display: inline-block;
    background: linear-gradient(135deg, #caf0f8, #90e0ef);
    color: #023e8a; padding: 5px 14px;
    border-radius: 20px; font-size: 11px;
    font-family: 'Nunito', sans-serif;
    font-weight: 800; letter-spacing: 1px; text-transform: uppercase;
  }

  /* Interest chip */
  .chip {
    cursor: pointer; border: 2px solid #caf0f8;
    background: #f0faff; padding: 9px 16px;
    border-radius: 24px; font-size: 13px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700; transition: all 0.3s; color: #2d7da3;
  }
  .chip.on { border-color: #0077b6; background: linear-gradient(135deg,#caf0f8,#90e0ef); color: #023e8a; }

  /* Stat box */
  .statbox {
    background: linear-gradient(135deg, #f0faff, #eaf6fb);
    border: 2px solid #caf0f8; border-radius: 16px;
    padding: 18px; text-align: center;
  }

  /* Wave divider line */
  .wline {
    width: 56px; height: 4px;
    background: linear-gradient(90deg, #00b4d8, #90e0ef, transparent);
    border-radius: 4px; margin: 12px 0;
  }

  /* Range input */
  input[type=range] {
    -webkit-appearance: none; width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #00b4d8, #caf0f8);
    border-radius: 4px; outline: none;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none; width: 20px; height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0077b6, #00b4d8);
    cursor: pointer; box-shadow: 0 2px 8px rgba(0,119,182,0.4);
  }

  /* Animations */
  @keyframes fadeUp   { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
  @keyframes floatUp  { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-11px); } }
  @keyframes bdot     { 0%,80%,100% { transform:translateY(0) scale(.8); opacity:.4; } 40% { transform:translateY(-14px) scale(1.1); opacity:1; } }
  @keyframes slideIn  { from { transform:translateX(110%); opacity:0; } to { transform:translateX(0); opacity:1; } }

  .fu  { animation: fadeUp  0.55s ease forwards; }
  .fl  { animation: floatUp 3.2s ease-in-out infinite; }
  .sr  { animation: slideIn 0.4s ease forwards; }

  /* Loading dots */
  .dot { animation: bdot 1.2s ease-in-out infinite; display:inline-block; width:13px; height:13px; border-radius:50%; margin:0 4px; }
  .dot:nth-child(1) { background:#90e0ef; }
  .dot:nth-child(2) { background:#0077b6; animation-delay:.2s; }
  .dot:nth-child(3) { background:#023e8a; animation-delay:.4s; }

  /* Itinerary */
  .daycrd { border-left: 3px solid #00b4d8; padding-left: 20px; margin-bottom: 26px; }
  .itrow  { display:flex; align-items:flex-start; gap:10px; padding:9px 0; border-bottom:1px solid #eaf6fb; font-size:14px; color:#2d7da3; font-weight:600; }

  /* Responsive */
  @media (max-width: 700px) {
    .twocol  { grid-template-columns: 1fr !important; }
    .fourcol { grid-template-columns: 1fr 1fr !important; }
    .featuregrid { grid-template-columns: 1fr 1fr !important; }
  }
`;
