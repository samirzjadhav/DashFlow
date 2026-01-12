import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

import { UserProvider } from "./context/UserContext";
import { useUser } from "./context/UserContext";

// TODO: Import UserProvider and wrap the app with it
// import { UserProvider } from './context/UserContext';

function App() {
  return (
    // TODO: Wrap everything in <UserProvider>
    <>
      <UserProvider>
        <div className="app-layout">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </UserProvider>
    </>
  );
}

function Navigation() {
  // TODO: Use the useUser hook to display user info in the nav
  // Currently this is hardcoded - should show actual user name

  const { user, loading } = useUser();

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-link" to="/settings">
          Settings
        </Link>
      </div>

      {/* TODO: Replace with actual user data from context */}
      <div className="user-badge nav-user">
        {loading ? "loading" : user ? `Welcome, ${user.name}` : "Guest"}
      </div>
    </nav>
  );
}

export default App;
