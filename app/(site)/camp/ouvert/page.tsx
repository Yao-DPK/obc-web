import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { camps } from '../../../../src/data/camp';

export default function CampOuvertPage() {
  const camp = camps.find(c => c.type === 'ouvert');

  if (!camp) return <div>Camp non trouvé</div>;

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>{camp.title}</h1>
          <p className={styles.hero_subtitle}>{camp.description}</p>
        </div>
      </div>

      {/* Infos principales */}
      <div className={styles.info_grid}>
        <div className={styles.info_card}>
          <span className={styles.info_icon}>📅</span>
          <h3>Dates</h3>
          {camp.dates.map((date, i) => <p key={i}>{date}</p>)}
        </div>
        <div className={styles.info_card}>
          <span className={styles.info_icon}>👥</span>
          <h3>Âge</h3>
          <p>{camp.ageRange}</p>
        </div>
        <div className={styles.info_card}>
          <span className={styles.info_icon}>🏀</span>
          <h3>Niveau</h3>
          <p>{camp.level}</p>
        </div>
        <div className={styles.info_card}>
          <span className={styles.info_icon}>💰</span>
          <h3>Tarif</h3>
          <p>{camp.price}€</p>
        </div>
      </div>

      {/* Description */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>À propos du camp</h2>
        <p className={styles.description}>{camp.longDescription}</p>
      </div>

      {/* Programme */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Programme type</h2>
        <div className={styles.schedule}>
          {camp.schedule.map((item, i) => (
            <div key={i} className={styles.schedule_item}>
              <span className={styles.schedule_time}>{item.time}</span>
              <span className={styles.schedule_activity}>{item.activity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Encadrement */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Encadrement</h2>
        <div className={styles.coaches_grid}>
          {camp.coaches.map((coach, i) => (
            <div key={i} className={styles.coach_card}>
              <div className={styles.coach_avatar}>{coach.name[0]}</div>
              <h3>{coach.name}</h3>
              <p>{coach.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inclus */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Inclus dans le stage</h2>
        <ul className={styles.includes_list}>
          {camp.includes.map((item, i) => (
            <li key={i}>✅ {item}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Prêt à t'inscrire ?</h2>
        <div className={styles.cta_buttons}>
          <Link href="/inscription/adherer" className={styles.btn_primary}>
            Je m'inscris
          </Link>
          <Link href="/contact/nous-joindre" className={styles.btn_secondary}>
            Contacter l'organisateur
          </Link>
        </div>
        <p className={styles.deadline}>Date limite : {camp.registrationDeadline}</p>
      </div>
    </div>
  );
}