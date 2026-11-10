/** Fondo de Contacto: un campo visto desde arriba. Cada lote tiene surcos en otra
 *  dirección y el borde en dorado. Es un SVG quieto (no se anima). */

// [puntas del lote, ángulo de los surcos, separación entre surcos]
const lotes: [string, number, number][] = [
  ["0,0 520,0 430,380 0,450", 28, 14],
  ["520,0 1040,0 980,330 430,380", -12, 12],
  ["1040,0 1440,0 1440,420 980,330", 62, 16],
  ["0,450 430,380 560,900 0,900", -35, 13],
  ["430,380 980,330 1080,900 560,900", 8, 11],
  ["980,330 1440,420 1440,900 1080,900", -58, 15],
];

export function FondoLotes() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="absolute inset-0 size-full">
      <defs>
        {lotes.map(([, angulo, sep], k) => (
          <pattern key={k} id={`surcos-${k}`} width={sep} height={sep} patternUnits="userSpaceOnUse" patternTransform={`rotate(${angulo})`}>
            <line x1="0" y1="0" x2="0" y2={sep} stroke="#fff" strokeOpacity={k % 2 ? 0.15 : 0.11} strokeWidth="1.3" />
          </pattern>
        ))}
        {/* Oscurece el centro para que el texto se lea bien */}
        <radialGradient id="lotes-centro" cx=".5" cy=".5" r=".6">
          <stop offset="0" stopColor="var(--color-verde-noche)" stopOpacity=".6" />
          <stop offset="1" stopColor="var(--color-verde-noche)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {lotes.map(([puntas], k) => (
        <polygon key={k} points={puntas} fill={`url(#surcos-${k})`} stroke="var(--color-dorado)" strokeOpacity=".18" strokeWidth="1.5" />
      ))}
      <rect width="1440" height="900" fill="url(#lotes-centro)" />
    </svg>
  );
}
