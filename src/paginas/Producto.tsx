import type { Producto as P } from "../contenido";
import { Cabecera, Llamado } from "../components/Bloques";
import { archivo, enlace } from "../components/Detalles";

/** Ficha de producto (sirve para girasol y pisingallo). Los datos salen de contenido.ts. */
export function Producto({ p }: { p: P }) {
  return (
    <>
      <Cabecera
        etiqueta="Productos" titulo={`${p.nombre}.`} bajada={p.bajada} foto={p.fotoCabecera}
        migas={<><a className="subrayado" href={enlace("", "#productos")}>Productos</a> / {p.nombre}</>}
      />

      <section className="py-[clamp(64px,7vw,112px)]" aria-labelledby="ficha-titulo">
        <div className="ancho grid items-center gap-[clamp(32px,5vw,72px)] md:grid-cols-[1fr_1.3fr]">
          <figure data-reveal className="rounded-lg border border-tinta/15 bg-papel p-[clamp(24px,3vw,40px)]">
            <img
              src={archivo(`img/${p.bolsa.src}`)} width={p.bolsa.w} height={p.bolsa.h} alt={p.bolsa.alt} loading="lazy" decoding="async"
              className="mx-auto max-h-80 w-auto rounded-sm md:max-h-120"
            />
            <figcaption className="mt-3 text-center font-mono text-etiqueta tracking-widest text-tinta-suave uppercase">Bolsa Pereda · {p.nombre}</figcaption>
          </figure>

          <div>
            <div className="mb-10 grid gap-5" data-reveal>
              <p className="etiqueta">Ficha técnica</p>
              <h2 id="ficha-titulo" className="text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-.05em]">Características.</h2>
              <div className="grid max-w-[62ch] gap-3 text-tinta-suave">
                {p.intro.map((x) => <p key={x}>{x}</p>)}
              </div>
            </div>

            <dl className="border-t border-tinta" data-reveal>
              {p.specs.map((s) => (
                <div key={s.nombre} className="grid gap-2 border-b border-tinta/15 py-5 md:grid-cols-[160px_1fr] md:gap-6">
                  <dt className="font-mono text-etiqueta leading-[1.9] tracking-widest text-verde uppercase">{s.nombre}</dt>
                  <dd className="grid gap-2">
                    {s.valor && <p className="text-[clamp(1.3rem,1.9vw,1.75rem)] leading-tight tracking-[-.025em]">{s.valor}</p>}
                    {s.chips && (
                      <ul className="flex flex-wrap gap-2">
                        {s.chips.map((c) => <li key={c} className="rounded-full border border-tinta/15 bg-papel px-3 py-2 font-mono text-sm leading-none">{c}</li>)}
                      </ul>
                    )}
                    {s.nota && <p className="text-tinta-suave">{s.nota}</p>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Llamado titulo={`¿Necesitás ${p.nombre.toLowerCase()}?`} texto="Contanos el calibre, el packaging y el volumen, y armamos la propuesta." />
    </>
  );
}
