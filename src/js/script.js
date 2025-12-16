const menuToggle = document.querySelector('.menu__toggle');
const menuOverlay = document.querySelector('.menu__overlay');

menuToggle.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Fermer le menu en cliquant en dehors
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});