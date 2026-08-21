import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import logo from '../../../docs/octofitapp-small.png'
import { apiBaseUrl } from './api'
import './App.css'

const links = [
  ['/', 'Home'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Athletes'],
  ['/workouts', 'Workouts'],
]

function Home() {
  return (
    <section className="container py-5">
      <div className="hero-panel p-4 p-md-5">
        <img src={logo} alt="OctoFit Tracker logo" className="app-logo mb-4" />
        <p className="eyebrow">Move together. Grow stronger.</p>
        <h1 className="display-4">Your fitness journey, in one place.</h1>
        <p className="lead text-secondary">Track activities, find your next workout, and compete with your team.</p>
        <NavLink to="/workouts" className="btn btn-primary btn-lg">Explore workouts</NavLink>
      </div>
      <div className="small text-secondary mt-3">API: {apiBaseUrl}</div>
    </section>
  )
}

function App() {
  return (
    <>
      <header className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src={logo} alt="" className="brand-logo" />
            <span>OctoFit</span>
          </NavLink>
          <nav className="d-flex flex-wrap gap-1" aria-label="Primary navigation">
            {links.map(([path, label]) => (
              <NavLink key={path} to={path} className={({ isActive }) => `nav-link px-2 ${isActive ? 'active fw-semibold' : ''}`}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </>
  )
}

export default App
