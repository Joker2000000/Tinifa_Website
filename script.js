document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menü automatisch schließen, wenn ein Link geklickt wird
    const navLinks = document.querySelectorAll('nav ul li a');
    const navToggle = document.getElementById('nav-toggle');

    if (navToggle && navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.checked = false;
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Alle Elemente auswählen, die eine Scroll-Animation bekommen sollen
    const targets = document.querySelectorAll('.reveal-element');

    // 2. Den Beobachter (Observer) einrichten
    const observerOptions = {
        root: null,       // Nutzt den normalen Browser-Bildschirm als Sichtfenster
        rootMargin: '0px', // Kein zusätzlicher Rand
        threshold: 0.15   // Sobald 15% des Elements im Bild sind, schlägt der Wachmann Alarm
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Pruefen, ob das Element im sichtbaren Bereich ist
            if (entry.isIntersecting) {
                // Füge die Klasse hinzu, damit die CSS-Animation startet
                entry.target.classList.add('active');
                
                // Optional: Den Beobachter für dieses Element stoppen, 
                // damit es nur beim ersten Hinscrollen animiert wird
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 3. Dem Beobachter sagen, welche Elemente er überwachen soll
    targets.forEach(target => {
        observer.observe(target);
    });
});



