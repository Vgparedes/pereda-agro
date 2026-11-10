/** Bloques que se repiten entre páginas. */
import type { ReactNode } from "react";
import type { Enlace, Producto } from "../contenido";
import { archivo, enlace, Flecha, Ruido } from "./Detalles";

/** Primera pantalla de las páginas internas: fondo verde noche, foto apagada opcional y título gigante. */
export function Cabecera({ etiqueta, titulo, bajada, foto, migas, children, pantallaCompleta = true }: {
  etiqueta: string; titulo: string; bajada: string; foto?: string; migas?: ReactNode; children?: ReactNode;
  /** true (por defecto): ocupa toda la primera pantalla y centra el texto, como el hero del inicio */
  pantallaCompleta?: boolean;
}) {
  return (
    <section
      className={`oscuro overflow-hidden ${pantallaCompleta
        ? "flex min-h-svh flex-col pt-(--arranque) pb-[8vh]"
        : "pt-[calc(var(--nav)+clamp(64px,12vw,160px))] pb-[clamp(56px,8vw,112px)]"}`}
    >
      {foto && (
        <>
          <img src={archivo(`img/${foto}`)} width={1080} height={700} alt="" fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover opacity-30" />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-verde-noche from-20% to-verde-noche/55" aria-hidden="true" />
        </>
      )}
      <Ruido id="ruido-cabecera" />
      <div className="ancho grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-6.5">
          {/* Las migas van encima de la etiqueta sin empujarla: así la etiqueta queda a la misma altura en todas las páginas */}
          <div className="relative flex">
            {migas && <p className="absolute bottom-full mb-4 font-mono text-etiqueta tracking-widest text-white/78 uppercase">{migas}</p>}
            <p className="etiqueta">{etiqueta}</p>
          </div>
          <h1 className="max-w-[14ch] text-display">{titulo}</h1>
          <p className="max-w-160 text-grande text-white/78">{bajada}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

/** Llamado al final de cada página. */
export function Llamado({ titulo = "¿Querés trabajar con nosotros?", texto = "Contanos qué producto, calibre y volumen necesitás y te respondemos a la brevedad." }: { titulo?: string; texto?: string }) {
  return (
    <section className="sec-pad relative isolate overflow-hidden" aria-labelledby="llamado-titulo">
      {/* Girasoles de costado en trazo fino. Ancho FIJO (391 px en celu, 680 en compu) y pegados abajo a la derecha:
          el pie usa el mismo ancho para las raíces, así los tallos siguen debajo de la tierra sin cortarse. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat [background-position:right_bottom] [background-size:391px_auto] md:[background-size:680px_auto]"
        style={{ backgroundImage: `url(${archivo("img/girasoles-linea.svg")})` }}
      />
      {/* Todo el texto y el botón a la izquierda; el lado derecho queda libre para los girasoles.
          En celu deja abajo el espacio de los girasoles para que no queden detrás del botón. */}
      <div className="ancho pb-[200px] md:pb-0" data-reveal>
        <div className="grid max-w-160 justify-items-start gap-5">
          <p className="etiqueta">Contacto</p>
          <h2 id="llamado-titulo" className="max-w-[14ch] text-titulo">{titulo}</h2>
          <p className="text-grande text-tinta-suave">{texto}</p>
          <a className="boton mt-3" href={enlace("contacto")}>Escribinos <Flecha /></a>
        </div>
      </div>
    </section>
  );
}

/** Tarjeta grande de producto: foto, nombre y flecha. */
export function TarjetaProducto({ p }: { p: Producto }) {
  return (
    <a
      href={enlace(p.ruta)}
      data-reveal
      className="group relative isolate flex min-h-[clamp(380px,42vw,560px)] flex-col justify-end gap-3 overflow-hidden rounded-lg bg-verde-noche ring-1 ring-white/15 p-[clamp(24px,3vw,40px)] text-white"
    >
      <img src={archivo(`img/${p.fotoTarjeta}`)} width={800} height={520} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 ease-krsp group-hover:scale-105" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_28%,rgb(6_38_26/.55)_58%,rgb(6_38_26/.8)_100%)]" />
      <p className="etiqueta">{p.etiquetaCorta}</p>
      <h3 className="text-[clamp(1.9rem,3.4vw,3.2rem)] leading-none tracking-[-.05em]">{p.nombre}</h3>
      <p className="max-w-[34ch] text-white/78">{p.resumen}</p>
      <span className="inline-flex items-center gap-2.5 font-medium text-dorado [&_svg]:transition-transform group-hover:[&_svg]:translate-x-1">Ver ficha <Flecha /></span>
    </a>
  );
}

/** Lista numerada de ferias o instituciones, con su link. */
export function ListaEnlaces({ items }: { items: Enlace[] }) {
  return (
    <ol className="border-t border-tinta/15">
      {items.map((it, i) => (
        <li key={it.nombre} data-reveal className="grid gap-3 border-b border-tinta/15 py-[clamp(28px,3.4vw,44px)] md:grid-cols-[90px_1fr_1.4fr] md:gap-6">
          <span className="font-mono text-etiqueta leading-[2.2] tracking-widest text-verde">{String(i + 1).padStart(2, "0")}</span>
          <div className="flex items-start gap-4">
            {it.logo && (
              <img src={archivo(`img/instituciones/${it.logo}`)} width={it.logoTam?.[0]} height={it.logoTam?.[1]} alt="" loading="lazy" className="size-14 shrink-0 rounded-md bg-white object-contain p-1 ring-1 ring-tinta/10" />
            )}
            <div>
              <h3 className="text-sub">{it.nombre}</h3>
              <p className="mt-1.5 font-mono text-etiqueta tracking-widest text-tinta-suave uppercase">{it.lugar}</p>
            </div>
          </div>
          <div>
            <p className="max-w-[62ch] text-tinta-suave">{it.texto}</p>
            <a href={it.url} target="_blank" rel="noopener" className="subrayado mt-3 inline-flex min-h-11 items-center gap-2 font-mono text-sm text-verde">
              {it.url.replace(/^https?:\/\//, "")} <Flecha diagonal /><span className="sr-only">(se abre en otra pestaña)</span>
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Cinta infinita de logos (ferias e instituciones), en gris y con los bordes desvanecidos. */
export function CintaLogos({ items }: { items: Enlace[] }) {
  const lista = (copia: boolean) => (
    <ul aria-hidden={copia || undefined} className="flex flex-none items-center gap-[clamp(38px,6vw,84px)] pr-[clamp(38px,6vw,84px)]">
      {items.filter((i) => i.logo).map((i) => (
        <li key={i.nombre}>
          <img src={archivo(`img/instituciones/${i.logo}`)} width={i.logoTam?.[0]} height={i.logoTam?.[1]} alt={copia ? "" : i.nombre} loading="lazy" className="h-[clamp(40px,4vw,56px)] w-auto opacity-75 grayscale" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-[cinta_60s_linear_infinite]">
        {lista(false)}
        {lista(true)}
      </div>
    </div>
  );
}
