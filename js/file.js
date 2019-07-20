wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
})
wow.init();

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1500,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });
    
})



$(".arrow").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".about").offset().top - '100'
    }, 600);
});

$(".about-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".about").offset().top - '100'
    }, 600);
});

$(".ser-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".services").offset().top - '100'
    }, 600);
});

$(".stat-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".slider").offset().top - '200'
    }, 600);
});

$(".work-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".info").offset().top - '100'
    }, 600);
});

$(".contact-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".contact").offset().top
    }, 1000);
});





$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin:10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });


});


var typed = new Typed(".type", {
    strings: [

        "This is a Digital Solution Agency Located in Egypt For Help Clients in Digital Work.",
        "We Have Specialists in All Market Fields To Help All Clients Improve their Own Projects.",
        "There Are 4 Branches Across Egypt in Different Places To Reaches All Clients."
    ],
    typeSpeed: 60,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity,
    backDelay: 1800,
    showCursor: false,
});

$(".see-more").click(function () {
    $(".more").toggle();
})



var x = document.getElementsByClassName('accordion-div');
var y = document.getElementsByClassName('panel');



$(".accordion-div").click(function () {

    $(this).next().toggle();
    $(this).children().first().toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
})

