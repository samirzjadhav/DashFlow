import { useState, useEffect } from "react";
import { fetchCurrentUser } from "../api/user";
import { useUser } from "../context/UserContext";
import UserErrorMessage from "../components/UserErrorMessage";

// PROBLEM: This page fetches user data independently
// TODO: Refactor to use the shared UserContext instead

function DashboardPage() {
  const { user, loading, error } = useUser();

  if (loading) return <p className="loading">Loading user...</p>;

  if (error) {
    return <UserErrorMessage />;
  }

  if (!user) return <p>No user data</p>;

  return (
    <div className="page">
      <h1 className="page-title">Dashboard</h1>

      <div className="card">
        <h3 className="card-title">{user.name}'s Dashboard</h3>
        <p className="muted">Role: {user.role}</p>
        <p className="muted">Member since: {user.joinedAt}</p>
      </div>
      <h3>Your Stats</h3>
      <div className="stats-grid">
        <div className="stat-card">
          📁 Projects
          <br />
          <strong>12</strong>
        </div>
        <div className="stat-card">
          ✅ Tasks
          <br />
          <strong>47</strong>
        </div>
        <div className="stat-card">
          👥 Team
          <br />
          <strong>5</strong>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
