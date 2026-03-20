import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { socialNetworks } from '../../../../src/data/contact';

export default function ReseauxPage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Réseaux sociaux</h1>
          <p className={styles.hero_subtitle}>
            Suivez toute l'actualité du club en temps réel
          </p>
        </div>
      </div>

      {/* Grille des réseaux */}
      <div className={styles.social_grid}>
        {socialNetworks.map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_card}
          >
            <div className={styles.social_icon}>{social.icon}</div>
            <div className={styles.social_info}>
              <h3 className={styles.social_name}>{social.name}</h3>
              <p className={styles.social_username}>{social.username}</p>
              <p className={styles.social_followers}>{social.followers} abonnés</p>
            </div>
            <div className={styles.social_link}>Suivre →</div>
          </a>
        ))}
      </div>

      {/* Flux Instagram (simulé) */}
      <div className={styles.instagram_feed}>
        <h2 className={styles.feed_title}>Derniers posts Instagram</h2>
        <div className={styles.feed_grid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={styles.feed_item}>
              <div className={styles.feed_placeholder}>
                <span>📷</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.feed_cta}>
          <a
            href="https://instagram.com/obc-basket"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram_btn}
          >
            Voir plus sur Instagram →
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className={styles.newsletter}>
        <h2 className={styles.newsletter_title}>Ne manquez aucune actualité</h2>
        <p className={styles.newsletter_text}>
          Inscrivez-vous à notre newsletter pour recevoir toutes les infos du club
        </p>
        <form className={styles.newsletter_form}>
          <input
            type="email"
            placeholder="Votre adresse email"
            className={styles.newsletter_input}
          />
          <button type="submit" className={styles.newsletter_btn}>
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}