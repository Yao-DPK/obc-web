import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { categories } from '../../../../src/data/categorie';
import Gallery from '../../../../src/components/ui/Gallery';

// À remplacer par des données dynamiques plus tard
const categoryData = categories;

export default async function CategoriePage({ params }: { params: Promise<{ categorie: string }> }) {
    const { categorie } = await params;
  
    const data = categoryData.find(cat => cat.id === categorie);
  
  if (!data) return <div>Catégorie non trouvée</div>;

  return (
    <div className={styles.container}>
      {/* Hero section avec image de fond */}
      <div className={styles.hero}>
        <div className={styles.hero_overlay}></div>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>{data.name}</h1>
          <p className={styles.hero_age}>{data.age}</p>
          <p className={styles.hero_desc}>{data.shortDesc}</p>
        </div>
      </div>

      {/* Informations principales */}
      <div className={styles.section}>
        <div className={styles.info_grid}>
          <div className={styles.info_card}>
            <span className={styles.info_icon}>⏰</span>
            <h3>Horaires</h3>
            <p>{data.horaires}</p>
          </div>
          <div className={styles.info_card}>
            <span className={styles.info_icon}>📍</span>
            <h3>Lieu</h3>
            <p>{data.lieu}</p>
          </div>
          <div className={styles.info_card}>
            <span className={styles.info_icon}>👤</span>
            <h3>Coach</h3>
            <p>{data.coach}</p>
          </div>
          <div className={styles.info_card}>
            <span className={styles.info_icon}>👥</span>
            <h3>Effectif</h3>
            <p>{data.effectif}</p>
          </div>
        </div>
      </div>

      {/* Description détaillée */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>À propos</h2>
        <p className={styles.text}>{data.longDesc}</p>
      </div>

      {/* Actualités */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Actualités</h2>
        <div className={styles.news_list}>
          {data.actualites.map((news, index) => (
            <div key={index} className={styles.news_item}>
              <span className={styles.news_date}>{news.date}</span>
              <h3 className={styles.news_title}>{news.title}</h3>
              <p className={styles.news_desc}>{news.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Galerie photos */}
      <div className={styles.section}>
        <h2 className={styles.section_title}>Galerie</h2>
        <Gallery 
          images={data.galerie} 
          altPrefix={`${data.name} - Photo`}
        />
      </div>

      {/* Call to action */}
      <div className={styles.cta}>
        <h2>Rejoignez l'équipe {data.name} !</h2>
        <p>Inscriptions ouvertes toute l'année</p>
        <div className={styles.cta_buttons}>
          <Link href="/inscription/adherer" className={styles.cta_primary}>
            S'inscrire
          </Link>
          <Link href="/contact/nous-joindre" className={styles.cta_secondary}>
            Contacter le coach
          </Link>
        </div>
      </div>
    </div>
  );
}