import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function CommunautePage() {
  const sections = [
    {
      id: 'actualites',
      title: 'Actualités',
      description: 'Toute l\'actualité du club : résultats, événements, vie du club',
      icon: '📰',
      color: '#37B311',
      link: '/communaute/actualites',
      bgImage: '/images/communaute/actualites-bg.jpg'
    },
    {
      id: 'benevole',
      title: 'Devenir Bénévole',
      description: 'Rejoignez notre équipe de passionnés et contribuez à la vie du club',
      icon: '🤝',
      color: '#FAD141',
      link: '/communaute/benevole',
      bgImage: '/images/communaute/benevole-bg.jpg'
    },
    {
      id: 'partenaire',
      title: 'Devenir Partenaire',
      description: 'Soutenez le club et bénéficiez d\'une visibilité unique',
      icon: '💼',
      color: '#001E16',
      link: '/communaute/partenaire',
      bgImage: '/images/communaute/partenaire-bg.jpg'
    },
    {
      id: 'basket-ecole',
      title: 'Basket-École',
      description: 'L\'école de basket pour les enfants de 3 à 11 ans',
      icon: '🏀',
      color: '#37B311',
      link: '/communaute/basket-ecole',
      bgImage: '/images/communaute/basket-ecole-bg.jpg'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Communauté</h1>
          <p className={styles.hero_subtitle}>
            Ensemble, faisons vivre notre club
          </p>
        </div>
      </div>

      {/* Grille des sections */}
      <div className={styles.grid}>
        {sections.map((section) => (
          <Link href={section.link} key={section.id} className={styles.card}>
            <div 
              className={styles.card_bg} 
              style={{ backgroundImage: `url(${section.bgImage})` }}
            />
            <div className={styles.card_overlay} style={{ background: `linear-gradient(135deg, ${section.color}, ${section.color}cc)` }} />
            <div className={styles.card_content}>
              <div className={styles.card_icon}>{section.icon}</div>
              <h2 className={styles.card_title}>{section.title}</h2>
              <p className={styles.card_desc}>{section.description}</p>
              <span className={styles.card_link}>Découvrir →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Chiffres clés */}
      <div className={styles.stats}>
        <h2 className={styles.stats_title}>Le club en chiffres</h2>
        <div className={styles.stats_grid}>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>250+</div>
            <div className={styles.stat_label}>Licenciés</div>
          </div>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>15</div>
            <div className={styles.stat_label}>Équipes</div>
          </div>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>30</div>
            <div className={styles.stat_label}>Bénévoles</div>
          </div>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>12</div>
            <div className={styles.stat_label}>Partenaires</div>
          </div>
        </div>
      </div>
    </div>
  );
}