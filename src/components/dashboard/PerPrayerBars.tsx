"use client";

const prayers = [
  { name: "Fajr", arabic: "الفجر", completed: 20, total: 24 },
  { name: "Dhuhr", arabic: "الظهر", completed: 19, total: 24 },
  { name: "Asr", arabic: "العصر", completed: 23, total: 24 },
  { name: "Maghrib", arabic: "المغرب", completed: 23, total: 24 },
  { name: "Isha", arabic: "العشاء", completed: 18, total: 24 },
];

export default function PerPrayerBars() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1rem" }}>
      {prayers.map((prayer) => {
        const percentage = (prayer.completed / prayer.total) * 100;
        
        return (
          <div key={prayer.name} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {/* Header info */}
            <div style={{ width: "80px" }}>
              <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text)" }}>
                {prayer.name}
              </div>
              <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-sans)", color: "var(--color-text-muted)" }}>
                {prayer.arabic}
              </div>
            </div>
            
            {/* Progress Bar background */}
            <div style={{ flex: 1, height: "6px", background: "rgba(31, 63, 52, 0.08)", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ 
                height: "100%", 
                width: `${percentage}%`, 
                background: "var(--color-primary)",
                borderRadius: "4px"
              }}></div>
            </div>

            {/* Fraction Metric */}
            <div style={{ width: "50px", textAlign: "right", fontSize: "0.85rem", fontWeight: 500 }}>
              {prayer.completed}/{prayer.total}
            </div>
          </div>
        );
      })}
    </div>
  );
}
