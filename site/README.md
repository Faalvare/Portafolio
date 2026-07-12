# Portafolio — Fabian Alvarez

Personal portfolio site. Built with React 19, Vite 7, Tailwind CSS 4 and Framer Motion.

Based on [react-portfolio-template](https://github.com/yakovyakov/react-portfolio-template) by Yasik Reyes Cristobal (MIT). Customized end-to-end: content, projects pipeline (image + video cards), section layouts, print/CV styles, deployment config and copy.

## Development

```bash
npm install
npm run dev
```

Open <http://localhost:5173/Portafolio/>.

## Build

```bash
npm run build
```

The `prebuild` step optimizes images in `public/img/` and regenerates `index.html` with SEO meta from `src/configs/data/site.js` and `src/configs/lang/en.js`.

## Customizing

Content lives in `src/configs/`:

- `data/site.js` — contact info and social links
- `data/experience.js`, `data/education.js`, `data/projects.js`, `data/skills.js` — section data
- `lang/en.js`, `lang/es.js` — all user-facing strings (titles, descriptions, results)

Components and sections don't need to be edited for content changes.

## License

MIT.
