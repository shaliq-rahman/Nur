"use client";

interface StatCardProps {
  title: string;
  value: React.ReactNode;
  subtext: string;
}

export default function StatCard({ title, value, subtext }: StatCardProps) {
  return (
    <div style={{
      background: "white",
      borderRadius: "16px",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      border: "1px solid rgba(31, 63, 52, 0.05)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
    }}>
      <h3 style={{ 
        fontSize: "0.7rem", 
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-primary-light)",
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.25rem"
      }}>
        {title === "Streak" && <span style={{ opacity: 0.5, fontSize: "1rem" }}>✧</span>}
        {title}
      </h3>
      
      <div style={{ 
        fontSize: "2.5rem", 
        fontFamily: "var(--font-serif)", 
        color: "var(--color-primary)",
        lineHeight: 1,
        marginBottom: "0.5rem"
      }}>
        {value}
      </div>
      
      <div style={{ 
        fontSize: "0.8rem", 
        color: "var(--color-text-muted)",
        marginTop: "auto"
      }}>
        {subtext}
      </div>
    </div>
  );
}
