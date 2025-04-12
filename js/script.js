
// SHOW MENU //
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// MENU SHOW //
// Validate if constant exists //
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })  
}

// MENU SHOW //
// Validate if constant exists //
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })  
}

// JAVASCRIPT TO VIEW TAB CONTENT ON CLICK TAB BUTTONS //
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick){
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });

    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
}

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i)
    });
});

// SLIDER //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// CHANGE BACKGROUND HEADER //
function scrollHeader () {
    const header = document.getElementById('header')
    // when the scroll is grater than 50 viewport height, add the scroll-header class to the header tag //
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)
