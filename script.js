window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    // Agrega la clase para iniciar la animación de desvanecimiento
    preloader.classList.add("hidden");
    // Opcional: elimina el preloader del DOM después de que termine la transición
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500); // Debe coincidir con la duración de la transición en CSS
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    // Pausar todos los videos al inicio, excepto el del Hero
    if (video.id !== "heroVideo") {
      video.pause();
    }
    // Reproducir al pasar el mouse por encima
    video.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });
    video.addEventListener("mouseleave", () => {
      video.pause();
    });
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Por favor completa todos los campos.");
        return;
      }

      const subject = encodeURIComponent(
        "Contacto desde la web Areté - " + name
      );
      const body = encodeURIComponent(
        message + "\n\nDe: " + name + " (" + email + ")"
      );
      // CORREO ELECTRÓNICO CORREGIDO
      window.location.href = `mailto:ed.river98@gmail.com?subject=${subject}&body=${body}`;

      contactForm.reset();
    });
  }

  // Animación de Fade-in para secciones al hacer scroll
  const sectionsToAnimate = document.querySelectorAll(".fade-in-section");

  if (sectionsToAnimate.length > 0) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Dejar de observar una vez que es visible
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px", // Activa la animación un poco antes de que llegue al borde
      }
    );

    sectionsToAnimate.forEach((section) => observer.observe(section));
  }

  // Lógica del Menú Hamburguesa
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const body = document.body;

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      body.classList.toggle("mobile-nav-open");
    });
  }

  // Lógica del botón "Volver Arriba"
  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });
  }
});
