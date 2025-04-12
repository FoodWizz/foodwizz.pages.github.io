"use strict";

// PRELOAD //
// loading will be end after document is loaded //

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// add event listener on multiple elements //

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// NAVBAR //

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

// HEADER //

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// HOME SLIDER //

const homeSlider = document.querySelector("[data-home-slider]");
const homeSliderItems = document.querySelectorAll("[data-home-slider-item]");
const homeSliderPrevBtn = document.querySelector("[data-prev-btn]");
const homeSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = homeSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  homeSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = homeSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= homeSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

homeSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = homeSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

homeSliderPrevBtn.addEventListener("click", slidePrev);

// AUTO SLIDE //
let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([homeSliderNextBtn, homeSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([homeSliderNextBtn, homeSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);

// ACORDION //
const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }