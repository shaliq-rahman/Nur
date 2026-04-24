"use client";

import { ChevronRight } from "lucide-react";
import React from "react";

interface SettingRowProps {
  title: string;
  subtitle: string;
  trailing?: React.ReactNode;
  showChevron?: boolean;
}

export default function SettingRow({ title, subtitle, trailing, showChevron }: SettingRowProps) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 0",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", paddingRight: "1rem" }}>
        <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-text)" }}>
          {title}
        </span>
        <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
          {subtitle}
        </span>
      </div>
      
      <div style={{ display: "flex", alignItems: "center" }}>
        {trailing}
        {showChevron && (
          <ChevronRight size={16} color="var(--color-text-muted)" style={{ marginLeft: "0.5rem" }} />
        )}
      </div>
    </div>
  );
}
