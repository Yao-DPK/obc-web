import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        {/* Logo + Description */}
        <div className={styles.footer_section}>
          <Image 
            src="/OBC-nobg.png" 
            alt="OBC Logo" 
            width={80} 
            height={80} 
            className={styles.footer_logo}
          />
          <p className={styles.footer_description}>
            Club de basket passionné depuis 1975. Formation, compétition et esprit d'équipe.
          </p>
        </div>

        {/* Navigation rapide */}
        <div className={styles.footer_section}>
          <h3 className={styles.footer_title}>Navigation</h3>
          <ul className={styles.footer_links}>
            <li><Link href="/qui-sommes-nous">Qui Sommes Nous</Link></li>
            <li><Link href="/categories">Catégories</Link></li>
            <li><Link href="/resultats">Résultats</Link></li>
            <li><Link href="/camp">Le Camp</Link></li>
            <li><Link href="/boutique">Boutique</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.footer_section}>
          <h3 className={styles.footer_title}>Contact</h3>
          <ul className={styles.footer_contact}>
            <li>
              <span>📍</span>
              123 Rue du Basket, 75000 Paris
            </li>
            <li>
              <span>📞</span>
              <a href="tel:+33123456789">01 23 45 67 89</a>
            </li>
            <li>
              <span>✉️</span>
              <a href="mailto:contact@obc-basket.fr">contact@obc-basket.fr</a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className={styles.footer_section}>
          <h3 className={styles.footer_title}>Suivez-nous</h3>
          <div className={styles.social_links}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.social_icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.social_icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.social_icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.footer_bottom}>
        <p>© {new Date().getFullYear()} OBC Basket - Tous droits réservés</p>
        <div className={styles.footer_bottom_links}>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-confidentialite">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}