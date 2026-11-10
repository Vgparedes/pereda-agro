# Pereda Agro · web

Rediseño de peredaagro.com.ar hecho por KRSp. HTML, CSS y JS puros, sin build: se sube tal cual a GitHub Pages.

Para verla en la compu: `python3 -m http.server 8000` dentro de esta carpeta y abrir `localhost:8000`.

## Qué completar → Dónde

| Qué | Dónde |
|---|---|
| Mail, oficinas, menú | `js/config.js` |
| Link del logo de KRSp en el pie | `SITIO_KRSP` en `js/config.js` |
| Colores, fuentes y tamaños | arriba de todo en `css/styles.css` (`:root`) |
| Textos de cada página | el `.html` de cada página |
| URL final (canonical y vista previa al compartir) | `<head>` de cada `.html` (hoy apunta a `vgparedes.github.io/pereda-agro/`) |
| Fotos | `img/` (WebP) |

## Páginas

`index.html` (Inicio), `empresa.html`, `girasol.html`, `pisingallo.html`, `exportacion.html`, `eventos.html`, `galeria.html` (álbum de Flickr), `links.html`, `contacto.html`.

El header y el pie se arman solos desde `js/layout.js` con los datos de `config.js`.

**Caché:** los links a CSS y JS llevan `?v=1`. Subir el número en cada cambio.
