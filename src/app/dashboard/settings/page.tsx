"use client";

import { useState } from "react";
import styles from "./page.module.css";
import SettingRow from "@/components/dashboard/SettingRow";
import Toggle from "@/components/ui/Toggle";

export default function SettingsDashboard() {
  const [toggles, setToggles] = useState({
    autoDst: true,
    adhan: true,
    dhikr: false,
    arabic: true
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSignOut = () => {
    alert("Signing out... (bypassed local route simulation)");
    window.location.href = "/login";
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.eyebrow}>Settings</div>
      <h1 className={styles.title}>
        Your <i>preferences</i>
      </h1>

      {/* Spanning Profile Card */}
      <div className={`${styles.card} ${styles.profileCard}`}>
        <div className={styles.profileInfo}>
          <div className={styles.avatar}>A</div>
          <div>
            <div className={styles.profileName}>Ayşe Kaya</div>
            <div className={styles.profileEmail}>ayse.kaya@gmail.com</div>
            <div className={styles.pillGroup}>
              <span className={styles.pill}>Google · Connected</span>
              <span className={styles.pill}>Since Jan 2026</span>
            </div>
          </div>
        </div>
        <button className={styles.btnSignout} onClick={handleSignOut}>
          Sign out
        </button>
      </div>

      {/* Settings Grid */}
      <div className={styles.settingsGrid}>
        
        {/* Left Column Settings */}
        <div className={styles.card}>
          <SettingRow 
            title="Location" 
            subtitle="Istanbul, Türkiye - GMT+3" 
            showChevron 
          />
          <SettingRow 
            title="Calculation method" 
            subtitle="Muslim World League" 
            showChevron 
          />
          <SettingRow 
            title="Madhab (Asr)" 
            subtitle="Standard (Shafi'i, Maliki, Hanbali)" 
            showChevron 
          />
          <div style={{ padding: "1rem 0 0 0" }}>
            <SettingRow 
              title="Automatic DST" 
              subtitle="Adjust Fajr and Isha for daylight saving" 
              trailing={<Toggle active={toggles.autoDst} onClick={() => handleToggle('autoDst')} />} 
            />
          </div>
        </div>

        {/* Right Column Settings */}
        <div className={styles.card}>
          <SettingRow 
            title="Adhan notifications" 
            subtitle="A gentle chime at each prayer time" 
            trailing={<Toggle active={toggles.adhan} onClick={() => handleToggle('adhan')} />} 
          />
          <SettingRow 
            title="Post-prayer dhikr" 
            subtitle="Tasbih counter after marking prayed" 
            trailing={<Toggle active={toggles.dhikr} onClick={() => handleToggle('dhikr')} />} 
          />
          <SettingRow 
            title="Arabic names" 
            subtitle="Show alongside English" 
            trailing={<Toggle active={toggles.arabic} onClick={() => handleToggle('arabic')} />} 
          />
          <div style={{ padding: "1rem 0 0 0" }}>
            <SettingRow 
              title="Theme" 
              subtitle="Serene (soft greens)" 
              showChevron 
            />
          </div>
        </div>

      </div>

      {/* Bottom Quote Box */}
      <div className={styles.quoteBox}>
        <h3 className={styles.quoteText}>
          &quot;The prayer is the pillar of the faith — whoever establishes it, establishes the faith.&quot;
        </h3>
        <span className={styles.quoteAuthor}>— Narrated in Bayhaqi</span>
      </div>

    </div>
  );
}
