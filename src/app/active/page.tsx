"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import styles from "./page.module.css";

export default function CurrentPrayer() {
  const router = useRouter();

  const handleMarkPrayed = () => {
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      
      {/* Visual background layers */}
      <div className={styles.sun}></div>
      <div className={styles.mountainBase}>
        <div className={styles.layer1}></div>
        <div className={styles.layer2}></div>
        <div className={styles.layer3}></div>
      </div>

      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => router.back()}>
          <ChevronLeft size={18} />
          Back
        </button>
        <div className={styles.statusPill}>
          <span style={{ color: "#548866" }}>●</span> CURRENT WINDOW
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.eyebrow}>MAGHRIB · المغرب</div>
        
        <div className={styles.titleGroup}>
          <h1 className={styles.englishTitle}>Maghrib</h1>
          <span className={styles.arabicTitle}>المغرب</span>
        </div>

        <p className={styles.poem}>
          The light is folding. Pray now — the window is short, closing as the first stars appear in the east.
        </p>
      </div>

      <div className={styles.footer}>
        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>Begins</span>
          <span className={styles.metricValue}>18:47</span>
        </div>
        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>Ends</span>
          <span className={styles.metricValue}>20:12</span>
        </div>
        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>Closes In</span>
          <span className={styles.metricValue}>1h 12m <span style={{fontSize:"0.8rem", color:"rgba(255,255,255,0.7)"}}>24s</span></span>
        </div>
        <div className={styles.metricBlock}>
          <span className={styles.metricLabel}>Qibla</span>
          <span className={styles.metricValue}>293° <span style={{fontSize:"0.8rem", color:"rgba(255,255,255,0.7)"}}>NW</span></span>
        </div>
        
        <button className={styles.actionButton} onClick={handleMarkPrayed}>
          Mark as prayed <span>→</span>
        </button>
      </div>

    </div>
  );
}
