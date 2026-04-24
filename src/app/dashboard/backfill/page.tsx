"use client";

import styles from "./page.module.css";
import DaySelector from "@/components/dashboard/DaySelector";
import PrayerEditorBox from "@/components/dashboard/PrayerEditorBox";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

export default function BackfillDashboard() {
  return (
    <div className={styles.container}>
      
      {/* Header Area */}
      <div className={styles.header}>
        <div className={styles.eyebrow}>Backfill · Log Past Days</div>
        <h1 className={styles.title}>
          Catch up <span>on missed days</span>
        </h1>
        <div className={styles.subtitle}>
          Mark salahs for days you didn&apos;t log. Changes sync to your sheet instantly.
        </div>
      </div>

      {/* Days Row List */}
      <DaySelector />

      {/* Bottom Layout Matrix */}
      <div className={styles.panelsGrid}>
        
        {/* Editor Box */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.eyebrow}>Editing</div>
              <h2 className={styles.cardTitle}>Thursday, April 23</h2>
            </div>
            <div style={{
              background: "rgba(31, 63, 52, 0.05)",
              color: "var(--color-primary-light)",
              padding: "0.25rem 0.75rem",
              borderRadius: "2rem",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: 500
            }}>
              Saved to sheet
            </div>
          </div>
          <PrayerEditorBox />
        </div>

        {/* Recent Edits / Activity Panel */}
        <div className={styles.card}>
          <div className={styles.cardHeader} style={{marginBottom: "1.5rem"}}>
            <div>
              <div className={styles.eyebrow}>Recent Edits</div>
              <h2 className={styles.cardTitle}>Activity</h2>
            </div>
          </div>
          <ActivityFeed />
        </div>

      </div>

    </div>
  );
}
