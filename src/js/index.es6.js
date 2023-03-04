// Polyfills
import './polyfills/custom-event';

// Node Modules
//import Popper from '../../src/js/plugins/popper.min.js';
// import Modal from '../../node_modules/bootstrap/dist/js/bootstrap.esm.min.js';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Lazyload from 'vanilla-lazyload';
import Rellax from 'rellax';
import { tns } from 'tiny-slider';

// Lazy Loading
// Instance using native lazy loading
const lazyContent = new Lazyload({
    elements_selector: "img.js-lazyload",
    use_native: true
});

const lazyFrame = new Lazyload({
    elements_selector: "iframe.js-lazyload",
});


// Rellax
// Checks if one Element is present,
const rellax = document.querySelector('.js-rellax');

// Initialize Rellax
if (rellax) {
   new Rellax('.js-rellax');
};


// Initialize Slider
const slider = document.querySelector('.js-slider'); // Checks if one Element is present, to prevent tns error.

if (slider) {
   tns({
      container: ".js-slider",
      loop: false,
      mode: "gallery",
      responsive: {
         "350": {
            "items": 1
         },
         "500": {
            "items": 1
         }
      },
      swipeAngle: false,
      mouseDrag: true,
      speed: 800,
      nav: false,
      edgePadding: 0,
      gutter: 0,
      controlsContainer: "#js-slider__controls",
      prevButton: document.getElementById('#prev'),
      nextButton: document.getElementById('#next'),
      arrowKeys: true,
   });
}

// Scroll to top
const scrollTopButton = document.querySelector('.js-scroll-top');

if (scrollTopButton) {
   scrollTopButton.addEventListener('click', event => {
      window.scrollTo({top: 0, behavior: 'smooth'});
   });
}
