function UserErrorMessage() {
  return (
    <div className="page">
      <h1>Oops! Something went wrong</h1>

      <div className="user-card">
        <h3>We're having a bit of trouble</h3>
        <p>
          It looks like we couldn't load your information right now. Don't
          worry, this happens sometimes! Give it another try and we'll get you
          back on track.
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            marginTop: "1.5rem",
            padding: "0.75rem 1.5rem",
            background: "var(--primary)",
            color: "#fff",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "var(--primary-dark)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "var(--primary)";
          }}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default UserErrorMessage;
