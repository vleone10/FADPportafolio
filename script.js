document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Menú hamburguesa ---------- */
  const toggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");

  if (toggle && navList) {
    const closeMenu = () => {
      navList.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cierra al hacer clic en un enlace
    navList.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    // Cierra con Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Cierra al pasar a escritorio
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) closeMenu();
    });
  }

  /* ---------- Formulario de contacto (para contacto.html) ---------- */
  const form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      alert("¡Mensaje enviado con éxito! Gracias por escribirme.");
      form.reset();
    });
  }
});