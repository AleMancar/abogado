// script.js
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('nav .menu');
    var logo = document.querySelector('.logo').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY >= logo) {
            menu.classList.add('sticky');
        } else {
            menu.classList.remove('sticky');
        }
    });
});

// Obtén la URL de la página actual
const currentPage = window.location.pathname.split("/").pop();

// Selecciona todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu a');

// Recorre cada enlace
menuLinks.forEach(link => {
    // Compara el href del enlace con la página actual
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('current-page');
    }
});