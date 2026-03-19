import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function QuiSommesNousPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.hero_title}>Qui Sommes-Nous?</h1>
        <p className={styles.hero_subtitle}>
          Découvrez l'histoire, les valeurs et l'âme de l'OBC Basket
        </p>
      </section>

      {/* Overview Cards */}
      <section className={styles.overview}>
        <div className={styles.card}>
          <div className={styles.card_icon}>🏀</div>
          <h2>Une Passion Depuis 1975</h2>
          <p>
            Fondé en 1975, l'OBC Basket c'est près de 50 ans d'histoire, 
            de passion et de transmission des valeurs du basketball.
          </p>
          <Link href="/a-propos" className={styles.card_link}>
            En savoir plus →
          </Link>
        </div>

        <div className={styles.card}>
          <div className={styles.card_icon}>🤝</div>
          <h2>Un Club Familial</h2>
          <p>
            Plus qu'un club, une famille. 300 licenciés, 50 bénévoles, 
            et des valeurs de partage et de respect qui nous unissent.
          </p>
          <Link href="/le-club" className={styles.card_link}>
            Découvrir le club →
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className={styles.stats}>
        <div className={styles.stat_item}>
          <span className={styles.stat_number}>1975</span>
          <span className={styles.stat_label}>Année de création</span>
        </div>
        <div className={styles.stat_item}>
          <span className={styles.stat_number}>300+</span>
          <span className={styles.stat_label}>Licenciés</span>
        </div>
        <div className={styles.stat_item}>
          <span className={styles.stat_number}>15</span>
          <span className={styles.stat_label}>Équipes</span>
        </div>
        <div className={styles.stat_item}>
          <span className={styles.stat_number}>50+</span>
          <span className={styles.stat_label}>Bénévoles</span>
        </div>
      </section>

      {/* Navigation to Subpages */}
      <section className={styles.navigation}>
        <h2>Explorez Notre Histoire</h2>
        <div className={styles.nav_links}>
          <Link href="/a-propos" className={styles.nav_link_card}>
            <h3>À Propos de Nous</h3>
            <p>Notre histoire, nos valeurs, notre mission</p>
            <span className={styles.arrow}>→</span>
          </Link>
          <Link href="/le-club" className={styles.nav_link_card}>
            <h3>Le Club</h3>
            <p>Notre organisation, nos équipes, nos installations</p>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}