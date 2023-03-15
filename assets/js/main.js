let menu = 0;
$(".navbar-toggler").click(function () {
    if (menu === 0) {
        document.getElementById("next-video-title").style.top = "48%";
        document.getElementById("next-video-btn").style.top = "58%";
        menu = 1;
    } else {
        document.getElementById("next-video-title").style.top = "10%";
        document.getElementById("next-video-btn").style.top = "20%";
        menu = 0;
    }
});


$(document).ready(function () {
    let swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true
        },
        autoplay:{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 60,
        loop: true,
    });


    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
