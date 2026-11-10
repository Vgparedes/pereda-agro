/* =========================================================================
   Pereda Agro · contenido.ts
   TODOS los textos y datos de la web. Para cambiar un texto, un mail o una
   ficha técnica se toca este archivo; los componentes no.
   ========================================================================= */

// Link del logo de KRSp en el pie. Vacío hasta que KRSp tenga página.
export const SITIO_KRSP = "";

export const sitio = {
  nombre: "Pereda Agro",
  razonSocial: "Pereda Agro S.A.",
  // URL final publicada (con / al final). Si se publica en otro lado, cambiar acá.
  url: "https://vgparedes.github.io/pereda-agro/",
  lema: "Agregado de valor, producción y servicios.",
};

export const contacto = {
  mail: "info@peredaagro.com.ar",
  temas: ["Girasol confitero", "Pisingallo", "Exportación", "Otra consulta"],
  oficinas: [
    { ciudad: "Ciudad de Buenos Aires", lineas: ["Paraguay 866, 7.º piso", "C1057AAL · CABA"], mapa: "https://goo.gl/maps/57fTWmRA5ewD56ZN9" },
    { ciudad: "Trenque Lauquen", lineas: ["Gdor. Irigoyen 351", "B6400AGD · Provincia de Buenos Aires"], mapa: "https://goo.gl/maps/oRk7KY9c9cfWJiVM8" },
  ],
  plantas: [
    { nombre: "Mari Lauquen", producto: "Girasol confitero", coords: `36°07'44.5"S 62°58'40.3"W`, nota: "Dos plantas en el mismo predio; la más nueva, de 2015.", mapa: "https://www.google.com/maps?q=-36.129028,-62.977861" },
    { nombre: "Lincoln", producto: "Pisingallo", coords: `34°50'00.4"S 61°36'12.6"W`, nota: "Construida en 2014.", mapa: "https://www.google.com/maps?q=-34.833444,-61.6035" },
  ],
  clima: "http://nuevacastilla.com.ar/meteorologia/mb3.htm",
};

/* ---------- Páginas: ruta, texto del menú y datos para Google / WhatsApp ---------- */
export type Ruta = "" | "empresa" | "girasol-confitero" | "pisingallo" | "exportacion" | "eventos" | "contacto";

export const paginas: Record<Ruta, { menu: string; titulo: string; descripcion: string }> = {
  "": { menu: "Inicio", titulo: "Pereda Agro · Girasol confitero y pisingallo desde Argentina", descripcion: "Pereda Agro produce, clasifica y exporta girasol confitero y maíz pisingallo desde la Provincia de Buenos Aires. Una familia del agro desde 1883." },
  empresa: { menu: "Empresa", titulo: "Empresa · Pereda Agro", descripcion: "Pereda Agro S.A. es la empresa más joven del grupo Pereda: una familia del agro desde 1883 que produce granos, hacienda, girasol confitero y pisingallo." },
  "girasol-confitero": { menu: "Girasol confitero", titulo: "Girasol confitero · Pereda Agro", descripcion: "Girasol confitero inshell de Pereda Agro: calibres 22/64 up, 20/64 y 16-18/64, en bolsas de 5, 10, 20 kg o 50 lbs. Producido y clasificado en Argentina." },
  pisingallo: { menu: "Pisingallo", titulo: "Maíz pisingallo · Pereda Agro", descripcion: "Maíz pisingallo de Pereda Agro: calibre 65-75 granos en 10 g, explosión mayor a 97% y expansión de 38/40 a 44/46. Bolsas de 5 a 25 kg o 50 lbs." },
  exportacion: { menu: "Exportación", titulo: "Exportación · Pereda Agro", descripcion: "Pereda Agro exporta girasol confitero y maíz pisingallo desde Argentina a los principales mercados del mundo, con experiencia y know-how propios." },
  eventos: { menu: "Ferias y sector", titulo: "Ferias y sector · Pereda Agro", descripcion: "Pereda Agro participa desde 2012 en Anuga, Gulfood y SIAL Paris. Además, las instituciones del agro que seguimos: ASAGIR, CREA, MAIZAR, IPCVA, USDA y más." },
  contacto: { menu: "Contacto", titulo: "Contacto · Pereda Agro", descripcion: "Contactá a Pereda Agro: info@peredaagro.com.ar. Oficinas en CABA y Trenque Lauquen, plantas en Mari Lauquen y Lincoln, Provincia de Buenos Aires." },
};

