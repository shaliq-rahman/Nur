"use client";

// Visual array of month dates and their completion statuses 
// (mocking the image 05 - Progress for demonstration)
const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// Generate mock month data (starts on Wed, so empty offset for Mon, Tue)
const days = [
  ...Array(2).fill(null), // Empty offset
  { date: 1, dots: [1,1,1,1,1] },
  { date: 2, dots: [1,1,1,1,0] },
  { date: 3, dots: [1,1,1,0,0] },
  { date: 4, dots: [1,1,1,1,1] },
  { date: 5, dots: [1,1,1,1,0] },
  { date: 6, dots: [1,1,1,1,1] },
  { date: 7, dots: [1,1,1,1,0] },
  { date: 8, dots: [1,0,0,0,0] },
  { date: 9, dots: [1,1,1,1,1] },
  { date: 10, dots: [1,1,1,1,0] },
  { date: 11, dots: [1,1,1,1,1] },
  { date: 12, dots: [1,1,1,1,0] },
  { date: 13, dots: [1,0,1,0,0] },
  { date: 14, dots: [1,1,1,1,1] },
  { date: 15, dots: [1,1,0,0,0] },
  { date: 16, dots: [1,1,1,1,1] },
  { date: 17, dots: [1,1,1,0,0] },
  { date: 18, dots: [1,0,1,0,0] },
  { date: 19, dots: [1,1,1,1,1] },
  { date: 20, dots: [1,1,1,1,0] },
  { date: 21, dots: [1,1,1,1,1] },
  { date: 22, dots: [1,1,1,1,0] },
  { date: 23, dots: [1,1,1,0,0] },
  { date: 24, dots: [1,1,1,1,1], active: true },
  { date: 25, dots: [0,0,0,0,0], future: true },
  { date: 26, dots: [0,0,0,0,0], future: true },
  { date: 27, dots: [0,0,0,0,0], future: true },
  { date: 28, dots: [0,0,0,0,0], future: true },
  { date: 29, dots: [0,0,0,0,0], future: true },
  { date: 30, dots: [0,0,0,0,0], future: true },
];

export default function MonthCalendar() {
  return (
    <div>
      {/* Week Headers */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "0.5rem",
        marginBottom: "1rem"
      }}>
        {weekDays.map(day => (
          <div key={day} style={{
            fontSize: "0.7rem",
            color: "var(--color-text-muted)",
            textAlign: "center",
            letterSpacing: "0.1em"
          }}>
            {day}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "0.5rem"
      }}>
        {days.map((day, idx) => {
          if (!day) return <div key={`empty-${idx}`} />;
          
          return (
            <div key={day.date} style={{
              background: day.active ? "var(--color-primary)" : day.future ? "transparent" : "#F4EFE6",
              color: day.active ? "white" : day.future ? "var(--color-text-muted)" : "var(--color-text)",
              borderRadius: "8px",
              padding: "0.75rem",
              minHeight: "75px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: day.future ? 0.4 : 1
            }}>
              <span style={{ fontSize: "0.85rem", fontWeight: day.active ? 600 : 400 }}>
                {day.date}
              </span>
              
              {/* Prayer Dots */}
              <div style={{ display: "flex", gap: "3px", alignSelf: "flex-start" }}>
                {day.dots.map((completed, i) => (
                  <div key={i} style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: completed 
                      ? (day.active ? "white" : "var(--color-primary)") 
                      : "transparent",
                    border: day.active 
                      ? "none" 
                      : (completed ? "none" : "1px solid rgba(31,63,52,0.2)")
                  }}></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
