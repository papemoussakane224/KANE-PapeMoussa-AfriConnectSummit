/* ===================================================
   DARK MODE / LIGHT MODE
=================================================== */

// On récupère les éléments dont on a besoin
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const htmlElement = document.documentElement;

// Fonction qui applique le thème (met à jour l'attribut + l'icône)
function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
    } else {
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
    }
}

// Au chargement de la page : on vérifie si un thème est déjà enregistré
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

// Au clic sur le bouton : on bascule le thème et on le sauvegarde
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});


/* ===================================================
   NAVBAR DYNAMIQUE AU SCROLL
=================================================== */

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


/* ===================================================
   MENU HAMBURGER (MOBILE)
=================================================== */

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Ferme le menu automatiquement si on clique sur un lien
const allNavLinks = navLinks.querySelectorAll('a');
allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});


/* ===================================================
   BOUTON RETOUR EN HAUT
=================================================== */

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* ===================================================
   ANNÉE DYNAMIQUE DANS LE FOOTER
=================================================== */

const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();