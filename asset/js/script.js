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

});
