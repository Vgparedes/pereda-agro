/* Formulario de contacto: arma el mail con el tema elegido y lo abre
   en el programa de correo de la persona. Sin backend.
   El mail de destino sale de config.js (PEREDA.mail). */
(() => {
  const form = document.getElementById("form-contacto");
  if (!form) return;
  const error = form.querySelector(".form__error");
  const temas = [...form.querySelectorAll(".form__temas button")];

  temas.forEach((t) => t.addEventListener("click", () =>
    temas.forEach((o) => o.setAttribute("aria-pressed", String(o === t)))));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!String(d.nombre || "").trim() || !String(d.mensaje || "").trim()) {
      error.textContent = "Completá tu nombre y el mensaje para armar el mail.";
      error.hidden = false;
      return;
    }
    error.hidden = true;
    const tema = temas.find((t) => t.getAttribute("aria-pressed") === "true")?.textContent.trim() || "Consulta";
    const cuerpo = `${d.mensaje}\n\n${d.nombre}${d.pais ? ` (${d.pais})` : ""}`;
    location.href = `mailto:${PEREDA.mail}?subject=${encodeURIComponent(`${tema} · ${d.nombre}`)}&body=${encodeURIComponent(cuerpo)}`;
  });
})();
