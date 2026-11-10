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
          <section key={b.titulo} className={`sec-pad ${oscuro ? "oscuro" : ""}`} aria-labelledby={`bloque-${i}`}>
            {oscuro && <Ruido id={`ruido-bloque-${i}`} />}
            <div className="ancho grid items-center gap-[clamp(32px,6vw,96px)] md:grid-cols-2">
              <div className={oscuro ? "md:order-2" : ""}>
                <Encabezado etiqueta={`${String(i + 1).padStart(2, "0")} · ${b.etiqueta}`} titulo={b.titulo} bajada={b.texto} id={`bloque-${i}`} />
              </div>
              <img
                src={archivo(`img/${b.foto}`)} width={670} height={432} alt={b.alt} loading="lazy" decoding="async" data-reveal
                className="aspect-4/3 w-full rounded-md bg-tinta/10 object-cover"
              />
            </div>
          </section>
        );
      })}

      <section className="sec-pad" aria-labelledby="servicios-titulo">
        <div className="ancho">
          <Encabezado etiqueta="Agregado de valor, producción y servicios" titulo="Lo que ofrece Pereda Agro." id="servicios-titulo" className="mb-[clamp(48px,6vw,88px)]" />
          <Numerada items={t.servicios} />
        </div>
      </section>

      <Llamado />
    </>
  );
}
