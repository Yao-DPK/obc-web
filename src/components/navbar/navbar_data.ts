export interface NavItem {
  label: string;
  submenu?: Array<{ label: string; url?: string }>;
  url?: string;
  page?: string;
}

export const navbar_items: NavItem[] = [
    { 
      label: "Qui Sommes Nous?", 
      page: "/qui-sommes-nous",
      submenu: [
        { label: "A Propos de Nous", url: "/qui-sommes-nous/a-propos" }, 
        { label: "Le Club", url: "/qui-sommes-nous/le-club" }
      ]
    },
    { 
      label: "Les Catégories", 
      page: "/categories",
      submenu: [
        { label: "Baby", url: "/categories/baby"},
        { label: "Benjamins", url: "/categories/benjamins" },
        { label: "Minimes", url: "/categories/minimes"},
        { label: "Cadets", url: "/categories/cadets" },
        { label: "Juniors", url: "/categories/juniors"},
        { label: "Espoirs", url: "/categories/espoirs" },
        { label: "Seniors", url: "/categories/seniors"}
      ]
    },
    { 
      label: "S'inscrire", 
      page: "/inscription",
      submenu: [
        { label: "Adhérer au Club", url: "/inscription/adherer" }, 
        { label: "Régler des Frais", url: "/inscription/paiement" }
      ]
    },
    { 
      label: "Résultats", 
      page: "/resultats",
      submenu: [
        { label: "Scores", url: "/resultats/scores"},
        { label: "Matchs à venir", url: "/resultats/matchs" },
        { label: "Histoire", url: "/resultats/histoire" }
      ]
    },
    { 
      label: "Le Camp", 
      page: "/camp",
      submenu: [
        { label: "Camp Ouvert", url: "/camp/ouvert"},
        { label: "Camp Fermé", url: "/camp/ferme"}
      ]
    },
    { 
      label: "Communauté", 
      page: "/communaute",
      submenu: [
        { label: "Devenir Bénévole", url: "/communaute/benevole"},
        { label: "Devenir Partenaire", url: "/communaute/partenaire"},
        { label: "Basket-Ecole", url: "/communaute/basket-ecole"}
      ]
    },
    { 
      label: "Boutique", 
      page: "/boutique",
      url: "/boutique" 
    },
    { 
      label: "Contact", 
      page: "/contact",
      submenu: [
        { label: "Nous Joindre", url: "/contact/nous-joindre" },
        { label: "Réseaux Sociaux", url: "/contact/reseaux" }
      ]
    },
  ]