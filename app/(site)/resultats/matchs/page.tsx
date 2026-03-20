"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import { matchsAVenir } from '../../../../src/data/resultats';

const categories = ['Toutes', 'Baby', 'Benjamins', 'Minimes', 'Cadets', 'Juniors', 'Seniors'];

export default function MatchsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  const filteredMatchs = selectedCategory === 'Toutes'
    ? matchsAVenir
    : matchsAVenir.filter(m => m.category === selectedCategory);

  const sortedMatchs = [...filteredMatchs].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Matchs à venir</h1>
          <p className={styles.hero_subtitle}>
            Tous les prochains rendez-vous de nos équipes
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

      {/* Calendrier */}
      <div className={styles.calendar}>
        {sortedMatchs.length > 0 ? (
          <div className={styles.matchs_list}>
            {sortedMatchs.map((match) => (
              <div key={match.id} className={styles.match_card}>
                <div className={styles.match_date_box}>
                  <div className={styles.match_day}>{new Date(match.date).toLocaleDateString('fr-FR', { day: 'numeric' })}</div>
                  <div className={styles.match_month}>{new Date(match.date).toLocaleDateString('fr-FR', { month: 'short' })}</div>
                </div>
                <div className={styles.match_info}>
                  <div className={styles.match_opponent}>{match.opponent}</div>
                  <div className={styles.match_details}>
                    <span className={styles.match_time}>🕐 {match.time}</span>
                    <span className={`${styles.match_location} ${match.location === 'home' ? styles.location_home : styles.location_away}`}>
                      {match.location === 'home' ? '🏠 Gymnase Municipal' : `✈️ ${match.arena || 'Extérieur'}`}
                    </span>
                  </div>
                  <div className={styles.match_category}>{match.category}</div>
                </div>
                <div className={styles.match_actions}>
                  <button className={styles.calendar_btn}>📅 Ajouter</button>
                  <button className={styles.notify_btn}>🔔 Rappel</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.no_matchs}>
            <div className={styles.no_matchs_icon}>🏀</div>
            <h3>Aucun match programmé</h3>
            <p>Revenez bientôt pour découvrir les prochaines rencontres</p>
          </div>
        )}
      </div>

      {/* Calendrier mensuel */}
      <div className={styles.monthly_view}>
        <h2 className={styles.monthly_title}>Calendrier mensuel</h2>
        <div className={styles.monthly_grid}>
          {['Mars 2024', 'Avril 2024', 'Mai 2024'].map((month) => {
            const monthMatchs = sortedMatchs.filter(m => 
              new Date(m.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }) === month
            );
            return (
              <div key={month} className={styles.month_card}>
                <h3 className={styles.month_name}>{month}</h3>
                {monthMatchs.length > 0 ? (
                  <ul className={styles.month_matchs}>
                    {monthMatchs.map(m => (
                      <li key={m.id}>
                        <span className={styles.month_date}>{new Date(m.date).getDate()}</span>
                        <span className={styles.month_opponent}>{m.opponent}</span>
                        <span className={styles.month_category}>{m.category}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.month_empty}>Aucun match programmé</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}