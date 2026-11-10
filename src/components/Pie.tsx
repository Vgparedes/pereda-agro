import { contacto, menu, paginas, sitio, SITIO_KRSP, type Ruta } from "../contenido";
import { archivo, enlace, Ruido } from "./Detalles";

const titulo = "mb-3.5 font-mono text-etiqueta tracking-[.12em] text-dorado uppercase";

/** Pie: logo, oficinas, secciones, firma de KRSp y marca de agua gigante. */
export function Pie() {
  const firma = (
    <>
      Página creada por
      <img src={archivo("img/logos/logo-krsp.png")} alt="KRSp" className="h-8.5 w-auto" />
    </>
  );
  const secciones: Ruta[] = ["", ...menu, "contacto"];

  return (
    <footer className="oscuro overflow-hidden pt-[clamp(64px,8vw,112px)]">
      <Ruido id="ruido-pie" />
      <div className="ancho">
        <div className="grid gap-10 border-b border-white/18 pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <img src={archivo("img/logos/logo-pereda.png")} width={184} height={128} alt="Pereda, desde 1883" className="mb-4.5 w-28" />
            <p className="text-[.95rem] text-white/78">{sitio.lema}</p>
            <a href={`mailto:${contacto.mail}`} className="subrayado mt-3.5 inline-flex min-h-11 items-center">{contacto.mail}</a>
          </div>
          {contacto.oficinas.map((o) => (
            <div key={o.ciudad}>
              <h3 className={titulo}>{o.ciudad}</h3>
              <address className="text-[.95rem] not-italic text-white/78">
                {sitio.razonSocial}<br />{o.lineas.map((l) => <span key={l}>{l}<br /></span>)}Argentina
              </address>
              <a href={o.mapa} target="_blank" rel="noopener" className="subrayado mt-1 inline-flex min-h-11 items-center text-[.95rem]">Ver en el mapa</a>
            </div>
          ))}
          <nav aria-label="Secciones">
            <h3 className={titulo}>Secciones</h3>
            <ul>
              {secciones.map((r) => (
                <li key={r}><a href={enlace(r)} className="inline-flex min-h-9 items-center text-[.95rem] text-white/78 hover:text-white hover:underline">{paginas[r].menu}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4.5 py-6 text-sm text-white/78">
          <span suppressHydrationWarning>© 2012–{new Date().getFullYear()} {sitio.razonSocial}</span>
          {SITIO_KRSP
            ? <a href={SITIO_KRSP} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-3">{firma}</a>
            : <span className="inline-flex min-h-11 items-center gap-3">{firma}</span>}
        </div>
      </div>
      <div aria-hidden="true" className="mb-[-.06em] select-none whitespace-nowrap text-[clamp(80px,22vw,340px)] leading-[.78] font-medium tracking-[-.07em] text-white/5">
        PEREDA
      </div>
    </footer>
  );
}
