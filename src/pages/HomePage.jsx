import { useState, useEffect } from "react";
import { fetchCurrentUser } from "../api/user";
import { useUser } from "../context/UserContext";
import UserErrorMessage from "../components/UserErrorMessage";

// PROBLEM: This page fetches user data independently
// TODO: Refactor to use the shared UserContext instead

function HomePage() {
  const { user, loading, error } = useUser();

  if (loading) return <p className="loading">Loading User...</p>;

  if (error) {
    return <UserErrorMessage />;
  }

  if (!user) return <p>No User Data</p>;

  return (
    <div className="page">
      <h1>Welcome Home</h1>

      <div className="user-card">
        <h3>Hello, {user.name}!</h3>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>

      <p style={{ marginTop: "1rem" }}>
        This is the home page. Navigate to other pages and notice that user data
        is fetched separately on each page (check the network tab).
      </p>
    </div>
  );
}

export default HomePage;
