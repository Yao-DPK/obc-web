"use client"

import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Submenu from "./submenu";
import { Icon } from "../icon-base/icon";
import { usePathname } from 'next/navigation';
import SubNavbar from "./subnavbar";
import Link from "next/link";

interface NavbarProps {
  mobile?: boolean;
  onClose?: () => void;
}

interface NavItem {
  label: string;
  submenu?: Array<{ label: string; url?: string }>;
  url?: string;
  page?: string;
}

const Navbar: React.FC<NavbarProps> = ({ mobile, onClose }) => {
  const pathname = usePathname();

  const [navItems] = useState<Array<NavItem>>([
    { 
      label: "Qui Sommes Nous?", 
      page: "/qui-sommes-nous",
      submenu: [
        { label: "A Propos de Nous", url: "/qui-sommes-nous/a-propos" }, 
        { label: "Le Club", url: "/qui-sommes-nous/le-club" }
      ]
    },
    { 
      label: "Les Catégories", 
      page: "/categories",
      submenu: [
        { label: "Baby", url: "/categories/baby"},
        { label: "Benjamins", url: "/categories/benjamins" },
        { label: "Minimes", url: "/categories/minimes"},
        { label: "Cadets", url: "/categories/cadets" },
        { label: "Juniors", url: "/categories/juniors"},
        { label: "Espoirs", url: "/categories/espoirs" },
        { label: "Seniors", url: "/categories/seniors"}
      ]
    },
    { 
      label: "S'inscrire", 
      page: "/inscription",
      submenu: [
        { label: "Adhérer au Club", url: "/inscription/adherer" }, 
        { label: "Régler des Frais", url: "/inscription/paiement" }
      ]
    },
    { 
      label: "Résultats", 
      page: "/resultats",
      submenu: [
        { label: "Scores", url: "/resultats/scores"},
        { label: "Matchs à venir", url: "/resultats/matchs" },
        { label: "Histoire", url: "/resultats/histoire" }
      ]
    },
    { 
      label: "Le Camp", 
      page: "/camp",
      submenu: [
        { label: "Camp Ouvert", url: "/camp/ouvert"},
        { label: "Camp Fermé", url: "/camp/ferme"}
      ]
    },
    { 
      label: "Communauté", 
      page: "/communaute",
      submenu: [
        { label: "Devenir Bénévole", url: "/communaute/benevole"},
        { label: "Devenir Partenaire", url: "/communaute/partenaire"},
        { label: "Basket-Ecole", url: "/communaute/basket-ecole"}
      ]
    },
    { 
      label: "Boutique", 
      page: "/boutique",
      url: "/boutique" 
    },
    { 
      label: "Contact", 
      page: "/contact",
      submenu: [
        { label: "Nous Joindre", url: "/contact/nous-joindre" },
        { label: "Réseaux Sociaux", url: "/contact/reseaux" }
      ]
    },
  ]);

  const [activeParent, setActiveParent] = useState<string | null>(null);
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

  // Set active parent based on current path
  useEffect(() => {
    const currentItem = navItems.find(item => 
      pathname.startsWith(item.page || '') || 
      item.submenu?.some(sub => pathname.startsWith(sub.url || ''))
    );
    if (currentItem) {
      setActiveParent(currentItem.label);
    }
  }, [pathname, navItems]);

  const handleNavItemClick = (item: NavItem) => {
    if (mobile || isMobile) {
      // Sur mobile : toggle submenu
      if (item.submenu) {
        setActiveParent(activeParent === item.label ? null : item.label);
      } else {
        // Si pas de submenu, fermer et naviguer
        if (onClose) onClose();
      }
    } else {
      // Sur desktop : afficher subnavbar
      setActiveParent(item.label);
    }
  };

  const handleNavItemHover = (label: string | null) => {
    if (!mobile && !isMobile) {
      setActiveParent(label);
    }
  };

  const currentActiveItem = navItems.find(item => item.label === activeParent);

  // Version mobile (plein écran)
  if (mobile) {
    return (
      <nav className={styles.mobile_nav}>
        <ul className={styles.mobile_nav_list}>
          {navItems.map((item) => (
            <li key={item.label} className={styles.mobile_nav_item}>
              <button
                className={`${styles.mobile_nav_button} ${
                  activeParent === item.label ? styles.mobile_nav_button_active : ""
                }`}
                onClick={() => handleNavItemClick(item)}
              >
                <span>{item.label}</span>
                {item.submenu && (
                  <svg 
                    className={`${styles.mobile_arrow} ${
                      activeParent === item.label ? styles.mobile_arrow_open : ""
                    }`}
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </button>

              {item.submenu && activeParent === item.label && (
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
          ))}
        </ul>
      </nav>
    );
  }

  // Version desktop
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_links}>
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`${styles.navItem} ${
                activeParent === item.label ? styles.active : ""
              }`}
              onMouseEnter={() => handleNavItemHover(item.label)}
              onMouseLeave={() => handleNavItemHover(null)}
            >
              <Link 
                href={item.page || item.url || '#'} 
                className={styles.navLink}
                onClick={() => handleNavItemClick(item)}
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
            </li>
          ))}
        </ul>
      </nav>

      {/* Sub-navbar pour desktop */}
      {currentActiveItem?.submenu && (
        <SubNavbar
          submenu={currentActiveItem.submenu}
          isVisible={!!activeParent && !mobile && !isMobile}
          parentLabel={currentActiveItem.label}
        />
      )}
    </>
  );
};

export default Navbar;