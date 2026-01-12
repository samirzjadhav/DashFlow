import { createContext, useContext, useEffect, useState } from "react";
import { fetchCurrentUser, updateUser } from "../api/user";

// TODO: Implement UserContext
//
// Requirements:
// 1. Create a context that holds user data, loading state, and error state
// 2. Create a provider component that fetches the user on mount
// 3. Export a custom hook (useUser) for consuming the context
//
// The context should provide:
// - user: the user object (or null)
// - loading: boolean
// - error: error message (or null)
// - refetchUser: function to manually refetch user data

const UserContext = createContext(null);

export function UserProvider({ children }) {
  // TODO: Implement this provider
  // Hint: Use useState for user, loading, error
  // Hint: Use useEffect to fetch user on mount
  // Hint: Import fetchCurrentUser from '../api/user'

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchCurrentUser();
      setUser(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "failed to load user";
      setError(message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const updateUserInContext = async (updates) => {
    const updatedUser = await updateUser(updates);
    setUser(updatedUser);
  };

  // this is for error boundary integration
  if (!loading && error) {
    throw new Error(error);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        refetchUser: loadUser,
        updateUser: updateUserInContext,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
