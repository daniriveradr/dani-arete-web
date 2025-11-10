// year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        e.preventDefault();
        const id = this.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      });
    });

    // Play muted videos on visibility (basic)
    const vids = document.querySelectorAll('video');
    function playVisible(){
      vids.forEach(v=>{
        const rect = v.getBoundingClientRect();
        if(rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 120){
          v.play().catch(()=>{});
        } else {
          // keep looping but pause if far out of view to save CPU
          try{ v.pause(); } catch(e){}
        }
      });
    }
    window.addEventListener('scroll', playVisible);
    window.addEventListener('resize', playVisible);
    playVisible();

    // Simple contact handler (demo: replace with form action or backend)
    function handleContact(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if(!name || !email || !message){
        alert('Por favor completa todos los campos.');
        return;
      }

      // Demo behaviour: open mailto (quick)
      const subject = encodeURIComponent('Contacto desde Dani Areté — ' + name);
      const body = encodeURIComponent(message + '\n\nContacto: ' + name + ' — ' + email);
      window.location.href = `mailto:tuemail@ejemplo.com?subject=${subject}&body=${body}`;

      // If you have a backend, here you'd send via fetch to your endpoint.
    }

    // Accessibility: enable keyboard focus outlines for keyboard users only
    function handleFirstTab(e) {
      if (e.key === 'Tab') {
        document.body.classList.add('show-focus-outline');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }
    window.addEventListener('keydown', handleFirstTab);