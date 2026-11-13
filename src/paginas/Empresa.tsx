import { empresa as t } from "../contenido";
import { Cabecera, Llamado } from "../components/Bloques";
import { archivo, Encabezado, Numerada, Ruido } from "../components/Detalles";

export function Empresa() {
  return (
    <>
      <Cabecera etiqueta="Empresa" titulo="Desde 1883." bajada={t.bajada} foto="hacienda.webp" />

      {t.bloques.map((b, i) => {
        const oscuro = i % 2 === 1;
        return (
          <section key={b.titulo} className={`sec-pad relative isolate overflow-hidden ${oscuro ? "oscuro" : ""}`} aria-labelledby={`bloque-${i}`}>
            {oscuro && <Ruido id={`ruido-bloque-${i}`} />}
            {/* Hilera de trigo en trazo fino (public/img/espigas.svg, sale de "Claude outputs/pereda-agro/espigas/espigas.py"),
                abajo y del lado del texto: alta en el borde de la página y cada vez más baja hacia el centro.
                El SVG es una máscara: el color sale de la clase (dorado en los verdes, verde en los crema).
                El alto entra en el aire que queda debajo del párrafo, así nunca queda detrás del texto. */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[clamp(56px,9vw,160px)] xl:h-[min(12vw,180px)] [mask-position:right_bottom] [mask-repeat:no-repeat] [mask-size:auto_100%] ${
                oscuro ? "bg-dorado/30 md:left-1/2" : "-scale-x-100 bg-verde/45 md:right-1/2"
              }`}
              style={{ maskImage: `url(${archivo("img/espigas.svg")})`, WebkitMaskImage: `url(${archivo("img/espigas.svg")})` }}
            />
            <div className="ancho grid items-center gap-[clamp(32px,6vw,96px)] md:grid-cols-2">
              <div className={oscuro ? "md:order-2" : ""}>
                <Encabezado etiqueta={`${String(i + 1).padStart(2, "0")} · ${b.etiqueta}`} titulo={b.titulo} bajada={b.texto} id={`bloque-${i}`} />
              </div>
              <img
                src={archivo(`img/${b.foto}`)} width={556} height={432} alt={b.alt} loading="lazy" decoding="async" data-reveal
                className="aspect-4/3 w-full rounded-md bg-tinta/10 object-cover"
              />
            </div>
          </section>
        );
      })}

      <section className="py-[clamp(64px,7vw,112px)]" aria-labelledby="servicios-titulo">
        <div className="ancho">
          <Encabezado etiqueta="Agregado de valor, producción y servicios" titulo="Lo que ofrece Pereda Agro." id="servicios-titulo" tituloClase="text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.05] tracking-[-.05em]" className="mb-[clamp(32px,4vw,56px)]" />
          <Numerada items={t.servicios} compacta />
        </div>
      </section>

      <Llamado />
    </>
  );
}
