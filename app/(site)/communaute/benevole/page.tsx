import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { benevoleInfo } from '../../../../src/data/benevole';

export default function BenevolePage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>{benevoleInfo.title}</h1>
          <p className={styles.hero_subtitle}>{benevoleInfo.description}</p>
        </div>
      </div>

      {/* Missions */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Nos missions</h2>
        <div className={styles.missions_grid}>
          {benevoleInfo.missions.map((mission, i) => (
            <div key={i} className={styles.mission_card}>
              <div className={styles.mission_icon}>🤝</div>
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Avantages */}
      <div className={`${styles.section} ${styles.section_light}`}>
        <h2 className={styles.section_title}>Ce que nous offrons</h2>
        <div className={styles.avantages_grid}>
          {benevoleInfo.avantages.map((avantage, i) => (
            <div key={i} className={styles.avantage_card}>
              <span className={styles.avantage_check}>✓</span>
              <span>{avantage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Prêt à rejoindre l'aventure ?</h2>
        <p>Votre engagement fait la différence !</p>
        <div className={styles.cta_buttons}>
          <Link href="/contact/nous-joindre" className={styles.btn_primary}>
            Je postule
          </Link>
          <Link href="/contact" className={styles.btn_secondary}>
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}