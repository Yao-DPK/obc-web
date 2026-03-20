import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { contactInfo, socialNetworks } from '../../../src/data/contact';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Contact</h1>
          <p className={styles.hero_subtitle}>
            Une question ? Besoin d'informations ? Contactez-nous !
          </p>
        </div>
      </div>

      {/* Carte et infos */}
      <div className={styles.info_section}>
        <div className={styles.info_grid}>
          {/* Adresse */}
          <div className={styles.info_card}>
            <div className={styles.info_icon}>📍</div>
            <h3>Adresse</h3>
            <p>{contactInfo.club.address}</p>
            <div className={styles.map_link}>
              <Link href="https://maps.google.com" target="_blank" className={styles.map_btn}>
                Voir sur la carte →
              </Link>
            </div>
          </div>

          {/* Téléphone */}
          <div className={styles.info_card}>
            <div className={styles.info_icon}>📞</div>
            <h3>Téléphone</h3>
            <p>{contactInfo.club.phone}</p>
            <p className={styles.info_note}>Du lundi au samedi, 9h-18h</p>
          </div>

          {/* Email */}
          <div className={styles.info_card}>
            <div className={styles.info_icon}>✉️</div>
            <h3>Email</h3>
            <p>{contactInfo.club.email}</p>
            <p className={styles.info_note}>Réponse sous 48h</p>
          </div>

          {/* Horaires */}
          <div className={styles.info_card}>
            <div className={styles.info_icon}>🕐</div>
            <h3>Horaires du secrétariat</h3>
            <ul className={styles.horaires_list}>
              {contactInfo.horaires.secretariat.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contacts spécifiques */}
      <div className={styles.contacts_section}>
        <h2 className={styles.section_title}>Nos responsables</h2>
        <p className={styles.section_subtitle}>
          Contactez directement le bon interlocuteur
        </p>
        <div className={styles.contacts_grid}>
          {contactInfo.contacts.map((contact, i) => (
            <div key={i} className={styles.contact_card}>
              <div className={styles.contact_avatar}>
                {contact.name.charAt(0)}
              </div>
              <div className={styles.contact_info}>
                <h3 className={styles.contact_role}>{contact.role}</h3>
                <p className={styles.contact_name}>{contact.name}</p>
                <a href={`mailto:${contact.email}`} className={styles.contact_email}>
                  ✉️ {contact.email}
                </a>
                <a href={`tel:${contact.phone}`} className={styles.contact_phone}>
                  📞 {contact.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA - Formulaire et réseaux */}
      <div className={styles.cta_section}>
        <div className={styles.cta_grid}>
          <div className={styles.cta_card}>
            <h3>Une question spécifique ?</h3>
            <p>Utilisez notre formulaire de contact pour nous écrire</p>
            <Link href="/contact/nous-joindre" className={styles.cta_btn}>
              Formulaire de contact →
            </Link>
          </div>
          <div className={styles.cta_card}>
            <h3>Suivez-nous sur les réseaux</h3>
            <p>Restez connecté avec l'actualité du club</p>
            <Link href="/contact/reseaux" className={styles.cta_btn}>
              Nos réseaux sociaux →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}