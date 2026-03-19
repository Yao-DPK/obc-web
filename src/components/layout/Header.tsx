"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '../navbar/navbar';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.header_container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logo_link}>
            <Image 
              src="/OBC-nobg.png" 
              alt="OBC Logo" 
              width={100} 
              height={100} 
              className={styles.logo_image}
              priority
            />
            {/* <span className={styles.logo_text}>OBC Basket</span> */}
          </Link>
        </div>

        {/* Navigation desktop */}
        <div className={styles.nav_desktop}>
          <Navbar />
        </div>

        {/* Actions header */}
        <div className={styles.header_actions}>
          {/* Recherche */}
          <button className={styles.icon_btn} aria-label="Rechercher">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Menu utilisateur */}
          <div className={styles.user_menu_container} ref={userMenuRef}>
            {isAuthenticated ? (
              <>
                <button 
                  className={styles.user_btn}
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  aria-label="Menu utilisateur"
                  aria-expanded={isUserMenuOpen}
                >
                  <div className={styles.avatar}>
                    <span>👤</span>
                  </div>
                  <span className={styles.user_name}>Jean Dupont</span>
                  <svg 
                    className={`${styles.arrow} ${isUserMenuOpen ? styles.arrow_up : ''}`}
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className={styles.user_dropdown}>
                    <Link href="/profil" className={styles.dropdown_item}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Mon profil
                    </Link>
                    <Link href="/mes-reservations" className={styles.dropdown_item}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M8 2V6M16 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Mes réservations
                    </Link>
                    <button className={styles.dropdown_item}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Déconnexion
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className={styles.auth_btns}>
                <Link href="/connexion" className={styles.login_btn}>
                  Se connecter
                </Link>
                <Link href="/inscription" className={styles.register_btn}>
                  S'inscrire
                </Link>
              </div>
            )}
          </div>

          {/* Bouton hamburger - visible seulement quand menu fermé */}
          {!isMobileMenuOpen && (
            <button 
              className={styles.hamburger_btn}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </div>

      {/* Menu mobile avec overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className={styles.mobile_overlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className={styles.mobile_menu}>
            <div className={styles.mobile_menu_header}>
              <Image 
                src="/OBC-nobg.png" 
                alt="OBC Logo" 
                width={60} 
                height={60} 
                className={styles.mobile_logo}
              />
              <button 
                className={styles.close_btn}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <Navbar mobile onClose={() => setIsMobileMenuOpen(false)} />
            
            {!isAuthenticated && (
              <div className={styles.mobile_auth}>
                <Link 
                  href="/connexion" 
                  className={styles.mobile_login}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Se connecter
                </Link>
                <Link 
                  href="/inscription" 
                  className={styles.mobile_register}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
}