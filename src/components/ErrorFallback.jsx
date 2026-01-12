import { useUser } from "../context/UserContext";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h2>⚠️ Something went wrong</h2>
      <p style={{ color: "#dc2626" }}>{error.message}</p>

      <button
        onClick={resetErrorBoundary}
        style={{
          marginTop: "1rem",
          padding: "0.6rem 1.2rem",
          background: "#2563eb",
          color: "#fff",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
