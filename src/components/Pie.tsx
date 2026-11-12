import { contacto, menu, paginas, sitio, SITIO_KRSP, type Ruta } from "../contenido";
import { archivo, enlace, Flecha, Ruido } from "./Detalles";

const titulo = "mb-3 font-mono text-etiqueta tracking-[.12em] text-dorado uppercase";
const texto = "text-[.95rem] leading-relaxed text-white/78";
const link = "subrayado inline-flex min-h-11 items-center gap-1.5 text-[.95rem] hover:text-dorado";

/** Pie en grilla ordenada: Pereda · las dos oficinas · Secciones, y abajo copyright y créditos.
 *  "raices": las raíces de los girasoles de la sección de contacto siguen en el pie (no en la página Contacto,
 *  que no tiene girasoles). Son decorativas y nunca quedan detrás del texto. */
export function Pie({ raices = false }: { raices?: boolean }) {
  const firma = (
    <>
      Página creada por
      <img src={archivo("img/logos/logo-krsp-blanco.png")} alt="KRSp" width={339} height={72} className="h-4.5 w-auto opacity-90" />
    </>
  );
  const secciones: Ruta[] = ["", ...menu, "contacto"];

  // Las raíces se superponen apenas con el texto: lo que se ve lo maneja su desvanecido (raices-pie.svg).
  return (
    <footer className="oscuro overflow-hidden pt-14">
      <Ruido id="ruido-pie" />
      {/* Raíces de los girasoles: arrancan en el borde, bajo cada tallo. Mismo ancho que los girasoles
          (391 px en celu, 680 en compu) para que empalmen. Definidas a la derecha y desvanecidas hacia el texto. */}
      {raices && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-no-repeat [background-position:right_top] [background-size:391px_auto] md:[background-size:680px_auto]"
          style={{ backgroundImage: `url(${archivo("img/raices-pie.svg")})` }}
        />
      )}
      <div className="ancho">
        <div
          className="grid gap-x-12 gap-y-10 border-b border-white/18 pb-10 sm:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] lg:justify-between"
        >
          {/* Pereda */}
          <div>
            <img src={archivo("img/logos/logo-pereda.png")} width={184} height={128} alt="Pereda, desde 1883" className="mb-4 w-16" />
            <p className={texto}>{sitio.lema}</p>
            {/* El mail no va escrito a la vista (bots de spam): solo en el link */}
            <a href={`mailto:${contacto.mail}`} className={`${link} mt-2`}>Escribinos por mail <Flecha /></a>
          </div>

          {/* Ubicación */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-8">
              {contacto.oficinas.map((o) => (
                <div key={o.ciudad}>
                  <h3 className={titulo}>{o.ciudad}</h3>
                  <address className={`${texto} not-italic`}>
                    {o.lineas.map((l) => <span key={l} className="block">{l}</span>)}
                  </address>
                  <a href={o.mapa} target="_blank" rel="noopener" className={link}>Cómo llegar <Flecha diagonal /></a>
                </div>
              ))}
            </div>
          </div>

          {/* Secciones */}
          <nav aria-label="Secciones" className="sm:col-span-2 lg:col-span-1 lg:justify-self-end">
            <h3 className={titulo}>Secciones</h3>
            <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-4 lg:grid-cols-2">
              {secciones.map((r) => (
                <li key={r}>
                  <a href={enlace(r)} className="inline-flex min-h-10 items-center text-[.95rem] text-white/78 hover:text-white hover:underline">{paginas[r].menu}</a>
                </li>
              ))}
            </ul>
          </nav>
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
