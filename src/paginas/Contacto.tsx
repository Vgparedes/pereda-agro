import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { contacto } from "../contenido";
import { Encabezado, Flecha, Ruido } from "../components/Detalles";

const campo = "min-h-12.5 w-full rounded-lg border border-white/30 bg-white/6 px-3.5 py-3 text-base text-white focus:border-dorado focus:outline-none";

export function Contacto() {
  const [abierto, setAbierto] = useState(false);
  const [tema, setTema] = useState(contacto.temas[0]);
  const [error, setError] = useState("");
  const dialogo = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierto && !d.open) d.showModal();
    if (!abierto && d.open) d.close();
  }, [abierto]);

  // Arma el mail con el tema elegido y lo abre en el programa de correo. Sin servidor.
  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    if (!v("nombre") || !v("mensaje")) return setError("Completá tu nombre y el mensaje para armar el mail.");
    setError("");
    const cuerpo = `${v("mensaje")}\n\n${v("nombre")}${v("pais") ? ` (${v("pais")})` : ""}`;
    location.href = `mailto:${contacto.mail}?subject=${encodeURIComponent(`${tema} · ${v("nombre")}`)}&body=${encodeURIComponent(cuerpo)}`;
    e.currentTarget.reset();
    setAbierto(false);
  };

  const orbita = "absolute top-1/2 left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15";

  return (
    <>
      {/* "Hablemos" gigante con órbitas girando de fondo */}
      <section className="oscuro grid min-h-[min(900px,100svh)] items-center overflow-hidden pt-(--nav)" aria-labelledby="contacto-titulo">
        <Ruido id="ruido-contacto" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <span className={`${orbita} w-[max(124vw,900px)] animate-[orbita-gira_120s_linear_infinite]`}>
            <span className="absolute top-[20%] left-[80%] size-2.5 rounded-full bg-dorado" />
          </span>
          <span className={`${orbita} w-[max(78vw,560px)] animate-[orbita-gira_90s_linear_infinite_reverse]`}>
            <span className="absolute top-[12%] left-[18%] size-2 rounded-full bg-white" />
          </span>
        </div>

        <div className="ancho grid justify-items-center py-20 text-center" data-reveal>
          <p className="etiqueta">Contacto</p>
          <h1 id="contacto-titulo" className="mt-5.5 text-[clamp(64px,10vw,142px)] leading-[.92] font-normal tracking-[-.07em]">Hablemos.</h1>
          <p className="mt-6.5 max-w-136 text-grande text-white/78">Para conocer más sobre nuestros productos y servicios, escribinos.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3.5">
            <button className="boton" type="button" onClick={() => { setError(""); setAbierto(true); }}>Armar consulta <Flecha /></button>
            <a href={`mailto:${contacto.mail}`} className="subrayado inline-flex min-h-11 items-center font-mono text-sm">{contacto.mail}</a>
          </div>
        </div>

        <dialog
          ref={dialogo}
          aria-labelledby="dialogo-titulo"
          onClose={() => setAbierto(false)}
          onClick={(e) => { if (e.target === dialogo.current) setAbierto(false); }}
          className="inset-0 m-auto max-h-[min(92vh,940px)] w-[min(840px,calc(100vw-32px))] max-w-none overflow-auto rounded-2xl border border-white/15 bg-verde-noche p-0 text-white shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm open:animate-[dialogo-entra_.22s_ease-out_both]"
        >
          <form className="oscuro grid gap-5 p-[clamp(24px,5vw,48px)]" onSubmit={enviar} noValidate>
            <div className="mb-2.5 flex items-start justify-between gap-6">
              <div>
                <p className="etiqueta">Nueva consulta</p>
                <h2 id="dialogo-titulo" className="mt-3 text-[clamp(32px,5vw,54px)] leading-none tracking-[-.06em]">Contanos qué necesitás.</h2>
              </div>
              <button type="button" aria-label="Cerrar" onClick={() => setAbierto(false)} className="size-11 shrink-0 rounded-full border border-white/30 text-2xl leading-none hover:border-white">×</button>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm text-white/78">Tema</legend>
              <div className="flex flex-wrap gap-2">
                {contacto.temas.map((x) => (
                  <button
                    key={x} type="button" aria-pressed={tema === x} onClick={() => setTema(x)}
                    className="min-h-11 rounded-full border border-white/35 px-4.5 text-sm hover:border-white aria-pressed:border-white aria-pressed:bg-white aria-pressed:text-verde-noche aria-pressed:before:content-['✓_']"
                  >
                    {x}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/78">Nombre y empresa<input name="nombre" autoComplete="organization" required className={campo} /></label>
              <label className="grid gap-2 text-sm text-white/78">País <span className="sr-only">(opcional)</span><input name="pais" autoComplete="country-name" className={campo} /></label>
            </div>
            <label className="grid gap-2 text-sm text-white/78">
              Mensaje
              <textarea name="mensaje" rows={4} required placeholder="Calibre, packaging, volumen, destino…" className={`${campo} resize-y placeholder:text-white/50`} />
            </label>
            {error && <p role="alert" className="rounded-lg border border-red-300 px-3.5 py-3 text-sm text-red-100 before:content-['⚠_']">{error}</p>}

            <div className="mt-1.5 flex flex-wrap items-center justify-between gap-4.5">
              <p className="max-w-88 text-sm text-white/78">Se abre tu programa de mail con la consulta ya escrita.</p>
              <div className="flex flex-wrap gap-2.5 max-sm:w-full max-sm:[&>*]:flex-1">
                <button className="boton boton-borde" type="button" onClick={() => setAbierto(false)}>Cancelar</button>
                <button className="boton" type="submit">Abrir el mail <Flecha /></button>
              </div>
            </div>
          </form>
        </dialog>
      </section>

      <section className="sec-pad" aria-labelledby="donde-titulo">
        <div className="ancho">
          <Encabezado etiqueta="Dónde estamos" titulo="Oficinas y plantas." id="donde-titulo" className="mb-[clamp(48px,6vw,88px)]" />
          <div className="grid gap-[clamp(16px,2vw,28px)] sm:grid-cols-2 lg:grid-cols-3">
            {contacto.oficinas.map((o) => (
              <Tarjeta key={o.ciudad} etiqueta="Oficina" titulo={o.ciudad} link={o.mapa} textoLink="Ver en el mapa">
                <address className="not-italic text-tinta-suave">{o.lineas.map((l) => <span key={l} className="block">{l}</span>)}</address>
              </Tarjeta>
            ))}
            {contacto.plantas.map((p) => (
              <Tarjeta key={p.nombre} etiqueta={`Planta · ${p.producto}`} titulo={p.nombre} link={p.mapa} textoLink="Ver en el mapa">
                <p className="font-mono text-sm">{p.coords}</p>
                <p className="text-tinta-suave">{p.nota}</p>
              </Tarjeta>
            ))}
            <Tarjeta etiqueta="Clima" titulo="Estación meteorológica" link={contacto.clima} textoLink="Ver el clima">
              <p className="text-tinta-suave">El tiempo en “Mari Lauquen”, con datos de nuestra propia estación.</p>
            </Tarjeta>
          </div>
        </div>
      </section>
    </>
  );
}

function Tarjeta({ etiqueta, titulo, link, textoLink, children }: { etiqueta: string; titulo: string; link: string; textoLink: string; children: ReactNode }) {
  return (
    <article data-reveal className="grid content-start gap-3.5 rounded-lg border border-tinta/15 bg-papel p-[clamp(24px,3vw,36px)]">
      <p className="etiqueta">{etiqueta}</p>
      <h3 className="text-sub">{titulo}</h3>
      {children}
      <a href={link} target="_blank" rel="noopener" className="boton boton-borde mt-1.5 justify-self-start">{textoLink} <Flecha diagonal /></a>
    </article>
  );
}
