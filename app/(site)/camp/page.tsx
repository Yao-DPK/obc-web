import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { camps } from '../../../src/data/camp';

export default function CampPage() {
  const openCamps = camps.filter(camp => camp.type === 'ouvert');
  const closedCamps = camps.filter(camp => camp.type === 'ferme');

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Le Camp OBC</h1>
          <p className={styles.hero_subtitle}>
            Des stages pour tous les niveaux, du perfectionnement à l'élite
          </p>
        </div>
      </div>

      {/* Camp Ouvert */}
      <section className={styles.section}>
        <div className={styles.section_header}>
          <h2 className={styles.section_title}>Camp Ouvert</h2>
          <p className={styles.section_subtitle}>
            Pour tous les jeunes de 8 à 17 ans, du débutant au confirmé
          </p>
        </div>

        <div className={styles.camps_grid}>
          {openCamps.map((camp) => (
            <Link href={`/camp/ouvert`} key={camp.id} className={styles.camp_card}>
              <div className={styles.camp_badge}>📢 Inscriptions ouvertes</div>
              <h3 className={styles.camp_title}>{camp.title}</h3>
              <p className={styles.camp_desc}>{camp.description}</p>
              <div className={styles.camp_details}>
                <span>📅 {camp.dates[0]}</span>
                <span>👥 {camp.ageRange}</span>
                <span>💰 {camp.price}€</span>
              </div>
              <div className={styles.camp_status}>
                <div className={styles.status_bar}>
                  <div 
                    className={styles.status_fill} 
                    style={{ width: `${((camp.capacity - camp.remaining) / camp.capacity) * 100}%` }}
                  />
                </div>
                <span className={styles.status_text}>
                  {camp.remaining} places restantes
                </span>
              </div>
              <div className={styles.camp_btn}>Découvrir le camp →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Camp Fermé */}
      <section className={`${styles.section} ${styles.section_dark}`}>
        <div className={styles.section_header}>
          <h2 className={styles.section_title}>Camp Fermé</h2>
          <p className={styles.section_subtitle}>
            Pour les joueurs confirmés, sur sélection
          </p>
        </div>

        <div className={styles.camps_grid}>
          {closedCamps.map((camp) => (
            <Link href={`/camp/ferme`} key={camp.id} className={`${styles.camp_card} ${styles.camp_card_premium}`}>
              <div className={styles.camp_badge_premium}>⭐ Élite ⭐</div>
              <h3 className={styles.camp_title}>{camp.title}</h3>
              <p className={styles.camp_desc}>{camp.description}</p>
              <div className={styles.camp_details}>
                <span>📅 {camp.dates[0]}</span>
                <span>👥 {camp.ageRange}</span>
                <span>💰 {camp.price}€</span>
              </div>
              <div className={styles.camp_status}>
                <div className={styles.status_bar}>
                  <div 
                    className={styles.status_fill_premium} 
                    style={{ width: `${((camp.capacity - camp.remaining) / camp.capacity) * 100}%` }}
                  />
                </div>
                <span className={styles.status_text}>
                  {camp.remaining} places restantes
                </span>
              </div>
              <div className={styles.camp_btn_premium}>Voir conditions →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className={styles.testimonials}>
        <h2 className={styles.section_title}>Ils ont participé</h2>
        <div className={styles.testimonials_grid}>
          <div className={styles.testimonial_card}>
            <div className={styles.testimonial_avatar}>👧</div>
            <p className={styles.testimonial_text}>
              "Super stage ! J'ai beaucoup progressé et rencontré des amis. Je reviens l'année prochaine !"
            </p>
            <p className={styles.testimonial_author}>Emma, 12 ans</p>
          </div>
          <div className={styles.testimonial_card}>
            <div className={styles.testimonial_avatar}>👦</div>
            <p className={styles.testimonial_text}>
              "Les coachs sont top, l'ambiance est géniale. Le camp fermé m'a permis de passer un cap."
            </p>
            <p className={styles.testimonial_author}>Lucas, 15 ans</p>
          </div>
          <div className={styles.testimonial_card}>
            <div className={styles.testimonial_avatar}>👨</div>
            <p className={styles.testimonial_text}>
              "Organisation parfaite, mon fils a adoré. Bravo à toute l'équipe !"
            </p>
            <p className={styles.testimonial_author}>M. Martin, parent</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className={styles.cta}>
        <h2>Prêt à vivre l'expérience OBC ?</h2>
        <p>Inscris-toi dès maintenant !</p>
        <Link href="/inscription/adherer" className={styles.btn_primary}>
          S'inscrire à un camp
        </Link>
      </div>
    </div>
  );
}