/** Orden del menú del header (Contacto va aparte, como botón). */
export const menu: Ruta[] = ["empresa", "girasol-confitero", "pisingallo", "exportacion", "eventos"];

/* ---------- Inicio ---------- */
export const inicio = {
  etiqueta: "Desde 1883 · Provincia de Buenos Aires",
  titulo: "Del campo argentino",
  tituloAcento: "al mundo.",
  bajada: "Producimos, clasificamos y exportamos girasol confitero y maíz pisingallo. Una familia dedicada al agro desde hace más de un siglo.",
  quienes: {
    etiqueta: "Quiénes somos",
    titulo: "Una familia de larga trayectoria en la producción agrícola.",
    // El lema va destacado en verde, como una cita
    lema: "“Agregado de valor, producción y servicios.”",
    lemaPie: "El lema de Pereda Agro",
    texto: "Somos un grupo empresario que desde hace más de 100 años se dedica a la producción y comercialización de alimentos agrícola-ganaderos, para la Argentina y los principales mercados del mundo. Pereda Agro S.A. es la empresa más joven del grupo: gerenciamiento agrícola, acopio y acondicionamiento de granos, y producción, clasificación y exportación de girasol confitero y popcorn.",
  },
  pilares: [
    { titulo: "Tradición familiar", texto: "Desde 1883 la familia Pereda brinda valor agregado, producción y servicios. Hoy tres generaciones trabajan juntas para mantener esa trayectoria." },
    { titulo: "Sustentabilidad", texto: "Producimos cuidando el ambiente, con rotación de cultivos y uso racional de los recursos." },
    { titulo: "Calidad de servicio", texto: "Aseguramos la calidad desde la producción primaria hasta la entrega en los distintos mercados." },
  ],
};

/* ---------- Empresa ---------- */
export const empresa = {
  bajada: "La familia Pereda conserva su tradición de brindar valor agregado, servicio e innovación a la producción. Pereda Agro S.A. es la nueva generación: más de diez años marcando tendencia en calidad.",
  bloques: [
    { etiqueta: "Tradición", titulo: "Más de 100 años en el agro.", texto: "Somos una familia empresaria que desde hace más de un siglo se dedica a la producción y comercialización de alimentos agrícola-ganaderos, no solo para la Argentina sino también para los principales mercados del mundo.", foto: "hacienda.webp", alt: "Hacienda en el campo, con lotes de maíz atrás" },
    { etiqueta: "Lo que hacemos", titulo: "Campo, granos y hacienda.", texto: "Explotamos campos propios y arrendados donde producimos trigo, cebada, maíz, soja y girasol. Además nos dedicamos a la cría y engorde de hacienda vacuna, alimentada con materia prima de nuestra propia producción.", foto: "planta-silos.webp", alt: "Planta de silos de Pereda en el campo" },
    { etiqueta: "Tecnología", titulo: "De la siembra al embolsado.", texto: "Aplicamos tecnología de punta desde la producción a campo hasta la limpieza, el clasificado y el embolsado de toda la gama de productos, con una gestión orientada a la producción sustentable.", foto: "proceso-girasol.webp", alt: "Semillas de girasol pasando por la línea de clasificación" },
    { etiqueta: "Calidad", titulo: "Integrados de punta a punta.", texto: "Una de nuestras mayores fortalezas es la integración vertical: aseguramos la calidad del producto en todas sus etapas, desde la producción primaria hasta la entrega en los distintos mercados.", foto: "feria.webp", alt: "Stand de Pereda en una feria internacional de alimentos" },
  ],
  servicios: [
    { titulo: "Gerenciamiento agrícola", texto: "Planificación y manejo de la producción a campo." },
    { titulo: "Acopio y acondicionamiento", texto: "Recepción, limpieza y almacenamiento de granos en planta propia." },
    { titulo: "Producción y clasificación", texto: "Girasol confitero y maíz pisingallo, clasificados por calibre." },
    { titulo: "Exportación", texto: "Del campo argentino a los principales mercados del mundo." },
  ],
};

