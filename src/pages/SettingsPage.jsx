import { useState, useEffect } from "react";
import { fetchCurrentUser } from "../api/user";
import { useUser } from "../context/UserContext";
import UserErrorMessage from "../components/UserErrorMessage";

// PROBLEM: This page fetches user data independently
// TODO: Refactor to use the shared UserContext instead

function SettingsPage() {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { user, loading, error, updateUser } = useUser();

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(formData);
    // TODO: This should update the user in context too
    alert("Settings saved! (not really - this is a mock)");
  };

  if (loading) return <p className="loading">Loading user...</p>;

  if (error) {
    return <UserErrorMessage />;
  }

  if (!user) return <p>No user data</p>;

  return (
    <div className="page">
      <h1>Settings</h1>

      <form className="settings-form" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div>
          <label>Role</label>
          <input type="text" value={user.role} disabled />
          <small style={{ color: "#7f8c8d" }}>Role cannot be changed</small>
        </div>

        <button type="submit" className="btn">
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default SettingsPage;
