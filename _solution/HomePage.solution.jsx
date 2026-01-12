// SOLUTION - For Interviewer Reference Only

import { useUser } from '../context/UserContext';

function HomePage() {
  const { user, loading, error } = useUser();

  return (
    <div className="page">
      <h1>Welcome Home</h1>

      {loading ? (
        <p className="loading">Loading user...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : user ? (
        <div className="user-card">
          <h3>Hello, {user.name}!</h3>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>No user data</p>
      )}

      <p style={{ marginTop: '1rem' }}>
        User data is now shared via context - no redundant fetches!
      </p>
    </div>
  );
}

export default HomePage;
