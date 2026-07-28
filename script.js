document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE MENÜ SCHLIESSEN
    const navLinks = document.querySelectorAll('nav ul li a');
    const navToggle = document.getElementById('nav-toggle');

    if (navToggle && navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.checked = false;
            });
        });
    }

    // 2. SCROLL-ANIMATION FÜR REVEAL-ELEMENTE
    const targets = document.querySelectorAll('.reveal-element');

    if (targets.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.05
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Animiert nur beim ersten Hinscrollen
                }
            });
        }, observerOptions);

        targets.forEach(target => {
            revealObserver.observe(target);
        });
    }

    // 3. VIDEO-AUTOPLAY BEIM SCROLLEN
    const video = document.getElementById('scroll-video');

    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(error => {
                        console.log("Autoplay blockiert:", error);
                    });
                } else {
                    video.pause();
                }
            });
        }, {
            threshold: 0.5
        });

        videoObserver.observe(video);
    }

    // 4. NETLIFY IDENTITY LOGIN-WEITERLEITUNG
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                });
            }
        });
    }

});