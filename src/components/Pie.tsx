import { contacto, menu, paginas, sitio, SITIO_KRSP, type Ruta } from "../contenido";
import { archivo, enlace, Ruido } from "./Detalles";

const titulo = "mb-3 font-mono text-etiqueta tracking-[.12em] text-dorado uppercase";
const texto = "text-[.95rem] leading-relaxed text-white/78";

/** Pie: marca, oficinas, secciones (en dos columnas) y la firma de KRSp chiquita. */
/** "raices": se muestran solo si arriba está la sección de contacto con los girasoles (no en la página Contacto). */
export function Pie({ raices = false }: { raices?: boolean }) {
  const firma = (
    <>
      Página creada por
      <img src={archivo("img/logos/logo-krsp-blanco.png")} alt="KRSp" width={339} height={72} className="h-4.5 w-auto opacity-90" />
    </>
  );

  const secciones: Ruta[] = ["", ...menu, "contacto"];
  // Con raíces (arriba a la derecha, 680 px de ancho en compu): desde 1400 px las columnas se juntan a la
  // izquierda y les dejan ese lado libre; en pantallas más chicas no hay lugar, así que el contenido baja.
  return (
    <footer className={`oscuro overflow-hidden ${raices ? "pt-[150px] md:max-[1399px]:pt-[250px] min-[1400px]:pt-12" : "pt-12"}`}>
      <Ruido id="ruido-pie" />
      {/* Raíces de los girasoles de la sección de contacto, en crema, arrancando arriba a la derecha.
          Mismo ancho que los girasoles (391 px en celu, 680 en compu): así empalman con los tallos. */}
      {raices && <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat [background-position:right_top] [background-size:391px_auto] md:[background-size:680px_auto]"
        style={{ backgroundImage: `url(${archivo("img/raices-pie.svg")})` }}
      />}
      <div className="ancho">
        <div className="border-b border-white/18 pb-8">
        <div className={`grid gap-x-10 gap-y-7 sm:grid-cols-3 ${raices ? "min-[1400px]:max-w-[calc(100vw_-_720px_-_(100vw_-_min(100vw_-_2*var(--gutter),1440px))/2)]" : "lg:max-w-3xl"}`}>
          <div>
            <img src={archivo("img/logos/logo-pereda.png")} width={184} height={128} alt="Pereda, desde 1883" className="mb-3 w-16" />
            <p className={texto}>{sitio.lema}</p>
            <a href={`mailto:${contacto.mail}`} className="subrayado mt-1 inline-flex min-h-11 items-center text-[.95rem]">{contacto.mail}</a>
          </div>
          <div className="grid content-start gap-4">
          {contacto.oficinas.map((o) => (
            <div key={o.ciudad}>
              <h3 className={titulo}>{o.ciudad}</h3>
              <address className={`${texto} not-italic`}>
                {o.lineas.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
              <a href={o.mapa} target="_blank" rel="noopener" className="subrayado mt-1 inline-flex min-h-11 items-center text-[.95rem]">Ver en el mapa</a>
            </div>
          ))}
          </div>
          <nav aria-label="Secciones">
            <h3 className={titulo}>Secciones</h3>
            <ul className="grid grid-cols-2 gap-x-6">
              {secciones.map((r) => (
                <li key={r}><a href={enlace(r)} className="inline-flex min-h-9 items-center text-[.95rem] text-white/78 hover:text-white hover:underline">{paginas[r].menu}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4 text-xs text-white/65">
          <span suppressHydrationWarning>© 2012–{new Date().getFullYear()} {sitio.razonSocial}</span>
          {SITIO_KRSP
            ? <a href={SITIO_KRSP} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-2 hover:text-white">{firma}</a>
            : <span className="inline-flex min-h-11 items-center gap-2">{firma}</span>}
        </div>
      </div>
    </footer>
  );
}
