/** Páginas cortas: Eventos, Links y Galería. */
import { ferias, galeria, links } from "../contenido";
import { Cabecera, ListaEnlaces, Llamado } from "../components/Bloques";
import { Encabezado, Flecha } from "../components/Detalles";

export function Eventos() {
  return (
    <>
      <Cabecera
        etiqueta="Eventos" titulo="Nos vemos en la próxima feria." foto="feria.webp"
        bajada="Desde 2012 estamos presentes en Anuga, Gulfood y SIAL. Queremos conocerte: acercate a nuestro stand en la próxima edición."
      />
      <section className="sec-pad" aria-labelledby="ferias-titulo">
        <div className="ancho">
          <Encabezado etiqueta="Ferias internacionales" titulo="Dónde estamos." id="ferias-titulo" className="mb-[clamp(48px,6vw,88px)]" />
          <ListaEnlaces items={ferias} />
        </div>
      </section>
      <Llamado titulo="¿Coordinamos una reunión en la feria?" texto="Escribinos y agendamos un encuentro en el stand." />
    </>
  );
}

export function Links() {
  return (
    <>
      <Cabecera etiqueta="Links de interés" titulo="Ferias, asociaciones y organismos." bajada="Las instituciones del agro que seguimos de cerca, en Argentina y en el mundo." />
      <section className="sec-pad" aria-labelledby="links-titulo">
        <div className="ancho">
          <h2 id="links-titulo" className="etiqueta mb-8">{links.length} sitios</h2>
          <ListaEnlaces items={links} />
        </div>
      </section>
    </>
  );
}

export function Galeria() {
  return (
    <>
      <Cabecera etiqueta="Galería" titulo="Fotos." bajada="Campos, plantas, productos y ferias." />
      <section className="sec-pad" aria-labelledby="album-titulo">
        <div className="ancho">
          <div className="mb-10 grid gap-4" data-reveal>
            <p className="etiqueta">Álbum</p>
            <h2 id="album-titulo" className="text-sub">Usá las flechas para pasar las fotos.</h2>
          </div>
          <iframe
            src={`${galeria.album}player/`} title="Álbum de fotos de Pereda Agro en Flickr" loading="lazy" allowFullScreen
            className="aspect-670/432 w-full rounded-lg bg-verde-noche"
          />
          <a className="boton boton-borde mt-6" href={galeria.album} target="_blank" rel="noopener">Ver el álbum en Flickr <Flecha diagonal /></a>
        </div>
      </section>
    </>
  );
}
