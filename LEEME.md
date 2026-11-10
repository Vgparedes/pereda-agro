# Pereda Agro · web

Rediseño de peredaagro.com.ar hecho por KRSp. **React + Vite + TypeScript + Tailwind v4**, con la estética técnica de Ascentio y los colores del logo de Pereda (verde y dorado).

## Arrancar

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`. Para probar la versión final: `npm run build && npm run preview`.

## Qué completar → Dónde

| Qué | Dónde |
|---|---|
| Todos los textos, fichas técnicas, ferias, links, mail, oficinas y plantas | `src/contenido.ts` |
| Título y descripción de cada página (Google y WhatsApp) | `paginas` en `src/contenido.ts` |
| URL final publicada | `sitio.url` en `src/contenido.ts` |
| Link del logo de KRSp en el pie | `SITIO_KRSP` en `src/contenido.ts` |
| Colores, fuentes y tamaños | `@theme` en `src/estilos/base.css` |
| Destinos del globo de Exportación | `exportacion.destinos` en `src/contenido.ts` |
| Fotos y logos | `public/img/` (WebP) |

## Cómo está armada

- Cada página es una carpeta al publicar (`/empresa/`, `/pisingallo/`...). `scripts/prerender.mjs` deja el HTML ya escrito de cada una, con su título.
- `src/paginas/`: una página por archivo. `src/components/`: header, pie, globo y bloques que se repiten.
- Tailwind de verdad: las clases van en el JSX y los colores salen solo del `@theme` (`bg-verde-noche`, `text-dorado`...).

## Publicar en GitHub Pages

1. Crear el repo **público** `pereda-agro` y subir la carpeta.
2. En GitHub: **Settings › Pages › Source: GitHub Actions**.
3. Con cada push a `main`, `.github/workflows/deploy.yml` compila y publica solo.
