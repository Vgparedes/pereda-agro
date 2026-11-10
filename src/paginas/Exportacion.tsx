import { exportacion as t } from "../contenido";
import { Cabecera, Llamado } from "../components/Bloques";
import { Encabezado, Numerada, Ruido } from "../components/Detalles";
import { Globo } from "../components/Globo";

export function Exportacion() {
  return (
    <>
      <Cabecera etiqueta="Exportación" titulo="De Argentina hacia el mundo." bajada={t.bajada}>
        {/* Globo 3D con arcos dorados desde Argentina a cada región de destino */}
        <div className="mx-auto w-full max-w-130">
          <Globo
            phiInicial={Math.PI - ((-45 * Math.PI) / 180 - Math.PI / 2)}
            theta={0.12}
            marcadores={[
              { location: t.origen, size: 0.09 },
              ...t.destinos.map((d) => ({ location: d.lugar, size: 0.05 })),
            ]}
            arcos={t.destinos.map((d) => ({ from: t.origen, to: d.lugar }))}
          />
        </div>
      </Cabecera>

      <section className="sec-pad" aria-labelledby="destinos-titulo">
        <div className="ancho grid gap-[clamp(32px,6vw,96px)] md:grid-cols-2">
          <Encabezado etiqueta="Cobertura" titulo="Productos y know-how para los principales mercados." bajada={t.texto} id="destinos-titulo" />
          <ul className="self-end border-t border-tinta/15" data-reveal aria-label="Regiones de destino">
            <li className="flex items-center justify-between gap-4 border-b border-tinta/15 py-5">
              <span className="text-sub">Argentina</span>
              <span className="rounded-full bg-verde px-3 py-1.5 font-mono text-etiqueta tracking-widest text-white uppercase">Origen</span>
            </li>
            {t.destinos.map((d) => (
              <li key={d.region} className="flex items-center justify-between gap-4 border-b border-tinta/15 py-5">
                <span className="text-sub">{d.region}</span>
                <span className="font-mono text-etiqueta tracking-widest text-tinta-suave uppercase">Destino ↗</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="oscuro sec-pad" aria-labelledby="integracion-titulo">
        <Ruido id="ruido-integracion" />
        <div className="ancho">
          <Encabezado etiqueta="Integración vertical" titulo="Un solo responsable, del lote al contenedor." id="integracion-titulo" className="mb-[clamp(48px,6vw,88px)]" />
          <Numerada items={t.pasos} />
        </div>
      </section>

      <Llamado />
    </>
  );
}
