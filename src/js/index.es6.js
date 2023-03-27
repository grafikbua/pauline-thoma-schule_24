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

// #js-slider-cards-services
const sliderCardsServices = document.querySelector('#js-slider-services'); // Checks if one Element is present, to prevent tns error.

if (sliderCardsServices) {
   tns({
      container: '#js-slider-services',
      fixedWidth: 400,
      swipeAngle: false,
      loop: false,
      mouseDrag: true,
      nav: false,
      gutter: 30,
      edgePadding: 150,
      controlsContainer: "#js-slider-services--controls",
      controlsPosition: "bottom",
      prevButton: document.getElementById('#js-slider-services--controls-prev'),
      prevButton: document.getElementById('#js-slider-services--controls-next'),
      arrowKeys: true,
      },
   );
}

// #js-slider-cards-portfolio
const sliderCardsPortfolio = document.querySelector('#js-slider-portfolio'); // Checks if one Element is present, to prevent tns error.

if (sliderCardsPortfolio) {
   tns({
      container: '#js-slider-portfolio',
      fixedWidth: 400,
      swipeAngle: false,
      loop: true,
      mouseDrag: true,
      nav: false,
      gutter: 30,
      edgePadding: 250,
      controlsContainer: "#js-slider-portfolio--controls",
      controlsPosition: "bottom",
      prevButton: document.getElementById('#js-slider-portfolio--controls-prev'),
      prevButton: document.getElementById('#js-slider-portfolio--controls-next'),
      arrowKeys: true,
      },
   );
}

// #js-slider-cards-portfolio
const sliderAboutUs = document.querySelector('#js-slider-about-us'); // Checks if one Element is present, to prevent tns error.

if (sliderAboutUs) {
   tns({
      container: '#js-slider-about-us',
      items: 1,
      swipeAngle: false,
      loop: true,
      mouseDrag: true,
      nav: true,
      controlsContainer: "#js-slider-about-us--controls",
      controlsPosition: "bottom",
      prevButton: document.getElementById('#js-slider-about-us--controls-prev'),
      prevButton: document.getElementById('#js-slider-about-us--controls-next'),
      arrowKeys: true,
      },
   );
}

// Scroll to top
const scrollTopButton = document.querySelector('.js-scroll-top');

if (scrollTopButton) {
   scrollTopButton.addEventListener('click', event => {
      window.scrollTo({top: 0, behavior: 'smooth'});
   });
}
