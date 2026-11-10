import { productos, type Ruta } from "./contenido";
import { Header } from "./components/Header";
import { Pie } from "./components/Pie";
import { useAparecer } from "./hooks/useAparecer";
import { Contacto } from "./paginas/Contacto";
import { Empresa } from "./paginas/Empresa";
import { Exportacion } from "./paginas/Exportacion";
import { Inicio } from "./paginas/Inicio";
import { Eventos } from "./paginas/Eventos";
import { Producto } from "./paginas/Producto";

/** Cada página es una carpeta propia al publicar (dist/empresa/index.html, etc.):
 *  se navega con links comunes y Google ve todo el HTML. */
function Pagina({ ruta }: { ruta: Ruta }) {
  switch (ruta) {
    case "empresa": return <Empresa />;
    case "girasol-confitero":
    case "pisingallo": return <Producto p={productos.find((p) => p.ruta === ruta)!} />;
    case "exportacion": return <Exportacion />;
    case "eventos": return <Eventos />;
    case "contacto": return <Contacto />;
    default: return <Inicio />;
  }
}

export default function App({ ruta }: { ruta: Ruta }) {
  useAparecer();
  return (
    <>
      <a href="#main" className="fixed top-[-80px] left-4 z-[200] rounded-lg bg-white px-4.5 py-3 text-tinta focus:top-4">Saltar al contenido</a>
      <Header ruta={ruta} />
      <main id="main">
        <Pagina ruta={ruta} />
      </main>
      <Pie />
    </>
  );
}
