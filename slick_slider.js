//Slick slider
$('.center-slide').slick({
    centerMode: true,
    slidesToShow: 5,
    draggable: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    centerPadding: "70px",
    responsive: [
        {
            breakpoint: 1850,
            settings: {
                centerPadding: "50px"
            }
        },
        {
            breakpoint: 1600,
            settings: {
                centerPadding: "40px",
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1250,
            settings: {
                centerPadding: "60px",
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: "90px",
                slidesToShow: 2,
                draggable: false
            }
        },
        {
            breakpoint: 800,
            settings: {
                centerMode: true,
                centerPadding: "220px",
                slidesToShow: 1,
                draggable: false
            }
        },
        {
            breakpoint: 650,
            settings: {
                centerMode: true,
                centerPadding: "150px",
                slidesToShow: 1,
                draggable: false
            }
        }
    ]
});