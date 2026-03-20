import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { camps } from '../../../../src/data/camp';

export default function CampFermePage() {
  const camp = camps.find(c => c.type === 'ferme');

  if (!camp) return <div>Camp non trouvé</div>;

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <span className={styles.hero_badge}>⭐ Élite ⭐</span>
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

      {/* Hébergement */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Hébergement</h2>
        <div className={styles.accommodation}>
          <div className={styles.accommodation_card}>
            <span className={styles.accommodation_icon}>🏠</span>
            <h3>Centre de formation</h3>
            <p>Hébergement en chambres de 2 à 4 personnes, avec salle d'étude et espace détente</p>
          </div>
          <div className={styles.accommodation_card}>
            <span className={styles.accommodation_icon}>🍽️</span>
            <h3>Restauration</h3>
            <p>Repas équilibrés préparés par un chef, adaptés aux besoins sportifs</p>
          </div>
          <div className={styles.accommodation_card}>
            <span className={styles.accommodation_icon}>🏥</span>
            <h3>Encadrement médical</h3>
            <p>Présence d'un kinésithérapeute et d'un médecin du sport</p>
          </div>
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
        <div className={styles.includes_grid}>
          {camp.includes.map((item, i) => (
            <div key={i} className={styles.includes_item}>
              <span className={styles.includes_check}>✅</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prérequis */}
      <div className={`${styles.section} ${styles.prerequis_section}`}>
        <h2 className={styles.section_title}>Prérequis et sélection</h2>
        <div className={styles.prerequis_grid}>
          <div className={styles.prerequis_card}>
            <span className={styles.prerequis_icon}>🏀</span>
            <h3>Niveau requis</h3>
            <p>Joueur confirmé avec au moins 3 ans de pratique en compétition</p>
          </div>
          <div className={styles.prerequis_card}>
            <span className={styles.prerequis_icon}>📝</span>
            <h3>Dossier de candidature</h3>
            <p>Curriculum vitae sportif, lettre de motivation, vidéo de match</p>
          </div>
          <div className={styles.prerequis_card}>
            <span className={styles.prerequis_icon}>👥</span>
            <h3>Sélection</h3>
            <p>Effectuée par le staff technique sur dossier et entretien</p>
          </div>
        </div>
      </div>

      {/* Galerie */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Galerie</h2>
        <div className={styles.gallery}>
          {camp.gallery.map((src, index) => (
            <div key={index} className={styles.gallery_item}>
              <Image src={src} alt={`Camp fermé ${index + 1}`} width={400} height={300} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Prêt à relever le défi ?</h2>
        <p>Places limitées à {camp.capacity} participants</p>
        <div className={styles.status_warning}>
          {camp.status === 'limited' && (
            <span className={styles.status_limited}>⚠️ Plus que {camp.remaining} places disponibles !</span>
          )}
          {camp.status === 'full' && (
            <span className={styles.status_full}>❌ Complet - Liste d'attente disponible</span>
          )}
        </div>
        <div className={styles.cta_buttons}>
          {camp.status !== 'full' && (
            <Link href="/inscription/adherer" className={styles.btn_primary}>
              Postuler maintenant
            </Link>
          )}
          <Link href="/contact/nous-joindre" className={styles.btn_secondary}>
            Contacter le responsable
          </Link>
        </div>
        <p className={styles.deadline}>📅 Date limite de candidature : {camp.registrationDeadline}</p>
      </div>
    </div>
  );
}