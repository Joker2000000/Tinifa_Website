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