/* ---------- Productos ---------- */
/** Calibre dibujado a escala: diámetro en mm; "hasta" = fin del rango; "oMas" = ese tamaño o más grande. */
export type CalibreEscala = { calibre: string; mm: number; hasta?: number; oMas?: boolean; texto: string };
export type Spec = { nombre: string; valor?: string; chips?: string[]; nota?: string; escala?: CalibreEscala[] };
export type Producto = {
  ruta: Ruta; nombre: string; resumen: string; etiquetaCorta: string; bajada: string;
  fotoCabecera: string; fotoTarjeta: string; bolsa: { src: string; w: number; h: number; alt: string };
  intro: string[]; specs: Spec[];
};

export const productos: Producto[] = [
  {
    ruta: "girasol-confitero", nombre: "Girasol confitero",
    resumen: "Semilla de gran porte para consumo directo, snack y repostería.",
    etiquetaCorta: "Inshell · 16/64 a 22/64 up",
    bajada: "Argentina está entre los principales productores del mundo, gracias a condiciones agroecológicas que dan alto rendimiento y calidad.",
    fotoCabecera: "girasoles-1080.webp", fotoTarjeta: "proceso-girasol.webp",
    bolsa: { src: "bolsa-girasol.webp", w: 360, h: 640, alt: "Bolsa de semillas de girasol Pereda" },
    intro: [
      "A diferencia del girasol aceitero, el confitero tiene una semilla de gran porte que se consume de forma directa. Por eso las buenas prácticas en el campo y en la planta son clave.",
      "Es un producto natural, sabroso y rico en minerales y vitaminas: se consume como snack o como ingrediente de repostería. Se clasifica por diámetro: cuanto más grande el calibre, mayor su valor. Los grandes van a consumo humano y los chicos a alimento para mascotas.",
    ],
    specs: [
      { nombre: "Presentación", valor: "Inshell (con cáscara)" },
      { nombre: "Packaging", chips: ["5 kg", "10 kg", "20 kg", "50 lbs"] },
      {
        // Sin chips: los granos dibujados ya muestran cada calibre con su medida
        nombre: "Calibres",
        nota: "El calibre es el ancho del grano, medido en 64avos de pulgada.",
        // 1/64 de pulgada = 0,397 mm. 22/64 = 8,73 · 20/64 = 7,94 · 16/64 = 6,35 · 18/64 = 7,14
        escala: [
          { calibre: "22/64 up", mm: 8.73, oMas: true, texto: "8,73 mm o más" },
          { calibre: "20/64", mm: 7.94, texto: "7,94 mm" },
          { calibre: "16-18/64", mm: 6.35, hasta: 7.14, texto: "6,35 a 7,14 mm" },
        ],
      },
      { nombre: "Equivalencia", nota: "22/64 de pulgada = 0,34 pulgadas = 8,73 mm." },
    ],
  },
  {
    ruta: "pisingallo", nombre: "Maíz pisingallo",
    resumen: "Grano de la pampa húmeda, ideal para popcorn casero o industrial.",
    etiquetaCorta: "Popcorn · Explosión mayor a 97%",
    bajada: "La pampa húmeda tiene condiciones excelentes para el maíz, y Argentina es reconocida en el mundo por su calidad.",
    fotoCabecera: "maiz-800.webp", fotoTarjeta: "maiz-800.webp",
    bolsa: { src: "bolsa-pisingallo.webp", w: 394, h: 707, alt: "Bolsa de popcorn Pereda" },
    intro: [
      "La planta es muy parecida a la del maíz común, pero da un grano más chico y redondeado, destinado al consumo humano: con él se hace el popcorn, un snack sano, nutritivo y conocido en todo el mundo, casero o industrializado para microondas.",
      "Su calidad se mide por tres valores: calibre, explosión y expansión.",
    ],
    specs: [
      { nombre: "Packaging", chips: ["5 kg", "10 kg", "20 kg", "25 kg", "50 lbs"] },
      { nombre: "Calibre", valor: "65–75 granos en 10 g", nota: "Tamaño del grano: cuántos granos entran en 10 g (0,35 oz)." },
      { nombre: "Explosión", valor: "Mayor a 97%", nota: "Porcentaje de granos que se expanden hasta formar un pochoclo." },
      { nombre: "Expansión", chips: ["38/40", "40/42", "42/44", "44/46"], nota: "Cuántas veces aumenta el volumen del grano respecto de su tamaño inicial." },
    ],
  },
];

