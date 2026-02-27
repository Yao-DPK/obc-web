"use client"

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Submenu from "./submenu";
import { Icon } from "../icon-base/icon";

interface NavItem {
  label: string;
  submenu?: Array<{ label: string; url?: string }>;
  url?: string;
}

const Navbar: React.FC = () => {
  const [navItems] = useState<Array<NavItem>>([
    { label: "Qui Sommes Nous?", submenu: [{ label: "A Propos de Nous", url: "#" }, { label: "Le Club", url: "#" }], url: "#"},
    { label: "Les Catégories", submenu: [{ label: "Baby", url: "#"}, { label: "Benjamins F&G", url: "#" },{ label: "Minimes F&G", url: "#"}, { label: "Cadets F&G", url: "#" },{ label: "Juniors F&G", url: "#"}, { label: "Espoirs H", url: "#" },{ label: "Seniors H", url: "#"}], url: "/" },
    { label: "S'inscrire", submenu: [{ label: "Adhérer au Club", url: "#" }, { label: "Régler des Frais", url: "#" }], url: "/" },
    { label: "Résultats", submenu: [{ label: "Score", url: "#"}, { label: "Matchs à venir", url: "#" }], url: "/" },
    { label: "Le Camp", submenu: [{ label: "Le Camp Ouvert", url: "#"}, { label: "Le Camp Fermé", url: "#"}], url: "/" },
    { label: "Communauté", submenu: [{ label: "Devenir Bénévole", url: "#"}, { label: "Devenir Partenaire", url: "#"}, {label: "Basket-Ecole", url: "#"}], url: "/" },
    { label: "Boutique", url: "#" },
    { label: "Contact", submenu: [{ label: "Nous Joindre", url:"#" }, { label: "Réseaux Sociaux", url: "#" }], url: "/" },
  ]);

  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector(`.${styles.navbar}`);
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (label: string) => {
    if (isMobile) {
      // On mobile, toggle submenu when clicking
      if (activeSubMenu === label) {
        setActiveSubMenu(null);
      } else {
        setActiveSubMenu(label);
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <div 
        className={styles.menu_toggle} 
        onClick={toggleMobileMenu}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleMobileMenu()}
      >
        <Icon icon="MenuIcon" />
      </div>
      
      <ul className={`${styles.navbar_links} ${isMobileMenuOpen ? styles.active : ''}`}>
        {navItems.map((item) => (
          <li
            key={item.label}
            className={`${styles.navItem} ${
              activeSubMenu === item.label ? styles.active : ""
            }`}
            onMouseEnter={() => !isMobile && setActiveSubMenu(item.label)}
            onMouseLeave={() => !isMobile && setActiveSubMenu(null)}
            onClick={() => handleNavItemClick(item.label)}
          >
            {item.label}

            {/* Render submenu if exists */}
            {item.submenu && (
              <Submenu
                submenu={item.submenu}
                isActive={activeSubMenu === item.label}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;