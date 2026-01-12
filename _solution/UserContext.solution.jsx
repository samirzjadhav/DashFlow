// SOLUTION - For Interviewer Reference Only
// Do not share this file with the candidate

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchCurrentUser } from '../api/user';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const userData = await fetchCurrentUser();
      setUser(userData);
    } catch (err) {
      setError(err.message || 'Failed to fetch user');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetchUser();
  }, [refetchUser]);

  const updateUser = useCallback((updates) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : prev));
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error, refetchUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
