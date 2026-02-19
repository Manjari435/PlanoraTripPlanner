# 🐚 Planora Trip Planner

AI-powered beach-themed trip planning web app built with **React** + **React Router**.

---

## 🚀 How to Run in VS Code

### Step 1 — Prerequisites
Make sure you have installed:
- **Node.js** (v16 or above) → https://nodejs.org
- **VS Code** → https://code.visualstudio.com

Check Node is installed by running in terminal:
```
node -v
npm -v
```

---

### Step 2 — Open Project in VS Code
1. Unzip / place the `Planora` folder on your Desktop or any folder
2. Open VS Code
3. Click **File → Open Folder** → select the `Planora` folder
4. Open the **Terminal** in VS Code: press `` Ctrl + ` `` (backtick)

---

### Step 3 — Install Dependencies
In the VS Code terminal, run:
```
npm install
```
Wait for it to finish (downloads React and all packages).

---

### Step 4 — Start the App
```
npm start
```
The app will open automatically at:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
biscoth/
│
├── public/
│   └── index.html              ← HTML entry point
│
├── src/
│   ├── index.js                ← React root render
│   ├── App.js                  ← Main app + routing
│   │
│   ├── data/
│   │   └── destinations.js     ← All destinations & interests data
│   │
│   ├── styles/
│   │   └── theme.js            ← Colors + global CSS styles
│   │
│   ├── components/             ← Reusable UI components
│   │   ├── Navbar.js
│   │   ├── AuthModal.js
│   │   ├── Notification.js
│   │   ├── WaveDivider.js
│   │   ├── DestinationCard.js
│   │   └── LoadingOverlay.js
│   │
│   └── pages/                  ← One file per page/route
│       ├── Home.js             ← Landing page
│       ├── Plan.js             ← Trip planner form
│       ├── Results.js          ← AI recommendation results
│       ├── Explore.js          ← Browse all destinations
│       ├── DestinationDetail.js← Single destination view
│       ├── Itinerary.js        ← Day-wise AI itinerary
│       └── SavedTrips.js       ← User's saved trips
│
└── package.json                ← Project config & dependencies
```

---

## 🗂️ Modules Covered

| Module | File(s) |
|---|---|
| User Authentication | `AuthModal.js`, `App.js` |
| User Input & Preferences | `Plan.js` |
| AI Recommendation | `Results.js`, `destinations.js` |
| Itinerary Generation | `Itinerary.js` |
| Search & Data Integration | `Explore.js`, `Results.js` |
| Booking / External Links | `Itinerary.js`, `DestinationDetail.js` |
| UI / Frontend (React) | All pages + components |

---

## 🛑 Stop the App
Press `Ctrl + C` in the terminal to stop the dev server.

---

## 🏗️ Build for Production
```
npm run build
```
Creates an optimized `build/` folder ready to deploy.
