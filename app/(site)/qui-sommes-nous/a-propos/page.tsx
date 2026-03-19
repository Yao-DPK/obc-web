import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function AProposPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.page_title}>À Propos de Nous</h1>
      
      {/* Timeline Section */}
      <section className={styles.timeline}>
        <h2>Notre Histoire</h2>
        
        <div className={styles.timeline_item}>
          <div className={styles.timeline_year}>1975</div>
          <div className={styles.timeline_content}>
            <h3>La Création</h3>
            <p>Fondation de l'OBC Basket par Jean Dupont et une poignée de passionnés. Le club commence avec une seule équipe senior et 15 joueurs.</p>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_year}>1985</div>
          <div className={styles.timeline_content}>
            <h3>Premiers Titres</h3>
            <p>L'équipe senior remporte le championnat régional pour la première fois. Le club compte maintenant 100 licenciés.</p>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_year}>1995</div>
          <div className={styles.timeline_content}>
            <h3>Extension du Club</h3>
            <p>Création de l'école de basket et des premières équipes de jeunes. Le club s'installe dans ses premiers vrais locaux.</p>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_year}>2010</div>
          <div className={styles.timeline_content}>
            <h3>Nouveau Gymnase</h3>
            <p>Inauguration du complexe sportif moderne avec deux terrains couverts et une salle de musculation.</p>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_year}>2024</div>
          <div className={styles.timeline_content}>
            <h3>Aujourd'hui</h3>
            <p>300 licenciés, 15 équipes, des installations modernes et une ambiance familiale unique.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <h2>Nos Valeurs</h2>
        
        <div className={styles.values_grid}>
          <div className={styles.value_card}>
            <div className={styles.value_icon}>🤝</div>
            <h3>Respect</h3>
            <p>Respect des adversaires, des arbitres, des coéquipiers et de soi-même. Le respect est la base de tout.</p>
          </div>

          <div className={styles.value_card}>
            <div className={styles.value_icon}>💪</div>
            <h3>Dépassement</h3>
            <p>Se dépasser chaque jour, repousser ses limites, tant sur le plan sportif que personnel.</p>
          </div>

          <div className={styles.value_card}>
            <div className={styles.value_icon}>🤗</div>
            <h3>Partage</h3>
            <p>Partager sa passion, ses connaissances, ses réussites comme ses échets. Ensemble on va plus loin.</p>
          </div>

          <div className={styles.value_card}>
            <div className={styles.value_icon}>🎯</div>
            <h3>Excellence</h3>
            <p>Viser l'excellence dans tout ce qu'on entreprend, sans jamais perdre de vue le plaisir du jeu.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <h2>Notre Mission</h2>
        <div className={styles.mission_content}>
          <p>
            L'OBC Basket a pour mission de rendre le basketball accessible à tous, 
            quel que soit l'âge ou le niveau. Nous croyons que le sport est un 
            formidable vecteur d'éducation, d'intégration et d'épanouissement personnel.
          </p>
          <p>
            Notre objectif est de former non seulement des basketteurs, mais aussi 
            des citoyens responsables, en transmettant des valeurs fortes et en 
            créant un environnement où chacun peut s'épanouir.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>L'Équipe Dirigeante</h2>
        
        <div className={styles.team_grid}>
          <div className={styles.team_member}>
            <div className={styles.member_avatar}>👨</div>
            <h3>Jean Dupont</h3>
            <p className={styles.member_role}>Président Fondateur</p>
            <p className={styles.member_bio}>Passionné de basket depuis 50 ans, Jean a créé le club pour partager sa passion.</p>
          </div>

          <div className={styles.team_member}>
            <div className={styles.member_avatar}>👩</div>
            <h3>Marie Martin</h3>
            <p className={styles.member_role}>Vice-Présidente</p>
            <p className={styles.member_bio}>Ancienne joueuse, elle gère maintenant le développement sportif du club.</p>
          </div>

          <div className={styles.team_member}>
            <div className={styles.member_avatar}>👨</div>
            <h3>Pierre Bernard</h3>
            <p className={styles.member_role}>Secrétaire Général</p>
            <p className={styles.member_bio}>Responsable de l'administration et des relations avec les partenaires.</p>
          </div>

          <div className={styles.team_member}>
            <div className={styles.member_avatar}>👩</div>
            <h3>Sophie Dubois</h3>
            <p className={styles.member_role}>Trésorière</p>
            <p className={styles.member_bio}>En charge de la gestion financière et du développement des ressources.</p>
          </div>
        </div>
      </section>
    </div>
  );
}