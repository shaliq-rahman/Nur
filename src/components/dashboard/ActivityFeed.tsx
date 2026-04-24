"use client";

const MOCK_ACTIVITY = [
  { action: "Marked Asr as prayed", context: "Apr 23 · 2 min ago" },
  { action: "Marked Fajr as prayed", context: "Apr 23 · 5 min ago" },
  { action: "Logged 5 prayers", context: "Apr 22 · Yesterday" },
  { action: "Synced to Google Sheet", context: "-- Yesterday" },
  { action: "Marked Maghrib missed", context: "Apr 21 · 2 days ago" },
];

export default function ActivityFeed() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {MOCK_ACTIVITY.map((item, idx) => (
        <div key={idx} style={{ 
          display: "flex", 
          gap: "1rem", 
          paddingBottom: "1.5rem",
          borderBottom: idx === MOCK_ACTIVITY.length - 1 ? "none" : "1px solid rgba(31,63,52,0.05)"
        }}>
          <div style={{ marginTop: "0.3rem" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-primary)" }} />
          </div>
          <div>
            <div style={{ fontSize: "0.9rem", color: "var(--color-text)", fontWeight: 500, marginBottom: "0.15rem" }}>
              {item.action}
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              {item.context}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
