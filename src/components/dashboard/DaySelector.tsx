"use client";

import { useState } from "react";

const days = [
  { id: "d1", day: "MON", date: "Apr 20", status: "Not logged", type: "empty" },
  { id: "d2", day: "TUE", date: "Apr 21", status: "All marked", type: "done" },
  { id: "d3", day: "WED", date: "Apr 22", status: "All marked", type: "done" },
  { id: "d4", day: "THU", date: "Apr 23", status: "In progress", type: "active" },
  { id: "d5", day: "FRI", date: "Apr 24", status: "Not logged", type: "empty" },
];

export default function DaySelector() {
  const [activeId, setActiveId] = useState("d4");

  return (
    <div style={{ display: "flex", gap: "0.75rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
      {days.map(day => {
        const isActive = activeId === day.id;
        
        return (
          <button
            key={day.id}
            onClick={() => setActiveId(day.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              borderRadius: "12px",
              minWidth: "110px",
              background: isActive ? "var(--color-primary)" : "white",
              color: isActive ? "white" : "var(--color-text)",
              border: isActive ? "1px solid var(--color-primary)" : "1px solid rgba(31,63,52,0.1)",
              boxShadow: isActive ? "0 4px 12px rgba(31,63,52,0.2)" : "0 2px 5px rgba(0,0,0,0.02)",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.2s"
            }}
          >
            <span style={{ 
              fontSize: "0.7rem", 
              letterSpacing: "0.05em", 
              color: isActive ? "rgba(255,255,255,0.7)" : "var(--color-text-muted)" 
            }}>
              {day.day}
            </span>
            <span style={{ 
              fontSize: "1.1rem", 
              fontWeight: 500, 
              margin: "0.25rem 0 0.5rem 0" 
            }}>
              {day.date}
            </span>
            
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "0.35rem",
              fontSize: "0.7rem",
              color: isActive ? "white" : "var(--color-text-muted)"
            }}>
              {day.type === "done" && <span style={{fontSize:"0.8rem"}}>✓</span>}
              {day.status}
            </div>
          </button>
        );
      })}
    </div>
  );
}
