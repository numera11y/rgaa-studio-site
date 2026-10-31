# RGAA Studio — site de présentation

Site vitrine en français pour RGAA Studio, développé avec Astro, Tailwind CSS 4 et Lucide. Un parcours synchronise au scroll les étapes du récit et les captures réelles de l’application ; les étapes restent également accessibles par des liens directs.

## Développement local

```sh
npm ci
npm run dev
```

Vérification et build statique :

```sh
npm run check
npm run build
npm run preview
```

## Publication

Le workflow GitHub Actions publie automatiquement `main` sur GitHub Pages à l’adresse `https://numera11y.github.io/rgaa-studio-site/`. Il construit Astro avec la base du dépôt déjà configurée et resynchronise le catalogue des versions toutes les six heures depuis les métadonnées publiques de GitHub Releases. Aucun domaine personnalisé n’est réglé pour l’instant.

## Médias

Les images optimisées utilisées par la page sont dans `public/media/`. Elles proviennent de `media/press-kit/` dans le dépôt de l’application. Les captures utilisent le site public `numera11y.fr` et les résultats axe-core sont des suggestions observées lors de la capture ; aucune décision humaine n’est suggérée.

## Faits produit

RGAA Studio est une application de bureau pour organiser un audit autour de ses pages, d’un référentiel, de l’examen humain et des preuves. RGAA et WCAG sont pris en charge. Les analyses automatiques sont des aides à la revue, pas une déclaration de conformité. Les dossiers sont locaux à l’application.
