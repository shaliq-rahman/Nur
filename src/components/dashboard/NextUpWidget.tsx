"use client";

export default function NextUpWidget() {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <div style={{ 
        fontSize: "0.75rem", 
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-primary-light)",
        marginBottom: "0.5rem"
      }}>
        Next Up
      </div>

      <div style={{ 
        display: "flex", 
        alignItems: "baseline", 
        gap: "1rem",
        marginBottom: "4rem"
      }}>
        <h2 style={{ fontSize: "3rem", margin: 0, fontFamily: "var(--font-serif)" }}>Asr</h2>
        <span style={{ fontSize: "1.5rem", fontFamily: "var(--font-sans)", color: "var(--color-text-muted)" }}>العصر</span>
      </div>

      <div style={{ 
        fontSize: "0.75rem", 
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-primary-light)",
        marginBottom: "0.5rem"
      }}>
        Begins In
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "1rem" }}>
        <span style={{ fontSize: "4.5rem", fontWeight: 300, lineHeight: 1 }}>01</span>
        <span style={{ fontSize: "1rem", color: "var(--color-text-muted)", marginRight: "0.75rem" }}>h</span>
        
        <span style={{ fontSize: "4.5rem", fontWeight: 300, lineHeight: 1 }}>23</span>
        <span style={{ fontSize: "1rem", color: "var(--color-text-muted)", marginRight: "0.75rem" }}>m</span>
        
        <span style={{ fontSize: "4.5rem", fontWeight: 300, lineHeight: 1 }}>16</span>
        <span style={{ fontSize: "1rem", color: "var(--color-text-muted)" }}>s</span>
      </div>

      <div style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
        Window closes at 18:45 • <span style={{ opacity: 0.7 }}>2h 33m</span>
      </div>

      {/* Aesthetic Sun / Mountain background decoration */}
      <div style={{
        position: "absolute",
        top: 0,
        right: "-20%",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background: "radial-gradient(circle at center, #FFEFBA 0%, transparent 60%)",
        opacity: 0.8,
        zIndex: -1,
        filter: "blur(20px)"
      }} />
      <div style={{
        position: "absolute",
        top: "40px",
        right: "-5%",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "radial-gradient(circle at center, #FFDE82 0%, #F5AE57 100%)",
        boxShadow: "0 0 40px rgba(245, 174, 87, 0.4)",
        zIndex: -1,
      }} />

      {/* Dark mountain silhouettes at bottom (fixed to corner area) */}
      <div style={{
        position: "absolute",
        top: "300px",
        left: "-20%",
        width: "200%",
        height: "200px",
        zIndex: -2,
      }}>
        <div style={{ position: "absolute", bottom: 0, left: "-10%", width: "40%", height: "100%", background: "#6B8E7C", clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: "20%", width: "50%", height: "80%", background: "#5A7A68", clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, right: "0", width: "40%", height: "90%", background: "#6B8E7C", clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
      </div>

    </div>
  );
}
