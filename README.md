# Portafolio — Fabian Alvarez

Sitio personal en vivo: **https://faalvare.github.io/Portafolio/**

React 19 + Vite + Tailwind CSS + Framer Motion. Bilingüe (ES/EN), con secciones de experiencia,
habilidades y proyectos con galería de capturas.

## Estructura

```
.github/workflows/   CI: build + deploy automático a GitHub Pages en cada push a main
site/                Código de la app (raíz de Vite) — ver site/README.md para desarrollo local
```

## Deploy

Cada push a `main` dispara `deploy.yml`: build de `site/` con Vite y publicación en GitHub Pages
vía GitHub Actions (`actions/deploy-pages`).

## Nota

Parte del desarrollo y contenido de este sitio se hizo con la asistencia de Claude (Anthropic) como
herramienta de trabajo — el detalle está en la sección "Acerca de mí" del sitio.

## Licencia

MIT.
