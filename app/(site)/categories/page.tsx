import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

// Données des catégories (à déplacer dans un fichier séparé plus tard)
const categories = [
  { id: 'baby', name: 'Baby', age: '3-5 ans', description: 'Éveil basket pour les plus petits', icon: '👶' },
  { id: 'benjamins', name: 'Benjamins', age: '9-10 ans', description: 'Découverte et apprentissage', icon: '🧒' },
  { id: 'minimes', name: 'Minimes', age: '11-12 ans', description: 'Perfectionnement technique', icon: '🏀' },
  { id: 'cadets', name: 'Cadets', age: '13-14 ans', description: 'Préparation compétition', icon: '🔥' },
  { id: 'juniors', name: 'Juniors', age: '15-17 ans', description: 'Haut niveau', icon: '⭐' },
  { id: 'espoirs', name: 'Espoirs', age: '18-20 ans', description: 'Pré-professionnel', icon: '🚀' },
  { id: 'seniors', name: 'Seniors', age: '21+ ans', description: 'Compétition et loisir', icon: '🏆' },
];

export default function CategoriesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nos Catégories</h1>
      <p className={styles.subtitle}>Découvrez toutes nos équipes, de l'éveil à la compétition</p>
      
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link href={`/categories/${cat.id}`} key={cat.id} className={styles.card}>
            <div className={styles.card_icon}>{cat.icon}</div>
            <h2 className={styles.card_title}>{cat.name}</h2>
            <p className={styles.card_age}>{cat.age}</p>
            <p className={styles.card_desc}>{cat.description}</p>
            <span className={styles.card_link}>Voir l'équipe →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}