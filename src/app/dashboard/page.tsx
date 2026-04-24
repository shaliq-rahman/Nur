"use client";

import styles from "./page.module.css";
import PrayerList from "@/components/dashboard/PrayerList";
import WeeklyProgress from "@/components/dashboard/WeeklyProgress";
import NextUpWidget from "@/components/dashboard/NextUpWidget";
import EnvironmentCard from "@/components/dashboard/EnvironmentCard";

export default function DashboardToday() {
  return (
    <div className={styles.dashboardContainer}>
      
      {/* Left Column - Today's Overview */}
      <div className={styles.leftColumn}>
        <div className={styles.headerDate}>
          <span>TODAY • FRIDAY, 24 APR 2026</span>
          <div className={styles.livePill}>
            <span className={styles.liveDot}></span>
            LIVE · 2 OF 5 PRAYED
          </div>
        </div>

        <h1 className={styles.greeting}>
          As-salamū &apos;alaykum,<br />
          Ayşe
        </h1>
        <p className={styles.subGreeting}>
          7 Shawwal 1447 • Istanbul, Türkiye - GMT+3
        </p>

        <PrayerList />
        <WeeklyProgress />
      </div>

      {/* Right Column - Next Up & Widgets */}
      <div className={styles.rightColumn}>
        <NextUpWidget />
        <div style={{ flex: 1 }}></div>
        <EnvironmentCard />
      </div>

    </div>
  );
}
