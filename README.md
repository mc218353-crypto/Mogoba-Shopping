# MOGOBA SHOPPING

Boutique e-commerce mode premium (React + Vite), inspirée du minimalisme éditorial, adaptée au marché malien.

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Supabase (optionnel)

Copier `.env.example` en `.env` et renseigner :

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Sans configuration, l'application fonctionne en mode démo (données locales, authentification locale).

## Fonctionnalités

- Accueil éditorial, collections, nouveautés, meilleures ventes
- Boutique avec filtres (catégorie, taille, couleur, prix) et tri
- Fiche produit (galerie, tailles, couleurs, stock)
- Panier dynamique, favoris, recherche
- Commande (Orange Money, Wave, paiement à la livraison)
- Compte client, suivi de commande, contact
- Tableau de bord administrateur (démo)