import { inicio as t, instituciones, productos } from "../contenido";
import { CintaLogos, Llamado, TarjetaProducto } from "../components/Bloques";
import { archivo, Encabezado, enlace, Flecha, Numerada, Ruido } from "../components/Detalles";

export function Inicio() {
  return (
    <>
      {/* Hero: girasoles a pantalla completa con verde fuerte del lado del texto */}
      <section className="oscuro flex min-h-svh flex-col overflow-hidden">
        <img
          src={archivo("img/girasoles-1600.webp")} width={1920} height={776} alt="Campo de girasoles en flor" fetchPriority="high"
          // Versiones livianas: el celu baja la de 640 (40 KB); va tapada por el verde, no se nota.
          // "360px" es a propósito: con la densidad de pantalla del celu, así elige la de 640.
          srcSet={[640, 1080, 1600].map((w) => `${archivo(`img/girasoles-${w}.webp`)} ${w}w`).concat(`${archivo("img/girasoles.webp")} 1920w`).join(", ")}
          sizes="(max-width: 768px) 360px, 100vw"
          className="absolute inset-0 -z-20 size-full object-cover object-[60%_50%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(6_38_26/.7),rgb(6_38_26/.86)_45%,var(--color-verde-noche))] md:bg-[linear-gradient(180deg,transparent_55%,var(--color-verde-noche)),linear-gradient(90deg,rgb(6_38_26/.94),rgb(6_38_26/.82)_42%,rgb(6_38_26/.3))]"
        />
        <Ruido id="ruido-hero" />
        <div className="ancho grid gap-6 pt-(--arranque) pb-[8vh]">
          <p className="etiqueta text-sm md:text-base">{t.etiqueta}</p>
          <h1 className="max-w-[12ch] text-[clamp(3rem,7.4vw,7rem)]/[.94] tracking-[-.06em]">
            {t.titulo} <span className="resaltada text-dorado">{t.tituloAcento}</span>
          </h1>
          <p className="max-w-160 text-grande text-white/78">{t.bajada}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a className="boton" href="#productos">Ver productos <Flecha /></a>
            <a className="boton boton-borde" href={enlace("contacto")}>Contacto</a>
          </div>
        </div>
      </section>

      <section className="sec-pad relative isolate overflow-hidden" aria-labelledby="quienes-titulo">
        {/* Espiral de girasol (cómo se acomodan las semillas en la flor). Desde 1280 px asoma grande por la derecha;
            más chico, es un cuarto de espiral en la esquina de abajo, al lado del botón, para no quedar detrás del texto. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat [background-position:right_-130px_bottom_-130px] [background-size:260px] md:[background-position:right_-200px_bottom_-200px] md:[background-size:400px] xl:[background-position:right_-230px_center] xl:[background-size:600px]"
          style={{ backgroundImage: `url(${archivo("img/espiral-girasol.svg")})` }}
        />
        <div className="ancho grid items-center gap-[clamp(32px,6vw,96px)] md:grid-cols-2">
          <Encabezado etiqueta={t.quienes.etiqueta} titulo={t.quienes.titulo} id="quienes-titulo" />
          <div className="grid max-w-[62ch] gap-6" data-reveal>
            <blockquote className="border-l-3 border-verde pl-6">
              <p className="font-serif text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.08] font-semibold tracking-[-.01em] text-verde italic">{t.quienes.lema}</p>
              <p className="mt-3 font-mono text-etiqueta tracking-[.12em] text-tinta-suave uppercase">{t.quienes.lemaPie}</p>
            </blockquote>
            <p className="text-tinta-suave">{t.quienes.texto}</p>
            <p><a className="boton boton-borde" href={enlace("empresa")}>Conocé la empresa <Flecha /></a></p>
          </div>
        </div>
      </section>

      <section id="productos" className="oscuro sec-pad" aria-labelledby="productos-titulo">
        <Ruido id="ruido-productos" />
        <div className="ancho">
          <Encabezado etiqueta="Productos" titulo={<>Dos productos, todo el <span className="resaltada text-dorado">proceso</span>.</>} id="productos-titulo" className="mb-[clamp(48px,6vw,88px)]" />
          <div className="grid gap-[clamp(16px,2vw,28px)] md:grid-cols-2">
            {productos.map((p) => <TarjetaProducto key={p.ruta} p={p} />)}
          </div>
        </div>
      </section>

      <section className="py-[clamp(64px,7vw,112px)]" aria-labelledby="pilares-titulo">
        <div className="ancho">
          <Encabezado etiqueta="Cómo trabajamos" titulo="Tres cosas que no cambian." id="pilares-titulo" tituloClase="text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.05] tracking-[-.05em]" className="mb-[clamp(32px,4vw,56px)]" />
          <Numerada items={t.pilares} compacta />
        </div>
      </section>

      <section className="border-y border-tinta/15 bg-papel py-12" aria-labelledby="red-titulo">
        <div className="ancho mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="red-titulo" className="etiqueta">Ferias e instituciones del sector</h2>
          <a href={enlace("eventos")} className="subrayado inline-flex min-h-11 items-center gap-2 text-sm text-verde">Ver ferias e instituciones <Flecha /></a>
        </div>
        <CintaLogos items={instituciones} />
      </section>

      <Llamado />
    </>
  );
}
