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
    coachEmail?: string;
    effectif: string;
    actualites: Array<{
      date: string;
      title: string;
      desc: string;
    }>;
    galerie: string[];
  }