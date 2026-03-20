export interface Category {
  id: string;
  name: string;
  age: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  image: string;
  horaires: string;
  lieu: string;
  coach: string;
  coachEmail: string;
  effectif: string;
  actualites: Array<{
    date: string;
    title: string;
    desc: string;
  }>;
  galerie: string[];
}

export const categories: Category[] = [
  {
    id: 'baby',
    name: 'Baby',
    age: '3-5 ans',
    slug: 'baby',
    shortDesc: 'Éveil basket pour les plus petits',
    longDesc: 'Le baby basket permet aux enfants de 3 à 5 ans de découvrir le basket de façon ludique. Coordination, motricité et plaisir sont au rendez-vous. Séances adaptées avec du petit matériel et des jeux.',
    icon: '👶',
    image: '/images/categories/baby/hero.jpg',
    horaires: 'Mercredi 10h-11h | Samedi 9h-10h',
    lieu: 'Gymnase Municipal - Salle 2',
    coach: 'Marie Dupont',
    coachEmail: 'baby@obc-basket.fr',
    effectif: '12 enfants',
    actualites: [
      { date: '15 Mars 2024', title: 'Portes ouvertes baby', desc: 'Venez essayer gratuitement le baby basket' },
      { date: '20 Avril 2024', title: 'Tournoi des pitchouns', desc: 'Inscriptions ouvertes pour le tournoi' },
      { date: '5 Mai 2024', title: 'Fête de fin de saison', desc: 'Goûter et remise de médailles pour tous les enfants' },
    ],
    galerie: ['/images/categories/baby/baby1.jpg', '/images/categories/baby/baby2.jpg', '/images/categories/baby/baby3.jpg'],
  },
  {
    id: 'benjamins',
    name: 'Benjamins',
    age: '9-10 ans',
    slug: 'benjamins',
    shortDesc: 'Découverte et apprentissage',
    longDesc: 'Les benjamins découvrent les bases techniques du basket : dribble, passe, tir. Premiers matchs et esprit d\'équipe. Initiation aux règles du jeu et aux placements tactiques simples.',
    icon: '🧒',
    image: '/images/categories/benjamins/hero.jpg',
    horaires: 'Mardi 17h-18h30 | Jeudi 17h-18h30',
    lieu: 'Gymnase Municipal - Salle 1',
    coach: 'Thomas Martin',
    coachEmail: 'benjamins@obc-basket.fr',
    effectif: '15 joueurs',
    actualites: [
      { date: '5 Mars 2024', title: 'Match contre OBC 2', desc: 'Samedi 10h au gymnase' },
      { date: '12 Mars 2024', title: 'Stage de perfectionnement', desc: 'Inscriptions ouvertes pour les vacances' },
    ],
    galerie: ['/images/categories/benjamins/gallery-1.jpg', '/images/categories/benjamins/gallery-2.jpg'],
  },
  {
    id: 'minimes',
    name: 'Minimes',
    age: '11-12 ans',
    slug: 'minimes',
    shortDesc: 'Perfectionnement technique',
    longDesc: 'Les minimes approfondissent leurs compétences techniques et tactiques. Entraînements intensifs et compétitions départementales. Préparation aux championnats et développement de la condition physique.',
    icon: '🏀',
    image: '/images/categories/minimes/hero.jpg',
    horaires: 'Lundi 17h30-19h | Mercredi 14h-15h30 | Vendredi 17h30-19h',
    lieu: 'Gymnase Municipal - Salle 1',
    coach: 'Sophie Bernard',
    coachEmail: 'minimes@obc-basket.fr',
    effectif: '18 joueurs',
    actualites: [
      { date: '10 Mars 2024', title: 'Qualification pour les playoffs', desc: 'Félicitations à toute l\'équipe !' },
      { date: '25 Mars 2024', title: 'Stage technique', desc: 'Avec un coach invité de la FFBB' },
    ],
    galerie: ['/images/categories/minimes/gallery-1.jpg', '/images/categories/minimes/gallery-2.jpg', '/images/categories/minimes/gallery-3.jpg'],
  },
  {
    id: 'cadets',
    name: 'Cadets',
    age: '13-14 ans',
    slug: 'cadets',
    shortDesc: 'Préparation compétition',
    longDesc: 'Les cadets s\'entraînent pour la compétition régionale. Mise en place de systèmes tactiques avancés, préparation physique spécifique et esprit d\'équipe renforcé. Objectif : championnat régional.',
    icon: '🔥',
    image: '/images/categories/cadets/hero.jpg',
    horaires: 'Mardi 18h-20h | Jeudi 18h-20h | Samedi 10h-12h',
    lieu: 'Gymnase Municipal - Salle 1',
    coach: 'Nicolas Dubois',
    coachEmail: 'cadets@obc-basket.fr',
    effectif: '16 joueurs',
    actualites: [
      { date: '15 Mars 2024', title: 'Victoire contre l\'USC', desc: '72-68, belle performance !' },
      { date: '28 Mars 2024', title: 'Finale régionale', desc: 'Rendez-vous le 15 avril au Palais des Sports' },
    ],
    galerie: ['/images/categories/cadets/gallery-1.jpg', '/images/categories/cadets/gallery-2.jpg'],
  },
  {
    id: 'juniors',
    name: 'Juniors',
    age: '15-17 ans',
    slug: 'juniors',
    shortDesc: 'Haut niveau',
    longDesc: 'Les juniors visent le haut niveau régional et national. Entraînements intensifs, préparation physique poussée et accompagnement mental. Passage vers les catégories seniors pour les plus talentueux.',
    icon: '⭐',
    image: '/images/categories/juniors/hero.jpg',
    horaires: 'Lundi 19h-21h | Mercredi 18h-20h | Vendredi 19h-21h',
    lieu: 'Gymnase Municipal - Salle 1',
    coach: 'Jérôme Petit',
    coachEmail: 'juniors@obc-basket.fr',
    effectif: '14 joueurs',
    actualites: [
      { date: '5 Mars 2024', title: 'Sélection régionale', desc: '3 joueurs retenus pour l\'équipe de la région' },
      { date: '18 Mars 2024', title: 'Stage intensif', desc: 'Pendant les vacances de printemps' },
      { date: '30 Mars 2024', title: 'Match amical contre l\'Élan Chalon', desc: 'Samedi 15h au gymnase' },
    ],
    galerie: ['/images/categories/juniors/gallery-1.jpg', '/images/categories/juniors/gallery-2.jpg', '/images/categories/juniors/gallery-3.jpg'],
  },
  {
    id: 'espoirs',
    name: 'Espoirs',
    age: '18-20 ans',
    slug: 'espoirs',
    shortDesc: 'Pré-professionnel',
    longDesc: 'La catégorie Espoirs est la passerelle vers le monde professionnel. Entraînements quotidiens, suivi individualisé, préparation physique haute intensité. Objectif : intégrer une équipe professionnelle.',
    icon: '🚀',
    image: '/images/categories/espoirs/hero.jpg',
    horaires: 'Lundi 19h-21h | Mardi 10h-12h | Mercredi 19h-21h | Jeudi 10h-12h | Vendredi 19h-21h',
    lieu: 'Gymnase Municipal - Salle 1 + Salle d\'entraînement',
    coach: 'Lucas Moreau',
    coachEmail: 'espoirs@obc-basket.fr',
    effectif: '12 joueurs',
    actualites: [
      { date: '8 Mars 2024', title: 'Match de préparation', desc: 'Contre l\'équipe espoir du Limoges CSP' },
      { date: '22 Mars 2024', title: 'Visite du centre de formation', desc: 'Découverte des infrastructures' },
    ],
    galerie: ['/images/categories/espoirs/gallery-1.jpg', '/images/categories/espoirs/gallery-2.jpg'],
  },
  {
    id: 'seniors',
    name: 'Seniors',
    age: '21+ ans',
    slug: 'seniors',
    shortDesc: 'Compétition et loisir',
    longDesc: 'L\'équipe seniors regroupe des joueurs confirmés et des amateurs passionnés. Championnat départemental et régional. Ambiance conviviale et esprit d\'équipe. Deux équipes : une compétition, une loisir.',
    icon: '🏆',
    image: '/images/categories/seniors/hero.jpg',
    horaires: 'Mardi 20h-22h | Jeudi 20h-22h',
    lieu: 'Gymnase Municipal - Salle 1',
    coach: 'Pascal Durand',
    coachEmail: 'seniors@obc-basket.fr',
    effectif: '24 joueurs (2 équipes)',
    actualites: [
      { date: '12 Mars 2024', title: 'Championnat en cours', desc: 'L\'équipe 1 est 2ème de poule' },
      { date: '26 Mars 2024', title: 'Tournoi seniors', desc: 'Inscriptions ouvertes pour le tournoi du 15 juin' },
      { date: '2 Avril 2024', title: 'Reprise des entraînements', desc: 'Planning des vacances disponible' },
    ],
    galerie: ['/images/categories/seniors/gallery-1.jpg', '/images/categories/seniors/gallery-2.jpg', '/images/categories/seniors/gallery-3.jpg'],
  },
];

// Fonction utilitaire pour récupérer une catégorie par son slug/id
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(cat => cat.slug === slug || cat.id === slug);
}

// Fonction pour récupérer toutes les catégories
export function getAllCategories(): Category[] {
  return categories;
}

// Fonction pour récupérer les catégories par groupe d'âge
export function getCategoriesByAgeGroup(): {
  jeunes: Category[];
  adultes: Category[];
} {
  const jeunes = categories.filter(cat => 
    ['baby', 'benjamins', 'minimes', 'cadets', 'juniors'].includes(cat.id)
  );
  const adultes = categories.filter(cat => 
    ['espoirs', 'seniors'].includes(cat.id)
  );
  return { jeunes, adultes };
}