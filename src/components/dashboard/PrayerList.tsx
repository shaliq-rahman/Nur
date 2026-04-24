"use client";

import { Check } from "lucide-react";

type PrayerStatus = "completed" | "current" | "upcoming";

interface Prayer {
  id: string;
  name: string;
  arabicName: string;
  time: string;
  description: string;
  status: PrayerStatus;
}

const prayers: Prayer[] = [
  { id: "fajr", name: "Fajr", arabicName: "الفجر", time: "04:52", description: "Before sunrise", status: "completed" },
  { id: "dhuhr", name: "Dhuhr", arabicName: "الظهر", time: "12:38", description: "After midday", status: "completed" },
  { id: "asr", name: "Asr", arabicName: "العصر", time: "16:14", description: "Late afternoon", status: "current" },
  { id: "maghrib", name: "Maghrib", arabicName: "المغرب", time: "18:47", description: "Just after sunset", status: "upcoming" },
  { id: "isha", name: "Isha", arabicName: "العشاء", time: "20:12", description: "Night prayer", status: "upcoming" },
];

export default function PrayerList() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      background: "white",
      borderRadius: "16px",
      padding: "1rem"
    }}>
      {prayers.map((prayer, index) => {
        const isLast = index === prayers.length - 1;
        
        return (
          <div key={prayer.id} style={{
            display: "flex",
            alignItems: "center",
            padding: "1.25rem 0.5rem",
            borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.05)"
          }}>
            {/* Status Icon */}
            <div style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              flexShrink: 0,
              marginRight: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: prayer.status === "completed" 
                ? "none" 
                : prayer.status === "current" 
                  ? "2px solid #DDAC6B" 
                  : "2px solid rgba(0,0,0,0.1)",
              backgroundColor: prayer.status === "completed" ? "var(--color-primary)" : "transparent",
              color: "white"
            }}>
              {prayer.status === "completed" && <Check size={16} />}
              {prayer.status === "current" && (
                 <div style={{ width: "18px", height: "18px", borderRadius: "50%", border: "2px solid #DDAC6B", opacity: 0.3 }}></div>
              )}
            </div>
            
            {/* Prayer Info */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ 
                  fontFamily: "var(--font-serif)", 
                  fontSize: "1.25rem",
                  fontWeight: prayer.status === "current" ? 600 : 400,
                  color: prayer.status === "upcoming" ? "var(--color-text-muted)" : "var(--color-text)"
                }}>
                  {prayer.name}
                </span>
                <span style={{ 
                  fontFamily: "var(--font-sans)", 
                  fontSize: "1rem", 
                  color: "var(--color-text-muted)" 
                }}>
                  {prayer.arabicName}
                </span>
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "0.25rem" }}>
                {prayer.description}
              </div>
            </div>

            {/* Time */}
            <div style={{ 
              fontWeight: 600, 
              color: prayer.status === "current" ? "#DDAC6B" : prayer.status === "upcoming" ? "var(--color-text-muted)" : "var(--color-text)"
            }}>
              {prayer.time}
            </div>
          </div>
        );
      })}
    </div>
  );
}
