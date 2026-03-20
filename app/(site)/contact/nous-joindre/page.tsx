"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function NousJoindrePage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Email invalide';
    if (!formData.sujet) newErrors.sujet = 'Veuillez sélectionner un sujet';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    // Ici, ajouter l'appel API pour envoyer le message
  };

  const sujets = [
    { value: '', label: 'Sélectionnez un sujet' },
    { value: 'inscription', label: 'Inscription / Adhésion' },
    { value: 'stage', label: 'Stage / Camp' },
    { value: 'partenariat', label: 'Partenariat' },
    { value: 'benevolat', label: 'Bénévolat' },
    { value: 'information', label: 'Demande d\'information' },
    { value: 'reclamation', label: 'Réclamation' },
    { value: 'autre', label: 'Autre' }
  ];

  if (submitted) {
    return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.hero_overlay}></div>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>Message envoyé !</h1>
            <p className={styles.hero_subtitle}>
              Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
            </p>
            <Link href="/" className={styles.home_btn}>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>Nous contacter</h1>
          <p className={styles.hero_subtitle}>
            Remplissez le formulaire ci-dessous, nous vous répondrons rapidement
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <div className={styles.form_section}>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form_group}>
              <label htmlFor="nom">Nom complet *</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className={errors.nom ? styles.input_error : ''}
              />
              {errors.nom && <span className={styles.error_msg}>{errors.nom}</span>}
            </div>

            <div className={styles.form_row}>
              <div className={styles.form_group}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.input_error : ''}
                />
                {errors.email && <span className={styles.error_msg}>{errors.email}</span>}
              </div>

              <div className={styles.form_group}>
                <label htmlFor="telephone">Téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.form_group}>
              <label htmlFor="sujet">Sujet *</label>
              <select
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                className={errors.sujet ? styles.input_error : ''}
              >
                {sujets.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              {errors.sujet && <span className={styles.error_msg}>{errors.sujet}</span>}
            </div>

            <div className={styles.form_group}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? styles.input_error : ''}
              />
              {errors.message && <span className={styles.error_msg}>{errors.message}</span>}
            </div>

            <div className={styles.form_footer}>
              <p className={styles.required_note}>* Champs obligatoires</p>
              <button type="submit" className={styles.submit_btn}>
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Autres moyens */}
      <div className={styles.alternatives}>
        <h3>Autres moyens de nous contacter</h3>
        <div className={styles.alternatives_grid}>
          <div className={styles.alternative_card}>
            <span className={styles.alternative_icon}>📞</span>
            <p>Appelez-nous au</p>
            <strong>01 23 45 67 89</strong>
          </div>
          <div className={styles.alternative_card}>
            <span className={styles.alternative_icon}>✉️</span>
            <p>Écrivez-nous à</p>
            <strong>contact@obc-basket.fr</strong>
          </div>
          <div className={styles.alternative_card}>
            <span className={styles.alternative_icon}>📍</span>
            <p>Passez nous voir au</p>
            <strong>123 Rue du Basket, 75000 Paris</strong>
          </div>
        </div>
      </div>
    </div>
  );
}