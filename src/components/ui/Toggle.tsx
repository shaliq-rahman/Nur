"use client";

export default function Toggle({ active, onClick }: { active: boolean; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      style={{
        width: "48px",
        height: "26px",
        borderRadius: "13px",
        background: active ? "var(--color-primary)" : "rgba(31, 63, 52, 0.15)",
        border: "none",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.2s"
      }}
    >
      <div style={{
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "white",
        position: "absolute",
        top: "2px",
        left: active ? "calc(100% - 24px)" : "2px",
        transition: "left 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}></div>
    </button>
  );
}
