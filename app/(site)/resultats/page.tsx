import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { matchsAVenir, scores } from '../../../src/data/resultats';

export default function ResultatsPage() {
  // Derniers scores (3 derniers matchs)
  const derniersScores = [...scores].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  // Prochains matchs (3 prochains)
  const prochainsMatchs = [...matchsAVenir].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  ).slice(0, 3);

  // Statistiques
  const stats = {
    victoires: scores.filter(m => m.status === 'win').length,
    defaites: scores.filter(m => m.status === 'loss').length,
    totalPoints: scores.reduce((acc, m) => acc + (m.score?.us || 0), 0),
    avgPoints: Math.round(scores.reduce((acc, m) => acc + (m.score?.us || 0), 0) / scores.length)
  };

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Résultats</h1>
          <p className={styles.hero_subtitle}>
            Suivez les performances de toutes nos équipes
          </p>
        </div>
      </div>

      {/* Statistiques */}
      <div className={styles.stats_section}>
        <div className={styles.stats_grid}>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>{stats.victoires}</div>
            <div className={styles.stat_label}>Victoires</div>
          </div>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>{stats.defaites}</div>
            <div className={styles.stat_label}>Défaites</div>
          </div>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>{stats.totalPoints}</div>
            <div className={styles.stat_label}>Points marqués</div>
          </div>
          <div className={styles.stat_card}>
            <div className={styles.stat_number}>{stats.avgPoints}</div>
            <div className={styles.stat_label}>Moyenne/match</div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className={styles.sections_container}>
        {/* Derniers scores */}
        <div className={styles.section}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title}>Derniers résultats</h2>
            <Link href="/resultats/scores" className={styles.section_link}>
              Voir tous les scores →
            </Link>
          </div>
          <div className={styles.scores_list}>
            {derniersScores.map((match) => (
              <div key={match.id} className={styles.score_card}>
                <div className={styles.score_date}>{new Date(match.date).toLocaleDateString('fr-FR')}</div>
                <div className={styles.score_match}>
                  <span className={styles.score_team}>
                    {match.location === 'home' ? 'OBC' : match.opponent}
                  </span>
                  <span className={styles.score_vs}>vs</span>
                  <span className={styles.score_team}>
                    {match.location === 'away' ? 'OBC' : match.opponent}
                  </span>
                </div>
                <div className={`${styles.score_result} ${match.status === 'win' ? styles.score_win : styles.score_loss}`}>
                  {match.score?.us} - {match.score?.them}
                </div>
                <div className={styles.score_category}>{match.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prochains matchs */}
        <div className={styles.section}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title}>Prochains matchs</h2>
            <Link href="/resultats/matchs" className={styles.section_link}>
              Voir tous les matchs →
            </Link>
          </div>
          <div className={styles.matchs_list}>
            {prochainsMatchs.map((match) => (
              <div key={match.id} className={styles.match_card}>
                <div className={styles.match_date}>{new Date(match.date).toLocaleDateString('fr-FR')}</div>
                <div className={styles.match_info}>
                  <span className={styles.match_time}>{match.time}</span>
                  <span className={styles.match_opponent}>{match.opponent}</span>
                  <span className={`${styles.match_location} ${match.location === 'home' ? styles.match_home : styles.match_away}`}>
                    {match.location === 'home' ? '🏠 Domicile' : '✈️ Extérieur'}
                  </span>
                </div>
                <div className={styles.match_category}>{match.category}</div>
                <button className={styles.match_btn}>Ajouter au calendrier</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}