import { Camp } from "../types/camp";

  export const camps: Camp[] = [
    {
      id: 'camp-ouvert-printemps',
      title: 'Camp de Printemps',
      type: 'ouvert',
      description: 'Stage de perfectionnement pour tous niveaux',
      longDescription: 'Pendant les vacances de printemps, viens t’entraîner dans une ambiance conviviale et professionnelle. Au programme : technique individuelle, tactique collective, matchs et animations.',
      dates: ['8 avril - 12 avril 2024', '15 avril - 19 avril 2024'],
      ageRange: '8-17 ans',
      level: 'Tous niveaux (débutant à confirmé)',
      price: 180,
      location: 'Gymnase Municipal - Salle 1',
      capacity: 40,
      remaining: 12,
      includes: [
        'Encadrement par des coachs diplômés',
        'Assurance',
        'Tenue d\'entraînement offerte',
        'Goûter quotidien',
        'Certificat de participation'
      ],
      schedule: [
        { time: '09h00 - 10h30', activity: 'Échauffement + Technique individuelle' },
        { time: '10h30 - 12h00', activity: 'Ateliers spécifiques' },
        { time: '12h00 - 14h00', activity: 'Pause déjeuner' },
        { time: '14h00 - 15h30', activity: 'Tactique collective' },
        { time: '15h30 - 17h00', activity: 'Matchs et jeux' }
      ],
      coaches: [
        { name: 'Pascal Durand', role: 'Coach principal', image: '/images/coaches/pascal.jpg' },
        { name: 'Sophie Bernard', role: 'Coach technique', image: '/images/coaches/sophie.jpg' }
      ],
      gallery: ['/images/camp/printemps-1.jpg', '/images/camp/printemps-2.jpg'],
      registrationDeadline: '25 mars 2024',
      status: 'open'
    },
    {
      id: 'camp-ferme-ete',
      title: 'Camp Fermé Élite',
      type: 'ferme',
      description: 'Stage intensif sur sélection pour joueurs confirmés',
      longDescription: 'Un camp d’exception réservé aux joueurs les plus motivés. Entraînements intensifs, préparation physique poussée et accompagnement mental. Hébergement sur place.',
      dates: ['7 juillet - 14 juillet 2024'],
      ageRange: '14-18 ans',
      level: 'Confirmé (sur sélection)',
      price: 850,
      location: 'Centre de formation - Creps',
      capacity: 24,
      remaining: 8,
      includes: [
        'Hébergement en pension complète',
        'Encadrement par des coachs professionnels',
        'Préparation physique quotidienne',
        'Analyse vidéo',
        'Kit complet OBC',
        'Assurance'
      ],
      schedule: [
        { time: '07h30 - 08h30', activity: 'Petit-déjeuner' },
        { time: '09h00 - 11h30', activity: 'Entraînement technique' },
        { time: '12h00 - 13h00', activity: 'Déjeuner' },
        { time: '14h00 - 16h00', activity: 'Préparation physique' },
        { time: '16h30 - 18h30', activity: 'Matchs et tactique' },
        { time: '19h00 - 20h00', activity: 'Dîner' },
        { time: '20h30 - 22h00', activity: 'Analyse vidéo / Temps libre' }
      ],
      coaches: [
        { name: 'Jérôme Petit', role: 'Responsable technique', image: '/images/coaches/jerome.jpg' },
        { name: 'Lucas Moreau', role: 'Préparateur physique', image: '/images/coaches/lucas.jpg' },
        { name: 'Marie Dupont', role: 'Coach mental', image: '/images/coaches/marie.jpg' }
      ],
      gallery: ['/images/camp/ferme-1.jpg', '/images/camp/ferme-2.jpg', '/images/camp/ferme-3.jpg'],
      registrationDeadline: '15 juin 2024',
      status: 'limited'
    }
  ];