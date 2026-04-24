"use client";

import styles from "./page.module.css";
import LedgerTable from "@/components/dashboard/LedgerTable";
import SyncMetrics from "@/components/dashboard/SyncMetrics";

export default function GoogleSheetDashboard() {
  return (
    <div className={styles.container}>
      
      {/* Header Area */}
      <div className={styles.headerRow}>
        <div>
          <div className={styles.eyebrow}>Google Drive Sync</div>
          <h1 className={styles.title}>
            Your <i>private ledger</i>
          </h1>
          <div className={styles.subtitle}>
            A sheet in your Drive, one tab per month, one row per day.
          </div>
        </div>
        
        <div className={styles.connectionPill}>
          <span className={styles.dot}></span> Connected
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className={styles.panelsGrid}>
        
        {/* Render the mock visual spreadsheet */}
        <LedgerTable />

        {/* Sync Telemetry panel */}
        <SyncMetrics />
        
      </div>

    </div>
  );
}
