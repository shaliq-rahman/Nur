"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Check } from "lucide-react";
import styles from "./page.module.css";

const LOCATIONS = [
  { id: 1, city: "Dhaka", country: "Bangladesh", timezone: "GMT+6", fajrInfo: "Fajr 04:32" },
  { id: 2, city: "Istanbul", country: "Türkiye", timezone: "GMT+3", fajrInfo: "Fajr 04:54" },
  { id: 3, city: "Kuala Lumpur", country: "Malaysia", timezone: "GMT+8", fajrInfo: "Fajr 05:48" },
  { id: 4, city: "London", country: "United Kingdom", timezone: "GMT+0", fajrInfo: "Fajr 03:21" },
  { id: 5, city: "New York", country: "United States", timezone: "GMT-5", fajrInfo: "Fajr 05:02" },
];

const CALC_METHODS = [
  "Muslim World League",
  "Umm al-Qura",
  "ISNA",
  "Egyptian",
  "Karachi"
];

export default function OnboardingLocation() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState(2); // Default to Istanbul like mock
  const [selectedCalc, setSelectedCalc] = useState("Muslim World League");

  const handleContinue = () => {
    // In actual implementation, we would save this to our backend or Google Sheet
    alert(`Saved Preferences: Location ${LOCATIONS.find(l => l.id === selectedLocation)?.city}, Method: ${selectedCalc}`);
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <div className={styles.stepIndicator}>Step 1 of 2</div>
        
        <h1 className={styles.title}>Where do you<br />pray from?</h1>
        <p className={styles.description}>
          Prayer times depend on your location. We use this to calculate daily Fajr, Dhuhr, Asr, Maghrib, and Isha — and adjust for daylight saving.
        </p>

        <div className={styles.searchContainer}>
          <Search size={20} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Istanbul" 
            className={styles.searchInput} 
          />
        </div>

        <div className={styles.locationCardList}>
          {LOCATIONS.map((loc) => (
            <div 
              key={loc.id} 
              className={`${styles.locationCard} ${selectedLocation === loc.id ? styles.active : ''}`}
              onClick={() => setSelectedLocation(loc.id)}
            >
              <div className={styles.locInfo}>
                <div className={styles.locIcon} style={selectedLocation === loc.id ? { background: "var(--color-primary)", color: "white" } : {}}>
                  <MapPin size={18} />
                </div>
                <div className={styles.locDetails}>
                  <h4>{loc.city}, {loc.country}</h4>
                  <p>{loc.timezone} • {loc.fajrInfo}</p>
                </div>
              </div>
              {selectedLocation === loc.id && (
                <div style={{ color: "var(--color-primary)" }}><Check size={20} /></div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.calcSection}>
          <div className={styles.calcTitle}>Calculation Method</div>
          <div className={styles.calcBadgeList}>
            {CALC_METHODS.map((method) => (
              <button 
                key={method}
                className={`${styles.calcBadge} ${selectedCalc === method ? styles.active : ''}`}
                onClick={() => setSelectedCalc(method)}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.skipButton}>Skip</button>
          <button className={styles.continueButton} onClick={handleContinue}>
            Continue <span>→</span>
          </button>
        </div>
      </div>

      <div className={styles.rightPane}>
        {/* Abstract globe mock to represent the image visually */}
        <div style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#82A48D",
          position: "relative",
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
        }}>
          {/* Faux map shapes matching the design aesthetic remotely */}
          <div style={{ position: "absolute", background: "#4A6E60", width: "120px", height: "80px", top: "40%", left: "20%", borderRadius: "40% 60% 70% 30%", transform: "rotate(-10deg)" }}></div>
          <div style={{ position: "absolute", background: "#4A6E60", width: "180px", height: "100px", top: "50%", left: "40%", borderRadius: "60% 40% 30% 70%", transform: "rotate(10deg)" }}></div>
          <div style={{ position: "absolute", background: "#4A6E60", width: "80px", height: "40px", top: "75%", left: "30%", borderRadius: "50% 50% 50% 50%", transform: "rotate(5deg)" }}></div>
          
          <MapPin size={32} color="#D8C3A4" style={{ position: "absolute", top: "35%", left: "55%" }} fill="var(--color-primary)" />
        </div>
        
        {/* Floating Timezone card */}
        <div style={{
          position: "absolute",
          bottom: "4rem",
          right: "4rem",
          background: "white",
          padding: "1.5rem",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}>
          <div className={styles.calcTitle} style={{marginBottom: "0.5rem"}}>Your Timezone</div>
          <h3 style={{fontSize: "1.5rem", color: "var(--color-primary)", marginBottom: "0.25rem"}}>Istanbul, TR</h3>
          <p style={{fontSize: "0.85rem", color: "var(--color-text-muted)"}}>Europe/Istanbul • GMT+3<br/><br/>Sunrise 06:12 • Sunset 19:42</p>
        </div>
      </div>
    </div>
  );
}
