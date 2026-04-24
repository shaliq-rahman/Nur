"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";
import StatCard from "@/components/dashboard/StatCard";
import MonthCalendar from "@/components/dashboard/MonthCalendar";
import PerPrayerBars from "@/components/dashboard/PerPrayerBars";

export default function ProgressDashboard() {
  return (
    <div className={styles.progressContainer}>
      
      {/* Header Area */}
      <div className={styles.header}>
        <div>
          <div className={styles.eyebrow}>Progress</div>
          <h1 className={styles.monthTitle}>April 2026</h1>
          <div className={styles.monthSubtitle}>
            Shawwal 1447 • synced to your Drive sheet · 2 min ago
          </div>
        </div>

        <div className={styles.monthNav}>
          <button className={styles.navBtn}>
            <ChevronLeft size={16} style={{marginRight: "0.25rem"}} /> Mar
          </button>
          <button className={styles.navBtn}>
            May <ChevronRight size={16} style={{marginLeft: "0.25rem"}} />
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className={styles.statsGrid}>
        <StatCard 
          title="Completion" 
          value={<>87<span style={{fontSize: "1.5rem", opacity: 0.8}}>%</span></>}
          subtext="103 of 118" 
        />
        <StatCard 
          title="Streak" 
          value="12" 
          subtext="days in a row" 
        />
        <StatCard 
          title="Best Prayer" 
          value={<span style={{fontFamily: "var(--font-serif)", fontWeight: 400}}>Fajr</span>}
          subtext="20/24 on time" 
        />
        <StatCard 
          title="This Month" 
          value="103" 
          subtext="total prayers" 
        />
      </div>

      {/* 2-Column Panels Area */}
      <div className={styles.panelsGrid}>
        
        {/* Left Panel: Calendar Heating Map */}
        <div className={styles.panelCard}>
          <div className={styles.panelHeader}>
            <div>
              <div className={styles.panelEyebrow}>Month View</div>
              <h2 className={styles.panelTitle}>Each day • 5 prayers</h2>
            </div>
            
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <span className={styles.dotFilled}></span> done
              </div>
              <div className={styles.legendItem}>
                <span className={styles.dotEmpty}></span> missed
              </div>
            </div>
          </div>
          
          <MonthCalendar />
        </div>

        {/* Right Panel: Per Prayer Breakdown */}
        <div className={styles.panelCard}>
          <div className={styles.panelHeader} style={{marginBottom: "1rem"}}>
            <div>
              <div className={styles.panelEyebrow}>Per Prayer</div>
              <h2 className={styles.panelTitle}>Out of 24 days</h2>
            </div>
          </div>
          
          <PerPrayerBars />
        </div>

      </div>

    </div>
  );
}
