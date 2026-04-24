"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";

type PrayerStatus = "done" | "missed" | "empty";

interface PrayerDef {
  id: string;
  name: string;
  arabic: string;
  time: string;
}

const PRAYERS: PrayerDef[] = [
  { id: "fajr", name: "Fajr", arabic: "الفجر", time: "04:52" },
  { id: "dhuhr", name: "Dhuhr", arabic: "الظهر", time: "12:38" },
  { id: "asr", name: "Asr", arabic: "العصر", time: "16:14" },
  { id: "maghrib", name: "Maghrib", arabic: "المغرب", time: "18:47" },
  { id: "isha", name: "Isha", arabic: "العشاء", time: "20:12" },
];

export default function PrayerEditorBox() {
  const [statuses, setStatuses] = useState<Record<string, PrayerStatus>>({
    fajr: "done",
    dhuhr: "done",
    asr: "empty",
    maghrib: "missed",
    isha: "empty",
  });

  const cycleStatus = (id: string) => {
    setStatuses(prev => {
      const current = prev[id];
      const next = current === "done" ? "missed" : current === "missed" ? "empty" : "done";
      return { ...prev, [id]: next };
    });
  };

  const markAllPrayed = () => {
    const next: Record<string, PrayerStatus> = {};
    Object.keys(statuses).forEach(k => next[k] = "done");
    setStatuses(next);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2.5rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
        {PRAYERS.map(prayer => {
          const status = statuses[prayer.id];
          const isDone = status === "done";
          const isMissed = status === "missed";
          const isEmpty = status === "empty";

          return (
            <button
              key={prayer.id}
              onClick={() => cycleStatus(prayer.id)}
              style={{
                flexShrink: 0,
                width: "90px",
                height: "140px",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                 padding: "1.25rem 0.5rem",
                cursor: "pointer",
                background: isMissed ? "#EFECE7" : "transparent",
                border: isDone 
                  ? "1px solid var(--color-primary)" 
                  : isMissed ? "1px solid rgba(0,0,0,0.05)" : "1px solid rgba(31,63,52,0.1)",
                transition: "all 0.2s"
              }}
            >
              {/* Icon Status */}
              <div style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
                background: isDone ? "var(--color-primary)" : isMissed ? "rgba(0,0,0,0.2)" : "transparent",
                color: "white",
                border: isEmpty ? "1.5px dashed rgba(31,63,52,0.2)" : "none"
              }}>
                {isDone && <Check size={18} />}
                {isMissed && <Minus size={18} />}
              </div>

              <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--color-text)" }}>{prayer.name}</div>
              <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", margin: "0.25rem 0 auto 0" }}>{prayer.arabic}</div>
              <div style={{ fontSize: "0.75rem", fontWeight: 500, color: isMissed ? "var(--color-text-muted)" : "var(--color-primary)" }}>
                {prayer.time}
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>
          Tap a prayer to cycle: prayed → missed → clear
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button 
            onClick={markAllPrayed}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "2rem",
              background: "white",
              border: "1px solid rgba(31, 63, 52, 0.2)",
              color: "var(--color-text)",
              fontSize: "0.9rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Mark all prayed
          </button>
          <button 
            onClick={() => alert("Saved to sheet!")}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "2rem",
              background: "var(--color-primary)",
              border: "none",
              color: "white",
              fontSize: "0.9rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Save day ✓
          </button>
        </div>
      </div>
    </>
  );
}
