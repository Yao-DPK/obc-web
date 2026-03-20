"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Données temporaires pour les actualités
const actualites = [
  {
    id: 1,
    title: 'Grande collecte de matériel sportif',
    date: '15 Mars 2024',
    excerpt: 'Le club organise une collecte de matériel sportif pour les enfants défavorisés. Maillots, baskets, ballons... Donnez une seconde vie à votre équipement !',
    content: 'Lorem ipsum...',
    image: '/images/actualites/collecte.jpg',
    category: 'club',
    readTime: '3 min'
  },
  {
    id: 2,
    title: 'Tournoi des familles - Grand succès !',
    date: '5 Mars 2024',
    excerpt: 'Plus de 100 participants au tournoi annuel des familles. Une ambiance conviviale et des matchs acharnés ! Merci à tous les bénévoles.',
    content: 'Lorem ipsum...',
    image: '/images/actualites/tournoi.jpg',
    category: 'evenement',
    readTime: '2 min'
  },
  {
    id: 3,
    title: 'Les U15 champions départementaux !',
    date: '28 Février 2024',
    excerpt: 'Nos U15 remportent le championnat départemental après une saison exceptionnelle. Félicitations aux joueurs et au staff !',
    content: 'Lorem ipsum...',
    image: '/images/actualites/u15-champions.jpg',
    category: 'match',
    readTime: '4 min'
  },
  {
    id: 4,
    title: 'Stage de printemps : inscriptions ouvertes',
    date: '20 Février 2024',
    excerpt: 'Le stage de printemps aura lieu du 8 au 12 avril. Inscriptions ouvertes pour les 8-17 ans. Places limitées !',
    content: 'Lorem ipsum...',
    image: '/images/actualites/stage-printemps.jpg',
    category: 'evenement',
    readTime: '2 min'
  },
  {
    id: 5,
    title: 'Nouveau partenaire : SportPlus',
    date: '15 Février 2024',
    excerpt: 'SportPlus rejoint la grande famille OBC Basket pour les 3 prochaines saisons. Merci pour leur soutien !',
    content: 'Lorem ipsum...',
    image: '/images/actualites/partenaire.jpg',
    category: 'partenariat',
    readTime: '2 min'
  },
  {
    id: 6,
    title: 'Soirée des bénévoles',
    date: '10 Février 2024',
    excerpt: 'Une soirée pour remercier nos 30 bénévoles qui font vivre le club au quotidien.',
    content: 'Lorem ipsum...',
    image: '/images/actualites/benevoles.jpg',
    category: 'club',
    readTime: '3 min'
  }
];

const categories = [
  { id: 'all', name: 'Toutes', icon: '📰' },
  { id: 'club', name: 'Vie du club', icon: '🏀' },
  { id: 'match', name: 'Matchs', icon: '⚔️' },
  { id: 'evenement', name: 'Événements', icon: '🎉' },
  { id: 'partenariat', name: 'Partenariats', icon: '🤝' }
];

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActualites = actualites.filter(actu => {
    const matchesCategory = selectedCategory === 'all' || actu.category === selectedCategory;
    const matchesSearch = actu.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          actu.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Actualités</h1>
          <p className={styles.hero_subtitle}>
            Toute l'actualité du club OBC Basket
          </p>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className={styles.filters_section}>
        <div className={styles.filters_container}>
          {/* Catégories */}
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.category_btn} ${selectedCategory === cat.id ? styles.category_btn_active : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className={styles.category_icon}>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Recherche */}
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Rechercher une actualité..."
              className={styles.search_input}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className={styles.search_icon} width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Grille des actualités */}
      <div className={styles.grid_section}>
        {filteredActualites.length > 0 ? (
          <div className={styles.grid}>
            {filteredActualites.map((actu) => (
              <article key={actu.id} className={styles.article_card}>
                <div className={styles.card_image}>
                  <div className={styles.image_placeholder}>
                    <span>📷</span>
                  </div>
                  <div className={styles.category_badge}>{categories.find(c => c.id === actu.category)?.name}</div>
                </div>
                <div className={styles.card_content}>
                  <div className={styles.card_meta}>
                    <span className={styles.card_date}>📅 {actu.date}</span>
                    <span className={styles.card_read_time}>📖 {actu.readTime}</span>
                  </div>
                  <h2 className={styles.card_title}>{actu.title}</h2>
                  <p className={styles.card_excerpt}>{actu.excerpt}</p>
                  <Link href={`/communaute/actualites/${actu.id}`} className={styles.card_link}>
                    Lire la suite →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.no_results}>
            <div className={styles.no_results_icon}>🔍</div>
            <h3>Aucune actualité trouvée</h3>
            <p>Essayez de modifier votre recherche ou de choisir une autre catégorie.</p>
            <button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }} className={styles.reset_btn}>
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className={styles.newsletter}>
        <div className={styles.newsletter_content}>
          <h2 className={styles.newsletter_title}>Restez informé</h2>
          <p className={styles.newsletter_text}>
            Recevez nos actualités directement dans votre boîte mail
          </p>
          <form className={styles.newsletter_form}>
            <input
              type="email"
              placeholder="Votre email"
              className={styles.newsletter_input}
            />
            <button type="submit" className={styles.newsletter_btn}>
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}