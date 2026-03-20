import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { partenaireInfo } from '../../../../src/data/partenaire';

export default function PartenairePage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>{partenaireInfo.title}</h1>
          <p className={styles.hero_subtitle}>{partenaireInfo.description}</p>
        </div>
      </div>

      {/* Formules */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Nos formules</h2>
        <div className={styles.formules_grid}>
          {partenaireInfo.formules.map((formule, i) => (
            <div key={i} className={`${styles.formule_card} ${i === 2 ? styles.formule_card_popular : ''}`}>
              {i === 2 && <div className={styles.popular_badge}>Populaire</div>}
              <h3 className={styles.formule_name}>{formule.name}</h3>
              <div className={styles.formule_price}>{formule.price}€<span>/an</span></div>
              <ul className={styles.formule_benefits}>
                {formule.benefits.map((benefit, j) => (
                  <li key={j}>✓ {benefit}</li>
                ))}
              </ul>
              <Link href="/contact/nous-joindre" className={styles.formule_btn}>
                Nous contacter
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Devenez partenaire du club</h2>
        <p>Un accompagnement personnalisé pour votre partenariat</p>
        <Link href="/contact/nous-joindre" className={styles.btn_primary}>
          Demander un devis
        </Link>
      </div>
    </div>
  );
}