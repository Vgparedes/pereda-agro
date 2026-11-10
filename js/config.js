/* =========================================================================
   Pereda Agro · config.js
   TODO lo que puede cambiar (mail, direcciones, menú) está acá.
   Para cambiar un dato no hace falta tocar los .html.
   ========================================================================= */

// Link del logo de KRSp en el pie. Vacío hasta que KRSp tenga página.
const SITIO_KRSP = "";

const PEREDA = {
  mail: "info@peredaagro.com.ar",

  oficinas: [
    {
      ciudad: "Ciudad de Buenos Aires",
      lineas: ["Paraguay 866, 7.º piso", "C1057AAL · CABA"],
      mapa: "https://goo.gl/maps/57fTWmRA5ewD56ZN9",
    },
    {
      ciudad: "Trenque Lauquen",
      lineas: ["Gdor. Irigoyen 351", "B6400AGD · Provincia de Buenos Aires"],
      mapa: "https://goo.gl/maps/oRk7KY9c9cfWJiVM8",
    },
  ],

  // Menú: [texto, archivo]. El orden de acá es el orden del header.
  menu: [
    ["Empresa", "empresa.html"],
    ["Girasol confitero", "girasol.html"],
    ["Pisingallo", "pisingallo.html"],
    ["Exportación", "exportacion.html"],
    ["Eventos", "eventos.html"],
    ["Galería", "galeria.html"],
    ["Links", "links.html"],
  ],
};