/* ---------- Exportación ---------- */
export const exportacion = {
  bajada: "Con los años desarrollamos un conocimiento profundo de lo que necesitan los mercados locales y del exterior.",
  texto: "Nuestra experiencia en producción y exportación de productos agrícola-ganaderos nos permitió desarrollar una amplia cobertura a nivel mundial.",
  // Origen y regiones de destino (las del mapa de la web original). [latitud, longitud]
  origen: [-35.97, -62.73] as [number, number],
  destinos: [
    { region: "América del Norte", lugar: [39, -95] as [number, number] },
    { region: "Europa", lugar: [48, 8] as [number, number] },
    { region: "Medio Oriente", lugar: [27, 42] as [number, number] },
    { region: "Asia", lugar: [42, 100] as [number, number] },
    { region: "Oceanía", lugar: [-25, 134] as [number, number] },
  ],
  pasos: [
    { titulo: "Producción", texto: "Campos propios y arrendados en la Provincia de Buenos Aires." },
    { titulo: "Proceso", texto: "Limpieza, clasificado y embolsado en nuestras plantas de Mari Lauquen y Lincoln." },
    { titulo: "Entrega", texto: "Calidad asegurada hasta la entrega en cada mercado." },
  ],
};

/* ---------- Ferias e instituciones (página "Ferias y sector" y cinta de logos del inicio) ---------- */
export type Enlace = { nombre: string; lugar: string; texto: string; url: string; logo?: string; logoTam?: [number, number] };

export const ferias: Enlace[] = [
  { nombre: "Anuga", lugar: "Colonia, Alemania · cada dos años", texto: "Una de las exposiciones de comida y bebida más grandes del mundo, dividida en 10 sub-exposiciones por categoría.", url: "https://www.anuga.com", logo: "anuga.webp", logoTam: [75, 86] },
  { nombre: "Gulfood", lugar: "Dubái · todos los años", texto: "Feria anual de alimentos y bebidas sin alcohol, en el Dubai World Trade Centre.", url: "https://www.gulfood.com", logo: "gulfood.webp", logoTam: [229, 147] },
  { nombre: "SIAL Paris", lugar: "París, Francia · cada dos años", texto: "El mercado global de alimentos: feria especializada en la industria del procesamiento de alimentos.", url: "https://www.sialparis.com", logo: "sialparis.webp", logoTam: [173, 74] },
];

export const instituciones: Enlace[] = [
  ...ferias,
  { nombre: "Global Pulse Confederation", lugar: "Dubái", texto: "Antes CICILS IPTIC. Organización sin fines de lucro con sede en el Dubai Multi Commodities Centre (DMCC).", url: "https://globalpulses.com", logo: "gpc.webp", logoTam: [128, 79] },
  { nombre: "ASAGIR", lugar: "Argentina", texto: "Asociación civil que promueve el desarrollo del girasol, sus derivados y subproductos en la Argentina.", url: "https://www.asagir.org.ar", logo: "asagir.webp", logoTam: [125, 66] },
  { nombre: "CREA", lugar: "Argentina", texto: "Asociación Argentina de Consorcios Regionales de Experimentación Agrícola.", url: "https://www.crea.org.ar", logo: "aacrea.webp", logoTam: [133, 98] },
  { nombre: "IPCVA", lugar: "Argentina", texto: "Instituto de Promoción de la Carne Vacuna Argentina: consolida la imagen de la carne argentina en el mundo.", url: "https://www.ipcva.com.ar", logo: "ipcva.webp", logoTam: [123, 88] },
  { nombre: "MAIZAR", lugar: "Argentina", texto: "Reúne a toda la cadena productiva del maíz para impulsar el crecimiento de la industria.", url: "https://www.maizar.org.ar", logo: "maizar.webp", logoTam: [121, 80] },
  { nombre: "Secretaría de Agricultura", lugar: "Argentina", texto: "Agricultura, Ganadería y Pesca de la Nación.", url: "https://www.argentina.gob.ar/agricultura", logo: "minagri.webp", logoTam: [127, 105] },
  { nombre: "National Sunflower Association", lugar: "Estados Unidos", texto: "Organización sin fines de lucro que promueve la semilla de girasol y sus derivados.", url: "https://www.sunflowernsa.com", logo: "sunflowernsa.webp", logoTam: [128, 126] },
  { nombre: "USDA", lugar: "Estados Unidos", texto: "Departamento de Agricultura de los Estados Unidos.", url: "https://www.usda.gov", logo: "usda.webp", logoTam: [127, 93] },
];
