/** Piezas chiquitas que se usan en varias páginas. */
import type { ReactNode } from "react";
import type { Ruta } from "../contenido";

/** Ruta a un archivo de public/ respetando la base de GitHub Pages. */
export const archivo = (a: string) => `${import.meta.env.BASE_URL}${a.replace(/^\//, "")}`;

/** Link a otra página de la web ("" es el inicio). */
export const enlace = (r: Ruta, ancla = "") => `${import.meta.env.BASE_URL}${r ? `${r}/` : ""}${ancla}`;

export function Flecha({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-4 shrink-0">
      <path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

/** Textura de grano sobre fondos oscuros. Necesita un id distinto en cada sección. */
export function Ruido({ id }: { id: string }) {
  return (
    <div className="ruido" aria-hidden="true">
      <svg className="size-full">
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency=".82" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${id})`} />
      </svg>
    </div>
  );
}

/** Encabezado de sección: etiqueta + título (+ bajada opcional). */
export function Encabezado({ etiqueta, titulo, id, bajada, className = "", tituloClase = "text-titulo" }: { etiqueta: string; titulo: ReactNode; id: string; bajada?: string; className?: string; tituloClase?: string }) {
  return (
    <div className={`grid gap-5 ${className}`} data-reveal>
      <p className="etiqueta">{etiqueta}</p>
      <h2 id={id} className={tituloClase}>{titulo}</h2>
      {bajada && <p className="max-w-160 text-grande text-tinta-suave in-[.oscuro]:text-white/78">{bajada}</p>}
    </div>
  );
}

/** Lista numerada 01, 02... con líneas finas. "compacta" achica el alto de cada fila. */
export function Numerada({ items, compacta = false }: { items: { titulo: string; texto: string }[]; compacta?: boolean }) {
  return (
    <ol className="border-t border-tinta/15 in-[.oscuro]:border-white/18">
      {items.map((it, i) => (
        <li
          key={it.titulo}
          data-reveal
          className={`grid gap-2.5 border-b border-tinta/15 md:grid-cols-[90px_1fr_1.4fr] md:gap-6 in-[.oscuro]:border-white/18 ${compacta ? "py-[clamp(18px,2.2vw,28px)]" : "py-[clamp(28px,3.4vw,44px)]"}`}
        >
          <span className="font-mono text-etiqueta leading-[2.2] tracking-widest text-verde in-[.oscuro]:text-dorado">{String(i + 1).padStart(2, "0")}</span>
          <h3 className={compacta ? "text-[clamp(1.15rem,1.4vw,1.4rem)] leading-tight" : "text-sub"}>{it.titulo}</h3>
          <p className="max-w-[62ch] text-tinta-suave in-[.oscuro]:text-white/78">{it.texto}</p>
        </li>
      ))}
    </ol>
  );
}
