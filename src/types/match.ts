export interface Match {
    id: string;
    opponent: string;
    date: string;
    time: string;
    location: 'home' | 'away';
    arena?: string;
    category: string;
    isPlayed?: boolean;
    score?: {
      us: number;
      them: number;
    };
    status?: 'win' | 'loss';
  }
  