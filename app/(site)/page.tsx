"use client";

import React, { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Effet parallax sur le hero
      if (heroRef.current) {
        const heroSpeed = 0.5;
        heroRef.current.style.transform = `translateY(${scrollY * heroSpeed}px)`;
      }

      // Effet fade in au scroll pour chaque section
      const sections = [valuesRef, categoriesRef, newsRef, ctaRef];
      sections.forEach((section) => {
        if (section.current) {
          const rect = section.current.getBoundingClientRect();
          const isVisible = rect.top < windowHeight - 100;
          if (isVisible) {
            section.current.classList.add(styles.visible);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.app_container}>
      {/* Hero Section avec effet parallax */}
      <div className={styles.hero_wrapper}>
        <div ref={heroRef} className={styles.hero}>
          <div className={styles.hero_overlay}></div>
          <div className={styles.hero_content}>
            <div className={styles.logo_container}>
              <Image 
                src="/OBC-nobg.png" 
                alt="OBC Basket Logo" 
                width={150} 
                height={150} 
                className={styles.hero_logo}
                priority
              />
            </div>
            <h1 className={styles.hero_title}>
              BIENVENUE SUR LE SITE OFFICIEL DE L'OBC BASKET
            </h1>
            <p className={styles.hero_subtitle}>
              Passion, Esprit d'équipe et Excellence depuis 1975
            </p>
            <div className={styles.hero_buttons}>
              <Link href="/categories" className={styles.btn_primary}>
                Découvrir nos équipes
              </Link>
              <Link href="/inscription/adherer" className={styles.btn_secondary}>
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section valeurs - transition fluide */}
      <div ref={valuesRef} className={`${styles.section} ${styles.section_values}`}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>Nos valeurs</h2>
          <div className={styles.values_grid}>
            <div className={styles.value_card}>
              <div className={styles.value_icon}>🏀</div>
              <h3>Passion</h3>
              <p>La passion du basket transmise à chaque entraînement</p>
            </div>
            <div className={styles.value_card}>
              <div className={styles.value_icon}>🤝</div>
              <h3>Esprit d'équipe</h3>
              <p>Ensemble on est plus forts, sur et en dehors du terrain</p>
            </div>
            <div className={styles.value_card}>
              <div className={styles.value_icon}>⭐</div>
              <h3>Excellence</h3>
              <p>Former les champions de demain avec rigueur et bienveillance</p>
            </div>
            <div className={styles.value_card}>
              <div className={styles.value_icon}>🎉</div>
              <h3>Convivialité</h3>
              <p>Un club familial où chacun trouve sa place</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section catégories - transition fluide */}
      <div ref={categoriesRef} className={`${styles.section} ${styles.section_categories}`}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>Nos catégories</h2>
          <p className={styles.section_subtitle}>
            Du baby basket aux seniors, une place pour chaque âge et chaque niveau
          </p>
          <div className={styles.categories_grid}>
            {[
              { id: 'baby', name: 'Baby', age: '3-5 ans', icon: '👶' },
              { id: 'benjamins', name: 'Benjamins', age: '9-10 ans', icon: '🧒' },
              { id: 'minimes', name: 'Minimes', age: '11-12 ans', icon: '🏀' },
              { id: 'cadets', name: 'Cadets', age: '13-14 ans', icon: '🔥' },
              { id: 'juniors', name: 'Juniors', age: '15-17 ans', icon: '⭐' },
              { id: 'seniors', name: 'Seniors', age: '21+ ans', icon: '🏆' },
            ].map((cat) => (
              <Link href={`/categories/${cat.id}`} key={cat.id} className={styles.category_card}>
                <div className={styles.category_icon}>{cat.icon}</div>
                <h3 className={styles.category_name}>{cat.name}</h3>
                <p className={styles.category_age}>{cat.age}</p>
                <span className={styles.category_link}>Découvrir →</span>
              </Link>
            ))}
          </div>
          <div className={styles.text_center}>
            <Link href="/categories" className={styles.btn_outline}>
              Voir toutes nos catégories
            </Link>
          </div>
        </div>
      </div>

      {/* Section actualités - transition fluide */}
      <div ref={newsRef} className={`${styles.section} ${styles.section_news}`}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>Actualités</h2>
          <div className={styles.news_grid}>
            <div className={styles.news_card}>
              <div className={styles.news_date}>15 Mars 2024</div>
              <h3 className={styles.news_title}>Portes ouvertes</h3>
              <p className={styles.news_excerpt}>
                Venez découvrir le club et rencontrer nos coachs lors de nos journées portes ouvertes.
              </p>
              <Link href="/actualites/portes-ouvertes" className={styles.news_link}>
                Lire la suite →
              </Link>
            </div>
            <div className={styles.news_card}>
              <div className={styles.news_date}>5 Mars 2024</div>
              <h3 className={styles.news_title}>Victoire des Seniors</h3>
              <p className={styles.news_excerpt}>
                L'équipe seniors s'impose 72-68 face à l'USC. Une belle performance collective !
              </p>
              <Link href="/actualites/victoire-seniors" className={styles.news_link}>
                Lire la suite →
              </Link>
            </div>
            <div className={styles.news_card}>
              <div className={styles.news_date}>28 Février 2024</div>
              <h3 className={styles.news_title}>Stage de printemps</h3>
              <p className={styles.news_excerpt}>
                Inscriptions ouvertes pour le stage de basket pendant les vacances de printemps.
              </p>
              <Link href="/actualites/stage-printemps" className={styles.news_link}>
                Lire la suite →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section CTA inscription - transition fluide */}
      <div ref={ctaRef} className={styles.cta_section}>
        <div className={styles.container}>
          <h2 className={styles.cta_title}>Prêt à rejoindre l'aventure ?</h2>
          <p className={styles.cta_text}>
            Inscriptions ouvertes toute l'année. Première séance d'essai gratuite !
          </p>
          <Link href="/inscription/adherer" className={styles.btn_large}>
            S'inscrire maintenant
          </Link>
        </div>
      </div>
    </div>
  );
}