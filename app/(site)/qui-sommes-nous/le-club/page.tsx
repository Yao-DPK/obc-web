import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function LeClubPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.page_title}>Le Club</h1>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.stat_card}>
          <div className={styles.stat_value}>300+</div>
          <div className={styles.stat_label}>Licenciés</div>
        </div>
        <div className={styles.stat_card}>
          <div className={styles.stat_value}>15</div>
          <div className={styles.stat_label}>Équipes</div>
        </div>
        <div className={styles.stat_card}>
          <div className={styles.stat_value}>50+</div>
          <div className={styles.stat_label}>Bénévoles</div>
        </div>
        <div className={styles.stat_card}>
          <div className={styles.stat_value}>8</div>
          <div className={styles.stat_label}>Entraîneurs</div>
        </div>
      </section>

      {/* Teams Section */}
      <section className={styles.teams}>
        <h2>Nos Équipes</h2>
        
        <div className={styles.teams_grid}>
          <div className={styles.team_category}>
            <h3>Catégories Jeunes</h3>
            <ul className={styles.team_list}>
              <li>Baby (3-5 ans) - 15 enfants</li>
              <li>U7 (6-7 ans) - 20 enfants</li>
              <li>U9 (8-9 ans) - 25 enfants</li>
              <li>U11 (10-11 ans) - 30 enfants</li>
              <li>U13 (12-13 ans) - 35 enfants</li>
              <li>U15 (14-15 ans) - 40 adolescents</li>
              <li>U17 (16-17 ans) - 35 adolescents</li>
            </ul>
          </div>

          <div className={styles.team_category}>
            <h3>Équipes Seniors</h3>
            <ul className={styles.team_list}>
              <li>Seniors Masculins 1 (Régional)</li>
              <li>Seniors Masculins 2 (Départemental)</li>
              <li>Seniors Féminines 1 (Régional)</li>
              <li>Seniors Féminines 2 (Départemental)</li>
              <li>Équipe Loisirs (Mixte)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className={styles.facilities}>
        <h2>Nos Installations</h2>
        
        <div className={styles.facilities_grid}>
          <div className={styles.facility_card}>
            <div className={styles.facility_icon}>🏟️</div>
            <h3>Gymnase Principal</h3>
            <p>2 terrains couverts, tribunes de 500 places, tableau d'affichage électronique</p>
          </div>

          <div className={styles.facility_card}>
            <div className={styles.facility_icon}>💪</div>
            <h3>Salle de Musculation</h3>
            <p>Équipement complet pour la préparation physique des joueurs</p>
          </div>

          <div className={styles.facility_card}>
            <div className={styles.facility_icon}>🏋️</div>
            <h3>Espace Formation</h3>
            <p>Salle de réunion et de vidéo pour l'analyse des matchs</p>
          </div>

          <div className={styles.facility_card}>
            <div className={styles.facility_icon}>🅿️</div>
            <h3>Club House</h3>
            <p>Espace de convivialité pour les joueurs et les familles</p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className={styles.schedule}>
        <h2>Horaires d'Entraînement</h2>
        
        <div className={styles.schedule_table}>
          <table>
            <thead>
              <tr>
                <th>Jour</th>
                <th>Créneau</th>
                <th>Catégorie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>17h30 - 19h</td>
                <td>U11, U13</td>
              </tr>
              <tr>
                <td>Lundi</td>
                <td>19h - 21h</td>
                <td>Seniors Masculins</td>
              </tr>
              <tr>
                <td>Mardi</td>
                <td>17h30 - 19h</td>
                <td>U9, U15</td>
              </tr>
              <tr>
                <td>Mardi</td>
                <td>19h - 21h</td>
                <td>Seniors Féminines</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>14h - 15h30</td>
                <td>Baby, U7</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>15h30 - 17h</td>
                <td>U9, U11</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>17h - 19h</td>
                <td>U13, U15</td>
              </tr>
              <tr>
                <td>Jeudi</td>
                <td>17h30 - 19h</td>
                <td>U17, Espoirs</td>
              </tr>
              <tr>
                <td>Jeudi</td>
                <td>19h - 21h</td>
                <td>Toutes catégories</td>
              </tr>
              <tr>
                <td>Vendredi</td>
                <td>18h - 21h</td>
                <td>Matchs à domicile</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>9h - 18h</td>
                <td>Matchs jeunes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Staff Section */}
      <section className={styles.staff}>
        <h2>Encadrement Sportif</h2>
        
        <div className={styles.staff_grid}>
          <div className={styles.staff_member}>
            <h3>Thomas Legrand</h3>
            <p className={styles.staff_role}>Directeur Sportif</p>
            <p>Diplômé d'État, 15 ans d'expérience</p>
          </div>

          <div className={styles.staff_member}>
            <h3>Julie Moreau</h3>
            <p className={styles.staff_role}>Responsable Formation</p>
            <p>Ancienne joueuse professionnelle</p>
          </div>

          <div className={styles.staff_member}>
            <h3>Marc Petit</h3>
            <p className={styles.staff_role}>Entraîneur Principal</p>
            <p>Spécialiste du développement jeune</p>
          </div>

          <div className={styles.staff_member}>
            <h3>Claire Fontaine</h3>
            <p className={styles.staff_role}>Préparatrice Physique</p>
            <p>Master en STAPS</p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className={styles.join_cta}>
        <h2>Rejoignez Notre Club !</h2>
        <p>Que vous soyez joueur, bénévole ou partenaire, il y a une place pour vous à l'OBC Basket.</p>
        <div className={styles.cta_buttons}>
          <Link href="/inscription" className={styles.cta_primary}>
            Devenir Membre
          </Link>
          <Link href="/contact" className={styles.cta_secondary}>
            Nous Contacter
          </Link>
        </div>
      </section>
    </div>
  );
}