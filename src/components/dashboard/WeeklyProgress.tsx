"use client";



export default function WeeklyProgress() {
  const days = [
    { name: "MON", date: 20, completed: 5, active: false },
    { name: "TUE", date: 21, completed: 3, active: false },
    { name: "WED", date: 22, completed: 5, active: false },
    { name: "THU", date: 23, completed: 4, active: false },
    { name: "FRI", date: 24, completed: 2, active: true },
    { name: "SAT", date: 25, completed: 0, active: false },
    { name: "SUN", date: 26, completed: 0, active: false },
  ];

  return (
    <div style={{ marginTop: "3rem" }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "1rem"
      }}>
        <h4 style={{ 
          fontSize: "0.75rem", 
          textTransform: "uppercase", 
          letterSpacing: "0.1em",
          color: "var(--color-primary-light)" 
        }}>This Week</h4>
        <button style={{ 
          background: "none", 
          border: "none", 
          color: "var(--color-text-muted)",
          fontSize: "0.75rem",
          cursor: "pointer"
        }}>
          View month →
        </button>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        {days.map((day) => (
          <div key={day.name} style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem 0",
            borderRadius: "12px",
            background: day.active ? "var(--color-primary)" : "white",
            color: day.active ? "white" : "var(--color-text)",
            boxShadow: day.active ? "0 4px 12px rgba(31,63,52,0.2)" : "none"
          }}>
            <span style={{ fontSize: "0.7rem", color: day.active ? "rgba(255,255,255,0.7)" : "var(--color-text-muted)", marginBottom: "0.25rem" }}>{day.name}</span>
            <span style={{ fontSize: "1.1rem", fontWeight: day.active ? 600 : 400, marginBottom: "0.75rem" }}>{day.date}</span>
            
            {/* Dots representing prayers */}
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: i < day.completed 
                    ? (day.active ? "white" : "var(--color-primary)")
                    : (day.active ? "rgba(255,255,255,0.2)" : "rgba(31,63,52,0.1)")
                }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
