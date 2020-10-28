(function($){
    "use strict";
    

    // Partner Slides
    $('.partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsive: {
            0:{
                items:2,
            },
            576:{
                items:4,
            },
            768:{
                items:4,
            },
            1200:{
                items:6,
            }
        }
    });

    // ML Projects Slides
    $('.ml-projects-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        autoplayTimeout: 5000,
        responsive: {
            0:{
                items: 1,
            },
            576:{
                items: 2,
            },
            768:{
                items: 2,
            },
            1024:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });

    // Tabs JS
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    // ML Feedback Slides
    $('.ml-feedback-slides').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        items: 1,
        animateOut: 'fadeOut',
    });
    
}(jQuery));