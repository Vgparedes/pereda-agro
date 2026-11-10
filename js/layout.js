/* =========================================================================
   Pereda Agro · layout.js
   Arma el header y el pie de todas las páginas con los datos de config.js,
   y maneja el header que se oculta, el menú del celu y el "aparecer".
   Cada página solo tiene <header class="header"></header> y <footer class="pie oscuro"></footer>.
   ========================================================================= */
(() => {
  const actual = location.pathname.split("/").pop() || "index.html";
  const flecha = '<svg class="flecha" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- Header ---------- */
  const header = document.querySelector(".header");
  if (header) {
    const links = PEREDA.menu
      .map(([texto, href]) => `<a href="${href}"${href === actual ? ' aria-current="page"' : ""}>${texto}</a>`)
      .join("");
    header.innerHTML = `
      <a class="header__logo" href="index.html" aria-label="Pereda Agro, ir al inicio">
        <img src="img/logos/logo-pereda.png" width="184" height="128" alt="">
        <span>Pereda Agro S.A.</span>
      </a>
      <button class="header__menu" aria-expanded="false" aria-controls="nav" aria-label="Abrir menú"><span></span><span></span></button>
      <nav class="header__nav" id="nav" aria-label="Principal">
        ${links}
        <a class="boton" href="contacto.html"${actual === "contacto.html" ? ' aria-current="page"' : ""}>Contacto</a>
      </nav>`;

    // Se esconde al bajar y vuelve al subir
    let ultimoY = scrollY, abierto = false;
    addEventListener("scroll", () => {
      const delta = scrollY - ultimoY;
      ultimoY = scrollY;
      if (abierto || scrollY < 48 || delta < -3) header.classList.remove("header--oculto");
      else if (delta > 3) header.classList.add("header--oculto");
    }, { passive: true });
    header.addEventListener("focusin", () => header.classList.remove("header--oculto"));

    // Menú de celu y tablet
    const boton = header.querySelector(".header__menu");
    const abrir = (v) => {
      abierto = v;
      header.classList.toggle("header--abierto", v);
      boton.setAttribute("aria-expanded", String(v));
      boton.setAttribute("aria-label", v ? "Cerrar menú" : "Abrir menú");
      document.body.style.overflow = v ? "hidden" : "";
    };
    boton.addEventListener("click", () => abrir(!abierto));
    addEventListener("keydown", (e) => { if (e.key === "Escape" && abierto) { abrir(false); boton.focus(); } });
  }

  /* ---------- Pie ---------- */
  const pie = document.querySelector(".pie");
  if (pie) {
    const oficinas = PEREDA.oficinas.map((o) => `
      <div>
        <h3>${o.ciudad}</h3>
        <address>Pereda Agro S.A.<br>${o.lineas.join("<br>")}<br>Argentina</address>
        <p style="margin-top:10px"><a class="pie__mail" href="${o.mapa}" target="_blank" rel="noopener">Ver en el mapa</a></p>
      </div>`).join("");
    const krsp = SITIO_KRSP
      ? `<a class="krsp" href="${SITIO_KRSP}" target="_blank" rel="noopener">Página creada por <img src="img/logos/logo-krsp.png" alt="KRSp" height="34"></a>`
      : `<span class="krsp">Página creada por <img src="img/logos/logo-krsp.png" alt="KRSp" height="34"></span>`;
    pie.innerHTML = `
      <div class="ruido" aria-hidden="true"></div>
      <div class="ancho">
        <div class="pie__grilla">
          <div>
            <img class="pie__logo" src="img/logos/logo-pereda.png" width="184" height="128" alt="Pereda, desde 1883">
            <p>Agregado de valor, producción y servicios.</p>
            <p style="margin-top:14px"><a class="pie__mail" href="mailto:${PEREDA.mail}">${PEREDA.mail}</a></p>
          </div>
          ${oficinas}
          <nav aria-label="Secciones">
            <h3>Secciones</h3>
            <ul>${[["Inicio", "index.html"], ...PEREDA.menu, ["Contacto", "contacto.html"]]
              .map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>
          </nav>
        </div>
        <div class="pie__base">
          <span>© 2012–${new Date().getFullYear()} Pereda Agro S.A.</span>
          ${krsp}
        </div>
      </div>
      <div class="marca-agua" aria-hidden="true">PEREDA</div>`;
  }

  /* ---------- Flechas: cualquier [data-flecha] recibe el ícono ---------- */
  document.querySelectorAll("[data-flecha]").forEach((el) => el.insertAdjacentHTML("beforeend", flecha));

  /* ---------- Aparecer al scrollear (una sola vez) ---------- */
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    const bloques = document.querySelectorAll("[data-aparecer]");
    const obs = new IntersectionObserver((entradas) => entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.dataset.aparecer = "visible";
      obs.unobserve(e.target);
    }), { threshold: .12, rootMargin: "0px 0px -32px 0px" });
    bloques.forEach((b) => {
      // Lo que ya está en pantalla al cargar no se esconde (evita parpadeo)
      if (b.getBoundingClientRect().top < innerHeight) return;
      b.dataset.aparecer = "esperando";
      obs.observe(b);
    });
    document.documentElement.classList.add("con-aparecer");
  }
})();
