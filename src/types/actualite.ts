export interface Actualite {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    image: string;
    category: 'club' | 'match' | 'evenement' | 'partenariat';
  }
  