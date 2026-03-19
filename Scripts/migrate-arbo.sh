#!/bin/bash

echo "🚀 Migration de l'arborescence Next.js"

# 1. Créer les nouveaux dossiers
echo "📁 Création des dossiers..."

# Groupes de routes - on crée avec des backslashes pour échapper les parenthèses
mkdir -p app/\(auth\)/connexion
mkdir -p app/\(auth\)/inscription
mkdir -p app/\(auth\)/profil
mkdir -p app/\(site\)

# Sections principales avec leurs sous-pages
mkdir -p app/\(site\)/camp/ouvert
mkdir -p app/\(site\)/camp/ferme

mkdir -p app/\(site\)/categories/baby
mkdir -p app/\(site\)/categories/benjamins
mkdir -p app/\(site\)/categories/cadets
mkdir -p app/\(site\)/categories/espoirs
mkdir -p app/\(site\)/categories/juniors
mkdir -p app/\(site\)/categories/minimes
mkdir -p app/\(site\)/categories/seniors

mkdir -p app/\(site\)/communaute/basket-ecole
mkdir -p app/\(site\)/communaute/benevole
mkdir -p app/\(site\)/communaute/partenaire

mkdir -p app/\(site\)/contact/nous-joindre
mkdir -p app/\(site\)/contact/reseaux

mkdir -p app/\(site\)/inscription/adherer
mkdir -p app/\(site\)/inscription/paiement

mkdir -p app/\(site\)/resultats/histoire
mkdir -p app/\(site\)/resultats/matchs
mkdir -p app/\(site\)/resultats/scores

mkdir -p app/\(site\)/boutique

# Dossiers src
mkdir -p src/components/layout
mkdir -p src/contexts
mkdir -p src/data/mock

 2. Déplacer les fichiers existants
echo "🔄 Déplacement des fichiers..."

# Déplacer home vers (site)/page.tsx
if [ -d "app/home" ]; then
  if [ -f "app/home/page.tsx" ]; then
    cp app/home/page.tsx app/\(site\)/page.tsx 2>/dev/null || echo "  ⚠️  page.tsx home non trouvé"
  fi
  rm -rf app/home
fi

# Déplacer qui-sommes-nous dans (site)
if [ -d "app/qui-sommes-nous" ]; then
  mv app/qui-sommes-nous app/\(site\)/ 2>/dev/null || echo "  ⚠️  déplacement qui-sommes-nous"
fi

# 3. Créer les fichiers de base pour chaque page
echo "📝 Création des fichiers page.tsx de base..."

# Fonction pour créer un page.tsx basique
create_page() {
  local path=$1
  local title=$2
  
  if [ ! -f "$path/page.tsx" ]; then
    cat > "$path/page.tsx" << EOF
export default function ${title}Page() {
  return (
    <div>
      <h1>${title}</h1>
      <p>Page en construction</p>
    </div>
  );
}
EOF
    echo "  ✅ $path/page.tsx"
  fi
}

# Créer les pages principales
create_page "app/\(site\)" "Accueil"
create_page "app/\(site\)/camp" "Camp"
create_page "app/\(site\)/categories" "Categories"
create_page "app/\(site\)/communaute" "Communaute"
create_page "app/\(site\)/contact" "Contact"
create_page "app/\(site\)/inscription" "Inscription"
create_page "app/\(site\)/resultats" "Resultats"
create_page "app/\(site\)/boutique" "Boutique"

# Créer les pages d'authentification
create_page "app/\(auth\)/connexion" "Connexion"
create_page "app/\(auth\)/inscription" "Inscription"
create_page "app/\(auth\)/profil" "Profil"

# Sous-pages camp
create_page "app/\(site\)/camp/ouvert" "CampOuvert"
create_page "app/\(site\)/camp/ferme" "CampFerme"

# Sous-pages catégories
create_page "app/\(site\)/categories/baby" "Baby"
create_page "app/\(site\)/categories/benjamins" "Benjamins"
create_page "app/\(site\)/categories/cadets" "Cadets"
create_page "app/\(site\)/categories/espoirs" "Espoirs"
create_page "app/\(site\)/categories/juniors" "Juniors"
create_page "app/\(site\)/categories/minimes" "Minimes"
create_page "app/\(site\)/categories/seniors" "Seniors"

# Sous-pages communaute
create_page "app/\(site\)/communaute/basket-ecole" "BasketEcole"
create_page "app/\(site\)/communaute/benevole" "Benevole"
create_page "app/\(site\)/communaute/partenaire" "Partenaire"

# Sous-pages contact
create_page "app/\(site\)/contact/nous-joindre" "NousJoindre"
create_page "app/\(site\)/contact/reseaux" "Reseaux"

# Sous-pages inscription
create_page "app/\(site\)/inscription/adherer" "Adherer"
create_page "app/\(site\)/inscription/paiement" "Paiement"

# Sous-pages resultats
create_page "app/\(site\)/resultats/histoire" "Histoire"
create_page "app/\(site\)/resultats/matchs" "Matchs"
create_page "app/\(site\)/resultats/scores" "Scores"

# 4. Créer le layout du site
echo "🏗️  Création du layout site..."

if [ ! -f "app/\(site\)/layout.tsx" ]; then
  cat > "app/\(site\)/layout.tsx" << 'EOF'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
EOF
  echo "  ✅ app/(site)/layout.tsx"
fi

# 5. Mettre à jour le layout racine si nécessaire
echo "🔧 Vérification du layout racine..."

if [ ! -f "app/layout.tsx" ]; then
  cat > "app/layout.tsx" << 'EOF'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Club de Basket",
  description: "Site officiel du club de basket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
EOF
  echo "  ✅ app/layout.tsx (créé)"
fi

# 6. Créer les composants de base
echo "🧩 Création des composants layout..."

# Header
if [ ! -f "src/components/layout/Header.tsx" ]; then
  cat > "src/components/layout/Header.tsx" << 'EOF'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/qui-sommes-nous">Qui Sommes Nous</Link></li>
          <li><Link href="/categories">Catégories</Link></li>
          <li><Link href="/inscription">S'inscrire</Link></li>
          <li><Link href="/resultats">Résultats</Link></li>
          <li><Link href="/camp">Le Camp</Link></li>
          <li><Link href="/communaute">Communauté</Link></li>
          <li><Link href="/boutique">Boutique</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
EOF
  echo "  ✅ src/components/layout/Header.tsx"
fi

# Footer
if [ ! -f "src/components/layout/Footer.tsx" ]; then
  cat > "src/components/layout/Footer.tsx" << 'EOF'
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p>© 2024 Club de Basket - Tous droits réservés</p>
      </div>
    </footer>
  );
}
EOF
  echo "  ✅ src/components/layout/Footer.tsx"
fi

# MobileSidebar (skeleton)
if [ ! -f "src/components/layout/MobileSidebar.tsx" ]; then
  cat > "src/components/layout/MobileSidebar.tsx" << 'EOF'
export default function MobileSidebar() {
  return (
    <div>
      {/* À implémenter plus tard */}
    </div>
  );
}
EOF
  echo "  ✅ src/components/layout/MobileSidebar.tsx"
fi

# 7. Nettoyage
echo "🧹 Nettoyage..."

# Supprimer les dossiers vides inutiles
rmdir app/qui-sommes-nous 2>/dev/null

echo ""
echo "✅ Migration terminée !"
echo ""
echo "📋 Vérifie les points suivants :"
echo "   - Les fichiers ont bien été déplacés"
echo "   - Exécute 'tree -L 4 -I \"node_modules\"' pour voir le résultat"
echo "   - Teste le site avec 'npm run dev'"