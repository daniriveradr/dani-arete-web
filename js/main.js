document.addEventListener("DOMContentLoaded", () => {
  // Lógica del Menú Hamburguesa
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      body.classList.toggle("mobile-nav-open");
    });
  }

  // Cierra el menú si se hace clic en un enlace (útil para navegación en la misma página)
  if (navLinks) {
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        body.classList.remove("mobile-nav-open");
      }
    });
  }

  // Lógica del Preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 300);
  }

  // Activar Íconos Feather
  feather.replace();

  // Lógica de Scroll del Header
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      window.scrollY > 50
        ? header.classList.add("scrolled")
        : header.classList.remove("scrolled");
    });
  }

  // Lógica del Año en el Footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Lógica del Formulario de Contacto (si existe)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return;
      }
      const subject = encodeURIComponent(`Contacto desde Dani Areté - ${name}`);
      const body = encodeURIComponent(`${message}\n\nDe: ${name} (${email})`);
      window.location.href = `mailto:ed.river98@gmail.com?subject=${subject}&body=${body}`;
      contactForm.reset();
    });
  }

  // Lógica de Animación Fade-in
  const fadeInElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Opcional: deja de observar una vez que es visible
        }
      });
    },
    { threshold: 0.1 }
  );
  fadeInElements.forEach((el) => observer.observe(el));

  // Lógica de Hover en Videos (si existen)
  const videos = document.querySelectorAll(".vcard video");
  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => video.pause());
  });

  // Lógica para marcar el enlace de navegación activo
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinksA = document.querySelectorAll(".nav-links a");
  navLinksA.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});
