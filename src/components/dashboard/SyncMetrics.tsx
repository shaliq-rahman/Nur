"use client";

import { Check } from "lucide-react";

export default function SyncMetrics() {
  return (
    <div>
      {/* Last Sync Card */}
      <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "1.5rem",
          border: "1px solid rgba(31, 63, 52, 0.05)",
          boxShadow: "0 5px 15px rgba(0,0,0,0.02)",
          marginBottom: "1.5rem"
      }}>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary-light)", marginBottom: "0.5rem" }}>
          Last Sync
        </div>
        <div style={{ fontSize: "1.25rem", fontFamily: "var(--font-serif)", fontWeight: 500 }}>
          2 min ago
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(0,0,0,0.05)", marginBottom: "1rem" }}>
          Automatic · every edit
        </div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            "Sheet created Apr 01",
            "140 rows written",
            "0 conflicts",
            "Private to your account"
          ].map((item, idx) => (
            <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              <Check size={14} color="var(--color-primary-light)" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Monthly Summary Card */}
      <div style={{
          background: "#F4EFE6",
          borderRadius: "16px",
          padding: "1.5rem",
          marginBottom: "1rem"
      }}>
        <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary-light)", marginBottom: "0.5rem" }}>
          Monthly Summary
        </div>
        <div style={{ fontSize: "3.5rem", fontFamily: "var(--font-serif)", color: "var(--color-primary)", lineHeight: 1, marginBottom: "0.5rem", display: "flex", alignItems: "baseline" }}>
          93<span style={{ fontSize: "1.5rem" }}>%</span>
        </div>
        <div style={{ fontSize: "0.75rem", color: "rgba(31, 63, 52, 0.5)", lineHeight: 1.4 }}>
          Auto-calculated at end of month and pinned to Summary tab.
        </div>
      </div>

      <button style={{
        width: "100%",
        padding: "1rem",
        background: "transparent",
        border: "1px solid rgba(31, 63, 52, 0.2)",
        borderRadius: "12px",
        fontSize: "0.95rem",
        fontWeight: 500,
        cursor: "pointer",
        color: "var(--color-text)",
        transition: "all 0.2s"
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = "rgba(31,63,52,0.03)")}
      onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        Export as CSV
      </button>

    </div>
  );
}
