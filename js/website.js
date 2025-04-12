/* CHANGE BACKGROUND HEADER */
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag //
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SWIPER POPULAR */
var swiperPopular = new Swiper(".popular-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* INFO ACCORDION */
const accordionItems = document.querySelectorAll('.info-accordion-item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.info-accordion-header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.info-accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/* SHOW SCROLL UP */ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class //
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* DARK LIGHT THEME */ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'fa-moon'

// Previously selected topic (if user selected) //
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class //
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa fa-sun' : 'fa fa-moon'

// We validate if the user previously chose a topic //
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark //
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'fa fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button //
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme //
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose //
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* SCROLL REVEAL ANIMATION */