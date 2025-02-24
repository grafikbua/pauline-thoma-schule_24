// Polyfills
// import './polyfills/custom-event';

// Node Modules
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import Lazyload from 'vanilla-lazyload';
// import Rellax from 'rellax';
// import { tns } from 'tiny-slider';
// import "../../node_modules/fslightbox/index.js";
// import "../../node_modules/masonry-layout/masonry.js";


document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".overlay");
    const mobileNav = document.querySelector(".mobile-nav");
    const body = document.body;

    function toggleMenu() {
    burger.classList.toggle("clicked");
    overlay.classList.toggle("show");
    mobileNav.classList.toggle("show");
    body.classList.toggle("overflow");
    }

    burger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".overlay");
    const mobileNav = document.querySelector(".mobile-nav");
    const body = document.body;

    function toggleMenu() {
    burger.classList.toggle("clicked");
    overlay.classList.toggle("show");
    mobileNav.classList.toggle("show");
    body.classList.toggle("overflow");
    }

    burger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
});
    
    
    

document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("js-header");
    var logo = document.getElementById("js-logo");

    function scrollFunction() {
        if (!header || !logo) return; // Sicherstellen, dass die Elemente existieren

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            logo.style.height = "80px";
            header.classList.remove("shadow-sm");
            header.classList.add("shadow");
        } else {
            logo.style.height = "130px";
            header.classList.add("shadow-sm");
            header.classList.remove("shadow");
        }
    }

    // Füge den Scroll-Listener erst hinzu, nachdem die Funktion definiert wurde
    window.onscroll = scrollFunction;
});


    
    
    

(function () {
var check = document.createElement('script');
if (!('noModule' in check) && 'onbeforeload' in check) {
var support = false;
document.addEventListener('beforeload', function (e) {
if (e.target === check) {
support = true;
} else if (! e.target.hasAttribute('nomodule') || ! support) {
return;
}
e.preventDefault();
}, true);

check.type = 'module';
check.src = '.';
document.head.appendChild(check);
check.remove();
}
}());

    

    