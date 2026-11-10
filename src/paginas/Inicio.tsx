import { inicio as t, links, productos } from "../contenido";
import { CintaLogos, Llamado, TarjetaProducto } from "../components/Bloques";
import { archivo, Encabezado, enlace, Flecha, Numerada, Ruido } from "../components/Detalles";

export function Inicio() {
  return (
    <>
      {/* Hero: girasoles a pantalla completa con verde fuerte del lado del texto */}
      <section className="oscuro flex min-h-svh flex-col justify-end overflow-hidden">
        <img
          src={archivo("img/girasoles.webp")} width={1920} height={776} alt="Campo de girasoles en flor" fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover object-[60%_50%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(6_38_26/.7),rgb(6_38_26/.86)_45%,var(--color-verde-noche))] md:bg-[linear-gradient(180deg,transparent_55%,var(--color-verde-noche)),linear-gradient(90deg,rgb(6_38_26/.94),rgb(6_38_26/.82)_42%,rgb(6_38_26/.3))]"
        />
        <Ruido id="ruido-hero" />
        <div className="ancho grid gap-6 pt-[calc(var(--nav)+8vh)] pb-[clamp(32px,5vh,64px)]">
          <p className="etiqueta">{t.etiqueta}</p>
          <h1 className="max-w-[12ch] text-[clamp(3rem,7.4vw,7rem)]/[.94] tracking-[-.06em]">
            {t.titulo} <span className="text-dorado">{t.tituloAcento}</span>
          </h1>
          <p className="max-w-160 text-grande text-white/78">{t.bajada}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a className="boton" href="#productos">Ver productos <Flecha /></a>
            <a className="boton boton-borde" href={enlace("contacto")}>Contacto</a>
          </div>
          {/* Números grandes separados por líneas verticales */}
          <ul aria-label="Pereda en números" className="grid grid-cols-2 border-t border-white/18 md:grid-cols-4">
            {t.datos.map((d, i) => (
              <li
                key={d.texto}
                className={`grid gap-1.5 pt-7 pr-6 pb-1 ${i % 2 ? "border-l border-white/18 pl-6" : ""} ${i === 2 ? "md:border-l md:border-white/18 md:pl-6" : ""} ${i >= 2 ? "max-md:border-t max-md:border-white/18" : ""}`}
              >
                <strong className="text-[clamp(2.2rem,4.4vw,4rem)] leading-none font-medium tracking-[-.05em]">{d.numero}</strong>
                <span className="font-mono text-etiqueta tracking-widest text-white/78 uppercase">{d.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec-pad" aria-labelledby="quienes-titulo">
        <div className="ancho grid items-center gap-[clamp(32px,6vw,96px)] md:grid-cols-2">
          <Encabezado etiqueta={t.quienes.etiqueta} titulo={t.quienes.titulo} id="quienes-titulo" />
          <div className="grid max-w-[62ch] gap-4 text-tinta-suave" data-reveal>
            {t.quienes.parrafos.map((p) => <p key={p}>{p}</p>)}
            <p className="mt-4"><a className="boton boton-borde" href={enlace("empresa")}>Conocé la empresa <Flecha /></a></p>
          </div>
        </div>
      </section>

      <section id="productos" className="oscuro sec-pad" aria-labelledby="productos-titulo">
        <Ruido id="ruido-productos" />
        <div className="ancho">
          <Encabezado etiqueta="Productos" titulo="Dos productos, todo el proceso." id="productos-titulo" className="mb-[clamp(48px,6vw,88px)]" />
          <div className="grid gap-[clamp(16px,2vw,28px)] md:grid-cols-2">
            {productos.map((p) => <TarjetaProducto key={p.ruta} p={p} />)}
          </div>
        </div>
      </section>

      <section className="sec-pad" aria-labelledby="pilares-titulo">
        <div className="ancho">
          <Encabezado etiqueta="Cómo trabajamos" titulo="Tres cosas que no cambian." id="pilares-titulo" className="mb-[clamp(48px,6vw,88px)]" />
          <Numerada items={t.pilares} />
        </div>
      </section>

      <section className="border-y border-tinta/15 bg-papel py-12" aria-labelledby="red-titulo">
        <div className="ancho mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="red-titulo" className="etiqueta">Ferias e instituciones del sector</h2>
          <a href={enlace("links")} className="subrayado inline-flex min-h-11 items-center gap-2 text-sm text-verde">Ver todos <Flecha /></a>
        </div>
        <CintaLogos items={links} />
      </section>

      <Llamado />
    </>
  );
}
