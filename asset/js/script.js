document.addEventListener('DOMContentLoaded', function () {

    // Hero Slider
    let heroSlider = new Swiper(".heroSwiper", {
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        loop: true,
        effect: "cube"
    });

    // text-typed-auto 
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['front-End developer.', 'full stack web developer.', 'front-End developer.',],
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });

    // scroll-top

    const home = document.querySelector("#home");

    const footerElem = document.querySelector(".footer-section");

    const scrollElement = document.createElement('div');

    scrollElement.classList.add("scrollTop-style");

    scrollElement.innerHTML = `<span class="scroll-top"><i class="fa-solid fa-arrow-up"></i></span>`;

    footerElem.after(scrollElement);

    const scrollTop = () =>{
    home.scrollIntoView({behavior: "smooth"});
    };

    scrollElement.addEventListener('click',scrollTop);


});
