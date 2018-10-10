/*global $, window, console*/

//////// preloader


//////////////// team
$(function () {
    "use strict";
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
    
    
    
    ///////// progress bars
    
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 500);
        });
        
        this.destroy();
    }, {offset: 'bottom-in-view'});
    
    
    ///////////////
    $("#services-tabs").responsiveTabs({
        animation: "slide"
    });
    
    /////////////
    /*$(".tab-bg").css({
        height: $(".service-tab img").height()
    });*/
    
    
    ////////////// portfolio
    
    $("#portfolio-wrapper").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
    
    ////////////testimonials
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    
    
    ////////////// stats
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    ////////////clients
    $("#clients-list").owlCarousel({
        items: 4,
        autoplay: false,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
    
    /////////////navigation
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar").addClass("white-nav-top");
            $(".navbar img").attr("src", "img/logo/logo-dark.png");
        } else {
            $(".navbar").removeClass("white-nav-top");
            $(".navbar img").attr("src", "img/logo/logo.png");
        }
        
        
        $("section").each(function () {
            if ($(window).scrollTop() > ($(this).offset().top - $(".white-nav-top").innerHeight())) {
                $(".navbar ul li").removeClass("active");
                $(".navbar ul li[data-scroll='" + $(this).attr("id") + "']").addClass("active");
            }
        });
        
        
    });
    
    $(".navbar ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        
        
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top + 2
        }, 480);
    });
    
    
    
    ////// mobile menu
    
    $("#mobile-nav-open-btn").on("click", function () {
        $("#mobile-nav").css({
            height: "100%"
        });
    });
    
    $("#mobile-nav-close-btn, #mobile-nav li").on("click", function () {
        $("#mobile-nav").css({
            height: 0
        });
    });
    
    ///////////////WOW
    
    /*arrow down*/
    $("#arrow-down").on("click", function () {
        $("html, body").animate({
            scrollTop: $(this).attr("href").offset.top + 2
        }, 300);
    });
    
    $("a").on("click", function (e) {
        e.preventDefault();
    });
    
    
});


////////////////////////////////////////////////////



$(window).on("load", function () { /////whole site load
    "use strict";
    $("#preloader, #status").fadeOut(500);
    
    
    
    ///////////////
    $('#isotope-container').isotope({
        
    });
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        var filterValue = $(this).data("filter");
        $('#isotope-container').isotope({
            filter: filterValue
        });
        
        $(this).addClass("active").siblings("button").removeClass("active");
    });
    
    
});




    