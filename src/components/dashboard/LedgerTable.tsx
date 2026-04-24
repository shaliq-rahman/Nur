"use client";

import { ArrowRight } from "lucide-react";

const DATA_ROWS = [
  { date: "Apr 24", day: "Fri", fajr: "✓", dhuhr: "✓", asr: "–", maghrib: "–", isha: "–", total: "2/5", note: "In progress" },
  { date: "Apr 23", day: "Thu", fajr: "✓", dhuhr: "✓", asr: "✓", maghrib: "–", isha: "✓", total: "4/5", note: "" },
  { date: "Apr 22", day: "Wed", fajr: "✓", dhuhr: "✓", asr: "✓", maghrib: "✓", isha: "✓", total: "5/5", note: "Alhamdulillah" },
  { date: "Apr 21", day: "Tue", fajr: "✓", dhuhr: "–", asr: "✓", maghrib: "✓", isha: "✓", total: "4/5", note: "" },
  { date: "Apr 20", day: "Mon", fajr: "✓", dhuhr: "✓", asr: "✓", maghrib: "✓", isha: "✓", total: "5/5", note: "" },
];

export default function LedgerTable() {
  return (
    <div style={{
      background: "white",
      borderRadius: "16px",
      border: "1px solid rgba(31, 63, 52, 0.05)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.02)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      
      {/* Top Header Row (Mimicking Google Sheets Header) */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        padding: "1.25rem 1.5rem",
        borderBottom: "1px solid rgba(0,0,0,0.05)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Sheets Icon Mock */}
          <div style={{
            width: "36px", height: "36px", borderRadius: "8px",
            background: "#0F9D58", display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: "bold", fontFamily: "var(--font-serif)"
          }}>
            S
          </div>
          <div>
            <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text)" }}>
              Nur — Prayer Log 1447
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
              drive.google.com/.../nur-prayer-log-1447
            </div>
          </div>
        </div>

        <button style={{
          display: "flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(31, 63, 52, 0.05)", border: "none",
          padding: "0.5rem 1rem", borderRadius: "2rem",
          fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", color: "var(--color-text)"
        }}>
          Open in Sheets <ArrowRight size={14} />
        </button>
      </div>

      {/* Tabs Row */}
      <div style={{ 
        display: "flex", 
        padding: "0 1rem", 
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        background: "#FAFAFA"
      }}>
        {["Summary", "Jan", "Feb", "Mar", "Apr", "May"].map(tab => {
          const isActive = tab === "Apr";
          return (
            <div key={tab} style={{
              padding: "0.75rem 1.25rem",
              fontSize: "0.75rem",
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "var(--color-primary)" : "var(--color-text-muted)",
              background: isActive ? "white" : "transparent",
              borderTop: isActive ? "2px solid var(--color-primary)" : "2px solid transparent",
              borderLeft: isActive ? "1px solid rgba(0,0,0,0.05)" : "none",
              borderRight: isActive ? "1px solid rgba(0,0,0,0.05)" : "none",
              marginBottom: "-1px"
            }}>
              {tab}
            </div>
          );
        })}
      </div>

      {/* Spreadsheet Data View */}
      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%", borderCollapse: "collapse", textAlign: "left",
          fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: "0.8rem", color: "var(--color-text)"
        }}>
          <thead>
            <tr>
              {["DATE", "DAY", "FAJR", "DHUHR", "ASR", "MAGHRIB", "ISHA", "TOTAL", "NOTE"].map(col => (
                <th key={col} style={{
                  padding: "1rem", 
                  color: "var(--color-text-muted)", 
                  fontWeight: 500,
                  borderBottom: "1px solid rgba(0,0,0,0.05)"
                }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DATA_ROWS.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid rgba(0,0,0,0.03)" }}>
                <td style={{ padding: "1rem", whiteSpace: "nowrap" }}>{row.date.replace(" ", "\n")}</td>
                <td style={{ padding: "1rem" }}>{row.day}</td>
                <td style={{ padding: "1rem" }}>{row.fajr}</td>
                <td style={{ padding: "1rem" }}>{row.dhuhr}</td>
                <td style={{ padding: "1rem" }}>{row.asr}</td>
                <td style={{ padding: "1rem" }}>{row.maghrib}</td>
                <td style={{ padding: "1rem" }}>{row.isha}</td>
                <td style={{ padding: "1rem" }}>{row.total}</td>
                <td style={{ padding: "1rem", color: "var(--color-text-muted)" }}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
