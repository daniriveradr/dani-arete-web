document.addEventListener('DOMContentLoaded', () => {

    // 1. EFECTO DE HEADER AL HACER SCROLL
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. ANIMACIÓN DE APARICIÓN (FADE-IN) AL HACER SCROLL
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // usa el viewport como el área de observación
        rootMargin: '0px',
        threshold: 0.1 // el elemento se considera visible cuando el 10% está en pantalla
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Dejar de observar después de animar una vez
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });

});