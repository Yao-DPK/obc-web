import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { basketEcoleInfo } from '../../../../src/data/basket-ecole';

export default function BasketEcolePage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>{basketEcoleInfo.title}</h1>
          <p className={styles.hero_subtitle}>{basketEcoleInfo.description}</p>
        </div>
      </div>

      {/* Objectifs */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Nos objectifs</h2>
        <div className={styles.objectifs_grid}>
          {basketEcoleInfo.objectifs.map((objectif, i) => (
            <div key={i} className={styles.objectif_card}>
              <div className={styles.objectif_icon}>🏀</div>
              <p>{objectif}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tranches d'âge */}
      <div className={`${styles.section} ${styles.section_light}`}>
        <h2 className={styles.section_title}>Les tranches d'âge</h2>
        <div className={styles.tranches_grid}>
          {basketEcoleInfo.tranches.map((tranche, i) => (
            <div key={i} className={styles.tranche_card}>
              <h3 className={styles.tranche_name}>{tranche.name}</h3>
              <p className={styles.tranche_age}>{tranche.age}</p>
              <p className={styles.tranche_horaire}>📅 {tranche.horaire}</p>
              <p className={styles.tranche_coach}>👤 {tranche.coach}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Inscrivez votre enfant</h2>
        <p>Première séance d'essai gratuite !</p>
        <div className={styles.cta_buttons}>
          <Link href="/inscription/adherer" className={styles.btn_primary}>
            Je m'inscris
          </Link>
          <Link href="/contact/nous-joindre" className={styles.btn_secondary}>
            Contacter le responsable
          </Link>
        </div>
      </div>
    </div>
  );
}