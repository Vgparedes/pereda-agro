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
            {/* Número gigante de fondo, del lado del texto, relleno con rayitas como el grabado de los girasoles */}
            <div
              aria-hidden="true"
              className={`numero-rayado pointer-events-none absolute -bottom-[.1em] -z-10 text-[clamp(240px,32vw,500px)] leading-[.8] font-medium tracking-[-.07em] select-none ${
                oscuro ? "right-[2%] [--raya:rgb(254_204_0/.5)]" : "left-[2%] [--raya:rgb(0_82_33/.42)]"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
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
