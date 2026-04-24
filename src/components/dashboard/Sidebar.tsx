"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Home, BarChart2, Calendar, FileSpreadsheet, Settings } from "lucide-react";
import styles from "@/app/dashboard/layout.module.css";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Today", icon: Home },
  { href: "/dashboard/progress", label: "Progress", icon: BarChart2 },
  { href: "/dashboard/backfill", label: "Backfill", icon: Calendar },
  { href: "/dashboard/sheet", label: "Google Sheet", icon: FileSpreadsheet },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Moon size={24} color="var(--color-primary)" />
          Nur
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.userProfile}>
          <div className={styles.avatar}>A</div>
          <div className={styles.userInfo}>
            <h5>Ayşe K.</h5>
            <p>ayse@gmail.com</p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className={styles.mobileNav}>
        {NAV_ITEMS.slice(0, 4).map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
             <Link 
                key={item.href} 
                href={item.href} 
                className={`${styles.mobileNavItem} ${isActive ? styles.active : ""}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
          );
        })}
      </nav>
    </>
  );
}
