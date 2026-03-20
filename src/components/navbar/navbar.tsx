"use client"

import React, { useState } from "react";
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { navbar_items } from "./navbar_data";

interface NavbarProps {
  mobile?: boolean;
  onClose?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobile, onClose }) => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Version mobile
  if (mobile) {
    return (
      <nav className={styles.mobile_nav}>
        <ul className={styles.mobile_nav_list}>
          {navbar_items.map((item) => {
            const [isOpen, setIsOpen] = useState(false);
            const isActive = pathname.startsWith(item.page || '');

            return (
              <li key={item.label} className={styles.mobile_nav_item}>
                <div className={styles.mobile_item_wrapper}>
                  <Link
                    href={item.page || item.url || '#'}
                    className={`${styles.mobile_link} ${isActive ? styles.mobile_active : ''}`}
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                      } else {
                        if (onClose) onClose();
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <svg 
                        className={`${styles.mobile_arrow} ${isOpen ? styles.mobile_arrow_open : ''}`}
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none"
                      >
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </Link>
                </div>

                {item.submenu && isOpen && (
                  <ul className={styles.mobile_submenu}>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <Link 
                          href={subItem.url || '#'} 
                          className={`${styles.mobile_submenu_link} ${
                            pathname === subItem.url ? styles.mobile_submenu_link_active : ""
                          }`}
                          onClick={onClose}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  // Version desktop
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_links}>
        {navbar_items.map((item) => (
          <li
            key={item.label}
            className={`${styles.navItem} ${
              pathname.startsWith(item.page || '') ? styles.active : ""
            }`}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link 
              href={item.page || item.url || '#'} 
              className={styles.navLink}
            >
              {item.label}
              {item.submenu && (
                <svg 
                  className={styles.dropdown_arrow}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </Link>

            {/* Petit sous-menu au survol (optionnel) */}
            {hoveredItem === item.label && item.submenu && (
              <div className={styles.hover_submenu}>
                {item.submenu.map((sub) => (
                  <Link 
                    key={sub.label}
                    href={sub.url || '#'}
                    className={styles.hover_submenu_link}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;