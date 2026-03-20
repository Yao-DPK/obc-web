export interface Camp {
    id: string;
    title: string;
    type: 'ouvert' | 'ferme';
    description: string;
    longDescription: string;
    dates: string[];
    ageRange: string;
    level: string;
    price: number;
    location: string;
    capacity: number;
    remaining: number;
    includes: string[];
    schedule: {
      time: string;
      activity: string;
    }[];
    coaches: {
      name: string;
      role: string;
      image: string;
    }[];
    gallery: string[];
    registrationDeadline: string;
    status: 'open' | 'limited' | 'full';
  }
  