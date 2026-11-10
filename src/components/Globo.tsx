import { useEffect, useRef } from "react";
import type createGlobe from "cobe";
import type { Arc, Marker } from "cobe";

/** Globo 3D (librería cobe) igual al de Ascentio.
 *  - Se descarga recién cuando se monta, así no pesa en la carga inicial.
 *  - Se frena cuando no está en pantalla y con "reducir movimiento".
 *  - Si el navegador no tiene WebGL queda un círculo con brillo. */
type Color = [number, number, number];

export function Globo({
  colorBase = [0.12, 0.42, 0.24],     // verde Pereda (los puntos del mapa)
  colorBrillo = [0.06, 0.32, 0.16],
  colorMarcador = [1, 0.8, 0],        // dorado del logo
  marcadores = [],
  arcos = [],
  phiInicial = 0.35,
  theta = 0.18,
}: {
  colorBase?: Color;
  colorBrillo?: Color;
  colorMarcador?: Color;
  marcadores?: Marker[];
  arcos?: Arc[];
  phiInicial?: number;
  theta?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const caja = canvas?.parentElement;
    if (!canvas || !caja) return;

    // Sin WebGL (algunos celus viejos o navegadores con aceleración apagada): círculo de reemplazo
    const prueba = document.createElement("canvas");
    if (!(prueba.getContext("webgl2") || prueba.getContext("webgl"))) {
      caja.classList.add("globo--sin-webgl");
      return;
    }

    const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let globo: ReturnType<typeof createGlobe> | undefined;
    let fabrica: typeof createGlobe | undefined;
    let frame = 0;
    let phi = phiInicial;
    let ultimoTam = 0;
    let visible = true;
    let desmontado = false;
    // Gira recién cuando la persona hace algo (mueve el mouse, scrollea, toca o usa el teclado).
    // Así la carga de la página queda liviana: dibujar el 3D cuadro por cuadro cuesta mucho en celus.
    let interactuo = false;
    const redibujos: number[] = [];
    const eventos = ["pointermove", "scroll", "touchstart", "keydown"] as const;

    const animar = () => {
      frame = 0;
      if (!globo || !visible || quieto) return;
      phi += 0.0012;
      globo.update({ phi });
      frame = requestAnimationFrame(animar);
    };
    const arrancar = () => {
      if (!frame && !quieto && interactuo && visible && globo) frame = requestAnimationFrame(animar);
    };
    const alInteractuar = () => {
      interactuo = true;
      eventos.forEach((ev) => removeEventListener(ev, alInteractuar));
      arrancar();
    };
    eventos.forEach((ev) => addEventListener(ev, alInteractuar, { passive: true }));

    const dimensionar = () => {
      const tam = Math.round(canvas.getBoundingClientRect().width);
      if (!fabrica || tam < 2 || tam === ultimoTam) return;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      globo?.destroy();
      try {
        const chico = tam < 480; // en celu: menos puntos y menos resolución, casi no se nota
        const dpr = Math.min(devicePixelRatio || 1, chico ? 1.5 : 2);
        globo = fabrica(canvas, {
          width: Math.round(tam * dpr),
          height: Math.round(tam * dpr),
          devicePixelRatio: dpr,
          phi,
          theta,
          dark: 0.9,
          scale: 1.02,
          diffuse: 1.25,
          mapSamples: chico ? 14000 : 24000,
          mapBrightness: 7,
          baseColor: colorBase,
          markerColor: colorMarcador,
          glowColor: colorBrillo,
          opacity: 1,
          offset: [0, 0],
          markers: marcadores,
          arcs: arcos,
          arcColor: colorMarcador,
          arcWidth: 0.6,
          arcHeight: 0.35,
        });
        ultimoTam = tam;
        caja.classList.remove("globo--sin-webgl");
        // El mapa de puntos carga un instante después de crear el globo: unos pocos
        // redibujos quietos al principio para que se vea completo aunque todavía no gire.
        [150, 500, 1200, 2500].forEach((ms) => redibujos.push(window.setTimeout(() => { if (!frame) globo?.update({ phi }); }, ms)));
        arrancar();
      } catch {
        globo = undefined;
        caja.classList.add("globo--sin-webgl");
      }
    };

    const obsTam = new ResizeObserver(dimensionar);
    obsTam.observe(canvas);
    const obsVista = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) arrancar();
      else if (frame) { cancelAnimationFrame(frame); frame = 0; }
    });
    obsVista.observe(caja);

    import("cobe")
      .then(({ default: f }) => { if (!desmontado) { fabrica = f; dimensionar(); } })
      .catch(() => { if (!desmontado) caja.classList.add("globo--sin-webgl"); });

    return () => {
      desmontado = true;
      obsTam.disconnect();
      obsVista.disconnect();
      eventos.forEach((ev) => removeEventListener(ev, alInteractuar));
      redibujos.forEach(clearTimeout);
      if (frame) cancelAnimationFrame(frame);
      globo?.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative aspect-square w-full rounded-full [&.globo--sin-webgl]:bg-[radial-gradient(circle_at_35%_30%,#0d5a2e,#06261a_70%)]">
      <canvas ref={canvasRef} aria-hidden="true" className="size-full" />
    </div>
  );
}
