import { useEffect, useState } from "react";
import { menu, paginas, type Ruta } from "../contenido";
import { useOcultarAlBajar } from "../hooks/useOcultarAlBajar";
import { archivo, enlace } from "./Detalles";

/** Header flotante semitransparente: se esconde al bajar y vuelve al subir.
 *  En celu y tablet abre un menú a pantalla completa. */
export function Header({ ruta }: { ruta: Ruta }) {
  const [abierto, setAbierto] = useState(false);
  const [oculto, setOculto] = useOcultarAlBajar(abierto);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    addEventListener("keydown", esc);
    return () => removeEventListener("keydown", esc);
  }, [abierto]);

  return (
    <header
      onFocusCapture={() => setOculto(false)}
      className={`sticky top-0 z-50 -mb-(--nav) flex h-(--nav) items-center justify-between gap-6 bg-verde-noche/80 px-(--gutter) text-white backdrop-blur-md transition-transform duration-300 ease-krsp ${oculto && !abierto ? "-translate-y-[105%]" : ""}`}
    >
      <a href={enlace("")} aria-label="Pereda Agro, ir al inicio" className="flex min-h-11 items-center gap-3">
        <img src={archivo("img/logos/logo-pereda.png")} width={184} height={128} alt="" className="w-16 min-[1101px]:w-20" />
        <span className="font-mono text-sm tracking-[.12em] text-white/85 uppercase max-[480px]:hidden min-[1101px]:text-[.95rem]">Pereda Agro S.A.</span>
      </a>

      <button
        type="button"
        aria-expanded={abierto}
        aria-controls="nav-principal"
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setAbierto((v) => !v)}
        className="relative size-11 min-[1101px]:hidden"
      >
        <span className={`absolute inset-x-[11px] top-[17px] h-0.5 bg-current transition-transform ${abierto ? "translate-y-1 rotate-45" : ""}`} />
        <span className={`absolute inset-x-[11px] top-[25px] h-0.5 bg-current transition-transform ${abierto ? "-translate-y-1 -rotate-45" : ""}`} />
      </button>

      <nav
        id="nav-principal"
        aria-label="Principal"
        className={`flex items-center gap-[clamp(14px,1.8vw,30px)] text-[.95rem]
          max-[1100px]:fixed max-[1100px]:inset-x-0 max-[1100px]:top-(--nav) max-[1100px]:bottom-0 max-[1100px]:flex-col max-[1100px]:items-stretch max-[1100px]:gap-0 max-[1100px]:overflow-y-auto max-[1100px]:bg-verde-noche max-[1100px]:px-(--gutter) max-[1100px]:pt-3 max-[1100px]:pb-8 max-[1100px]:text-[clamp(1.6rem,6.5vw,2.4rem)] max-[1100px]:tracking-tight max-[1100px]:transition-opacity
          ${abierto ? "" : "max-[1100px]:invisible max-[1100px]:opacity-0"}`}
      >
        {menu.map((r) => (
          <a
            key={r}
            href={enlace(r)}
            aria-current={r === ruta ? "page" : undefined}
            onClick={() => setAbierto(false)}
            className="py-3 opacity-80 hover:opacity-100 aria-[current=page]:opacity-100 aria-[current=page]:shadow-[inset_0_-2px_0_var(--color-dorado)]
              max-[1100px]:border-b max-[1100px]:border-white/18 max-[1100px]:py-3.5 max-[1100px]:opacity-100 max-[1100px]:aria-[current=page]:text-dorado max-[1100px]:aria-[current=page]:shadow-none max-[1100px]:aria-[current=page]:after:content-['_●'] max-[1100px]:aria-[current=page]:after:text-[.5em] max-[1100px]:aria-[current=page]:after:align-middle"
          >
            {paginas[r].menu}
          </a>
        ))}
        <a
          href={enlace("contacto")}
          aria-current={ruta === "contacto" ? "page" : undefined}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-dorado px-5 font-medium text-verde-noche transition-transform hover:-translate-y-0.5 max-[1100px]:mt-7 max-[1100px]:min-h-12 max-[1100px]:text-lg max-[1100px]:tracking-normal"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
