// SOLUTION - For Interviewer Reference Only

import { Routes, Route, Link } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <UserProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </UserProvider>
  );
}

function Navigation() {
  const { user, loading } = useUser();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>

      <div className="user-badge">
        {loading ? 'Loading...' : user ? `Welcome, ${user.name}` : 'Not logged in'}
      </div>
    </nav>
  );
}

export default App;
