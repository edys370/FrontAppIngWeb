import { NavLink } from 'react-router-dom';
import './AppBar.css';

export default function AppBar({ title = 'Products Microservice' }) {
  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <div className="app-bar-brand">
          <svg className="app-bar-logo" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <span className="app-bar-title">{title}</span>
        </div>
        <nav className="app-bar-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Productos
          </NavLink>
          <NavLink to="/form" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            + Crear
          </NavLink>
          <NavLink to="/health" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Salud
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
            Config
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
