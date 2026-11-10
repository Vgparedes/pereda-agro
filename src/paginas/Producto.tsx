import type { CalibreEscala, Producto as P } from "../contenido";
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
                    {s.escala && <Escala calibres={s.escala} nota={s.nota} />}
                    {s.nota && !s.escala && <p className="text-tinta-suave">{s.nota}</p>}
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

/** Grano de girasol confitero dibujado (forma de almendra con rayas). El calibre es su ANCHO:
 *  los tres granos guardan la proporción real de ancho entre sí (ampliados: 6,5 px por mm en
 *  compu, 5,5 en celu). El largo es ilustrativo (2,4 veces el ancho). La silueta punteada marca
 *  "o más" o el final del rango. Cada grano lleva su texto: nada se distingue solo por color. */
const LARGO = 2.4;
const SILUETA = "M50 2C80 2 98 38 97 92 96 150 74 205 50 238 26 205 4 150 3 92 2 38 20 2 50 2Z";

function Grano({ mm, contorno = false }: { mm: number; contorno?: boolean }) {
  const estilo = { width: `calc(${mm} * var(--k))`, height: `calc(${mm * LARGO} * var(--k))` };
  if (contorno) {
    return (
      <svg viewBox="0 0 100 240" aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-visible" style={estilo}>
        <path d={SILUETA} fill="none" stroke="var(--color-verde)" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 240" aria-hidden="true" className="relative" style={estilo}>
      <defs>
        <clipPath id="grano-forma"><path d={SILUETA} /></clipPath>
      </defs>
      <defs>
        <linearGradient id="grano-cuerpo" x1="0" x2="1">
          <stop offset="0" stopColor="#1c1b19" />
          <stop offset=".45" stopColor="#3b3935" />
          <stop offset="1" stopColor="#1c1b19" />
        </linearGradient>
      </defs>
      <g clipPath="url(#grano-forma)">
        <rect width="100" height="240" fill="url(#grano-cuerpo)" />
        {/* rayas claras del confitero: finas, siguiendo la curva, más marcadas en los bordes */}
        <g fill="none" stroke="#ece6d6" strokeLinecap="round">
          <path d="M14 30C20 100 26 170 42 236" strokeWidth="3.2" />
          <path d="M86 30C80 100 74 170 58 236" strokeWidth="3.2" />
          <path d="M50 6C49 90 50 170 50 238" strokeWidth="2.4" strokeOpacity=".85" />
          <path d="M31 10C35 90 39 170 46 236M69 10C65 90 61 170 54 236" strokeWidth="1.3" strokeOpacity=".5" />
        </g>
        {/* brillo suave para dar volumen */}
        <ellipse cx="38" cy="90" rx="10" ry="52" fill="#fff" opacity=".08" />
      </g>
      <path d={SILUETA} fill="none" stroke="#1a1917" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Los granos y, al costado (abajo en celu), una sola explicación del calibre. */
function Escala({ calibres, nota }: { calibres: CalibreEscala[]; nota?: string }) {
  return (
    <figure className="mt-1 flex flex-col gap-5 xl:flex-row xl:items-start xl:gap-7">
      <div className="flex shrink-0 items-start gap-x-4 [--k:5.5px] sm:gap-x-6 sm:[--k:6.5px]">
        {calibres.map((c) => {
          const borde = c.oMas ? c.mm + 0.8 : c.hasta;
          // Todos los granos se apoyan en la misma línea: así los textos de abajo quedan alineados
          const altoMax = Math.max(...calibres.map((x) => (x.oMas ? x.mm + 0.8 : x.hasta ?? x.mm))) * LARGO;
          return (
            <div key={c.calibre} className="grid w-20 justify-items-center gap-2 text-center sm:w-24">
              <div className="relative grid items-end justify-items-center" style={{ width: `calc(${borde ?? c.mm} * var(--k))`, height: `calc(${altoMax} * var(--k))` }}>
                {borde && <Grano mm={borde} contorno />}
                <Grano mm={c.mm} />
              </div>
              <span className="font-mono text-sm tracking-wide">{c.calibre}</span>
              <span className="text-sm text-tinta-suave">{c.texto}</span>
            </div>
          );
        })}
      </div>
      <figcaption className="grid max-w-80 min-w-0 gap-2 xl:max-w-48">
        {nota && <p className="text-[.95rem] text-tinta-suave">{nota}</p>}
        <p className="font-mono text-etiqueta leading-relaxed tracking-widest text-tinta-suave uppercase">
          Dibujo en proporción real (ampliado). Punteado: hasta dónde llega el calibre.
        </p>
      </figcaption>
    </figure>
  );
}
