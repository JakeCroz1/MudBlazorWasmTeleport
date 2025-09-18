export function runSwipe() {
    /*
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "2",
        loop: true,
        // spaceBetween: 5,
        //autoplay: {
           // delay: 2500,
           // disableOnInteraction: false,
        //},
        //resizeObserver: true,
        coverflowEffect: {
            scale: 0.9,
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var swiper = new Swiper(".js-testimonials-slider", {
        //freeMode: true,
        grabCursor: true,
        loop: true,
        //centeredSlides: true,
        spaceBetween: 10,
        slidesPerView: 1,
        breakpoints: {
            512: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        //autoplay: {
         //delay: 2500,
        //disableOnInteraction: false,
        //},
        //resizeObserver: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            //clickable: true,
        }, navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    */
    var swiper = new Swiper(".js-testimonials-slider", {
        //freeMode: true,
        grabCursor: true,
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,
        breakpoints: {
            512: {
                slidesPerView: 2,
                spaceBetween: 44
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 44
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 44
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: true
        },
        //resizeObserver: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true
            //clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}
