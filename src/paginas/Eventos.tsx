/** Página "Ferias y sector": las ferias internacionales y, abajo, las instituciones del agro. */
import { ferias, instituciones } from "../contenido";
import { Cabecera, ListaEnlaces, Llamado } from "../components/Bloques";
import { archivo, Encabezado, Flecha } from "../components/Detalles";

// Las ferias ya van arriba: en la grilla quedan solo las instituciones
const sector = instituciones.filter((i) => !ferias.includes(i));

export function Eventos() {
  return (
    <>
      <Cabecera
        etiqueta="Ferias y sector" titulo="Nos vemos en la próxima feria." foto="feria.webp"
        bajada="Desde 2012 estamos presentes en Anuga, Gulfood y SIAL. Queremos conocerte: acercate a nuestro stand en la próxima edición."
      />

      <section className="sec-pad" aria-labelledby="ferias-titulo">
        <div className="ancho">
          <Encabezado etiqueta="Ferias internacionales" titulo="Dónde estamos." id="ferias-titulo" className="mb-[clamp(48px,6vw,88px)]" />
          <ListaEnlaces items={ferias} />
        </div>
      </section>

      <section className="border-y border-tinta/15 bg-papel py-[clamp(64px,7vw,112px)]" aria-labelledby="sector-titulo">
        <div className="ancho">
          <Encabezado
            etiqueta="Links de interés" titulo="Instituciones del sector." id="sector-titulo"
            tituloClase="text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.05] tracking-[-.05em]"
            bajada="Asociaciones y organismos del agro que seguimos de cerca, en Argentina y en el mundo."
            className="mb-[clamp(32px,4vw,56px)]"
          />
          <ul className="grid gap-[clamp(12px,1.5vw,20px)] sm:grid-cols-2 lg:grid-cols-4">
            {sector.map((it) => (
              <li key={it.nombre} data-reveal>
                <a
                  href={it.url} target="_blank" rel="noopener"
                  className="group grid h-full content-start gap-3 rounded-lg border border-tinta/15 bg-crema p-5 transition-colors hover:border-verde"
                >
                  {it.logo && <img src={archivo(`img/instituciones/${it.logo}`)} width={it.logoTam?.[0]} height={it.logoTam?.[1]} alt="" loading="lazy" className="h-12 w-auto justify-self-start object-contain grayscale group-hover:grayscale-0" />}
                  <div>
                    <h3 className="text-lg leading-tight font-medium">{it.nombre}</h3>
                    <p className="mt-1 font-mono text-etiqueta tracking-widest text-tinta-suave uppercase">{it.lugar}</p>
                  </div>
                  <p className="text-[.95rem] text-tinta-suave">{it.texto}</p>
                  <span className="mt-auto inline-flex items-center gap-2 font-mono text-sm text-verde underline underline-offset-4">
                    {it.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")} <Flecha diagonal />
                    <span className="sr-only">(se abre en otra pestaña)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Llamado titulo="¿Coordinamos una reunión en la feria?" texto="Escribinos y agendamos un encuentro en el stand." />
    </>
  );
}
