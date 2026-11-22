export default function LoadingScreen({ message = "Verifying session..." }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        width: "100%",
        padding: "40px 20px",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "3px solid rgba(255, 31, 31, 0.15)",
          borderTopColor: "#FF1F1F",
          borderRadius: "50%",
          animation: "ekart-spin 0.8s linear infinite",
        }}
      />
      <span
        style={{
          color: "#8D8D94",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {message}
      </span>
      <style>{`
        @keyframes ekart-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

