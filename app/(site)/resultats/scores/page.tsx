"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import { scores } from '../../../../src/data/resultats';

const categories = ['Toutes', 'Baby', 'Benjamins', 'Minimes', 'Cadets', 'Juniors', 'Seniors'];

export default function ScoresPage() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const filteredScores = selectedCategory === 'Toutes'
    ? scores
    : scores.filter(m => m.category === selectedCategory);

  const sortedScores = [...filteredScores].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Scores</h1>
          <p className={styles.hero_subtitle}>
            Tous les résultats des matchs de la saison
          </p>
        </div>
      </div>

      {/* Filtres */}
      <div className={styles.filters}>
        <div className={styles.categories_filter}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filter_btn} ${selectedCategory === cat ? styles.filter_btn_active : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tableau des scores */}
      <div className={styles.scores_table_container}>
        <table className={styles.scores_table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Match</th>
              <th>Score</th>
              <th>Catégorie</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {sortedScores.map((match) => (
              <tr key={match.id}>
                <td className={styles.date_cell}>{new Date(match.date).toLocaleDateString('fr-FR')}</td>
                <td className={styles.match_cell}>
                  <span>{match.location === 'home' ? 'OBC' : match.opponent}</span>
                  <span className={styles.vs}>vs</span>
                  <span>{match.location === 'away' ? 'OBC' : match.opponent}</span>
                </td>
                <td className={styles.score_cell}>
                  <span className={match.status === 'win' ? styles.win_score : styles.loss_score}>
                    {match.score?.us} - {match.score?.them}
                  </span>
                </td>
                <td className={styles.category_cell}>{match.category}</td>
                <td className={styles.status_cell}>
                  <span className={`${styles.status_badge} ${match.status === 'win' ? styles.status_win : styles.status_loss}`}>
                    {match.status === 'win' ? 'Victoire 🏆' : 'Défaite'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Résumé par catégorie */}
      <div className={styles.summary}>
        <h2 className={styles.summary_title}>Résumé par catégorie</h2>
        <div className={styles.summary_grid}>
          {['Baby', 'Benjamins', 'Minimes', 'Cadets', 'Juniors', 'Seniors'].map((cat) => {
            const catScores = scores.filter(m => m.category === cat);
            const wins = catScores.filter(m => m.status === 'win').length;
            const losses = catScores.filter(m => m.status === 'loss').length;
            const total = catScores.length;
            
            return (
              <div key={cat} className={styles.summary_card}>
                <h3 className={styles.summary_category}>{cat}</h3>
                <div className={styles.summary_stats}>
                  <div className={styles.summary_stat}>
                    <span className={styles.summary_value}>{wins}</span>
                    <span className={styles.summary_label}>Victoires</span>
                  </div>
                  <div className={styles.summary_stat}>
                    <span className={styles.summary_value}>{losses}</span>
                    <span className={styles.summary_label}>Défaites</span>
                  </div>
                  <div className={styles.summary_stat}>
                    <span className={styles.summary_value}>{total}</span>
                    <span className={styles.summary_label}>Matchs</span>
                  </div>
                </div>
                <div className={styles.summary_ratio}>
                  <div 
                    className={styles.summary_ratio_fill} 
                    style={{ width: `${total ? (wins / total) * 100 : 0}%` }}
                  />
                </div>
                <span className={styles.summary_percentage}>
                  {total ? Math.round((wins / total) * 100) : 0}% de victoires
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}