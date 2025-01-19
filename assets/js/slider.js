addEventListener('DOMContentLoaded', () => {
    
    var swiper = new Swiper(".katPlanlar", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".dahaFazla", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        }
    });
});
