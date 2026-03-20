import { Match } from "../types/match";

  export const matchsAVenir: Match[] = [
    {
      id: '1',
      opponent: 'USC Basket',
      date: '2024-03-24',
      time: '15h00',
      location: 'home',
      arena: 'Gymnase Municipal',
      category: 'Seniors'
    },
    {
      id: '2',
      opponent: 'ASVEL',
      date: '2024-03-31',
      time: '14h30',
      location: 'away',
      arena: 'Palais des Sports',
      category: 'Juniors'
    },
    {
      id: '3',
      opponent: 'Chalon Basket',
      date: '2024-04-07',
      time: '16h00',
      location: 'home',
      arena: 'Gymnase Municipal',
      category: 'Cadets'
    },
    {
      id: '4',
      opponent: 'Gravelines',
      date: '2024-04-14',
      time: '11h00',
      location: 'away',
      arena: 'Salle Jean-Marc',
      category: 'Minimes'
    },
    {
      id: '5',
      opponent: 'Le Mans',
      date: '2024-04-21',
      time: '15h30',
      location: 'home',
      arena: 'Gymnase Municipal',
      category: 'Seniors'
    },
    {
      id: '6',
      opponent: 'Roanne Basket',
      date: '2024-04-28',
      time: '10h00',
      location: 'away',
      arena: 'Halle des Sports',
      category: 'Benjamins'
    }
  ];
  
  export const scores: Match[] = [
    {
      id: '101',
      opponent: 'Lyon Basket',
      date: '2024-03-17',
      time: '15h00',
      location: 'home',
      category: 'Seniors',
      isPlayed: true,
      score: { us: 72, them: 68 },
      status: 'win'
    },
    {
      id: '102',
      opponent: 'Nancy',
      date: '2024-03-10',
      time: '14h30',
      location: 'away',
      category: 'Seniors',
      isPlayed: true,
      score: { us: 65, them: 70 },
      status: 'loss'
    },
    {
      id: '103',
      opponent: 'Strasbourg',
      date: '2024-03-03',
      time: '16h00',
      location: 'home',
      category: 'Juniors',
      isPlayed: true,
      score: { us: 85, them: 62 },
      status: 'win'
    },
    {
      id: '104',
      opponent: 'Dijon',
      date: '2024-02-25',
      time: '11h00',
      location: 'away',
      category: 'Cadets',
      isPlayed: true,
      score: { us: 58, them: 54 },
      status: 'win'
    },
    {
      id: '105',
      opponent: 'Limoges',
      date: '2024-02-18',
      time: '15h30',
      location: 'home',
      category: 'Minimes',
      isPlayed: true,
      score: { us: 48, them: 52 },
      status: 'loss'
    },
    {
      id: '106',
      opponent: 'Pau',
      date: '2024-02-11',
      time: '10h00',
      location: 'away',
      category: 'Benjamins',
      isPlayed: true,
      score: { us: 32, them: 28 },
      status: 'win'
    },
    {
      id: '107',
      opponent: 'Bourg-en-Bresse',
      date: '2024-02-04',
      time: '14h00',
      location: 'home',
      category: 'Baby',
      isPlayed: true,
      score: { us: 20, them: 18 },
      status: 'win'
    },
    {
      id: '108',
      opponent: 'Orléans',
      date: '2024-01-28',
      time: '16h30',
      location: 'away',
      category: 'Seniors',
      isPlayed: true,
      score: { us: 78, them: 75 },
      status: 'win'
    }
  ];