"use client";

import { Sun, Moon, Compass, CloudSun } from "lucide-react";

export default function EnvironmentCard() {
  return (
    <div style={{
      background: "rgba(253, 251, 247, 0.6)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "16px",
      padding: "1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
      border: "1px solid rgba(255,255,255,0.4)",
      position: "relative",
      zIndex: 10
    }}>
      
      {/* Metrics List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "90px" }}>
            <Sun size={16} color="var(--color-primary-light)" />
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Sunrise</span>
          </div>
          <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>06:12</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "90px" }}>
            <Moon size={16} color="var(--color-primary-light)" />
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Sunset</span>
          </div>
          <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>18:47</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "90px" }}>
            <Compass size={16} color="var(--color-primary-light)" />
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Qibla</span>
          </div>
          <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>293°</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "90px" }}>
            <CloudSun size={16} color="var(--color-primary-light)" />
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Weather</span>
          </div>
          <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>18° clear</span>
        </div>

      </div>

      {/* Compass Graphic Stub */}
      <div style={{
        position: "relative",
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        border: "1px dashed rgba(31, 63, 52, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {/* N / E / S / W anchors */}
        <span style={{ position: "absolute", top: "-15px", fontSize: "0.7rem", color: "var(--color-text-muted)" }}>N</span>
        <span style={{ position: "absolute", right: "-15px", fontSize: "0.7rem", color: "var(--color-text-muted)" }}>E</span>
        <span style={{ position: "absolute", bottom: "-15px", fontSize: "0.7rem", color: "var(--color-text-muted)" }}>S</span>
        <span style={{ position: "absolute", left: "-15px", fontSize: "0.7rem", color: "var(--color-text-muted)" }}>W</span>
        
        {/* Needle pointing to 293 degrees approx */}
        <div style={{
          width: "2px",
          height: "60px",
          background: "transparent",
          position: "relative",
          transform: "rotate(293deg)"
        }}>
          {/* Top needle part (gold) */}
          <div style={{ position: "absolute", top: 0, left: "-3px", width: "8px", height: "30px", background: "#B17D3B", clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}></div>
          {/* Bottom needle part (dark) */}
          <div style={{ position: "absolute", bottom: 0, left: "-3px", width: "8px", height: "30px", background: "var(--color-primary)", clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}></div>
        </div>
      </div>

    </div>
  );
}
