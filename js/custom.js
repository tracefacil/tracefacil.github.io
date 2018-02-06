(function ($) {
    'use strict';

    // :: Index of jQuery Active Code ::

    // :: 1.0 Welcome Slider Active Code
    // :: 2.0 Testimonials Slider Active Code
    // :: 3.0 App Screenshots Slider Active Code
    // :: 4.0 Meanmenu Active Code
    // :: 5.0 Onepage Nav Active Code
    // :: 6.0 Video Active Code
    // :: 7.0 ScrollUp Active Code
    // :: 8.0 MatchHeight Active Code
    // :: 9.0 YouTube Video Active Code
    // :: 10.0 wow active code
    // :: 11.0 PreventDefault a Click
    // :: 12.0 Hover Effect Active Code
    // 13.0 counterup active code
    // :: 14.0 Sticky Active Code
    // :: 15.0 Preloader active code

    // :: 1.0 Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 500,
            autoplayHoverPause: false
        });
    }

    var owl = $('.welcome_slides');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.owl-item .single_slide .welcome_text_area h2').removeClass('animated').hide();
        $('.owl-item .single_slide .welcome_text_area p').removeClass('animated').hide();
        $('.owl-item .single_slide .welcome_text_area .btn').removeClass('animated').hide();
    })
    owl.on('translated.owl.carousel', function (event) {
        $('.owl-item.active .single_slide .welcome_text_area h2').addClass('animated custom_slideInUp').show();
        $('.owl-item.active .single_slide .welcome_text_area p').addClass('animated custom_slideInUp_2').show();
        $('.owl-item.active .single_slide .welcome_text_area .btn').addClass('animated custom_slideInUp_btn_1').show();
    })

    // :: 2.0 Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });
    }

    // :: 3.0 App Screenshots Slider Active Code
    if ($.fn.owlCarousel) {
        $(".app_screenshots").owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="pe-7s-angle-left"></i>', '<i class="pe-7s-angle-right"></i>'],
            center: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // :: 4.0 Meanmenu active code
    if ($.fn.meanmenu) {
        $('.main_menu_area .mainmenu nav').meanmenu({
            onePage: true
        });
    }
    // :: 5.0 Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'current_page_item',
            easing: 'easeInOutQuart',
            scrollSpeed: 1500
        });
    }

    // :: 6.0 Video Active Code
    $('.video_btn').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });

    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 2000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }
    // :: 8.0 MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // :: 9.0 YouTube Video Active Code
    if ($.fn.mb_YTPlayer) {
        $('.player').mb_YTPlayer();
    }

    // :: 10.0 wow active code
    new WOW().init();

    // :: 11.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 12.0 Hover Effect Active Code
    $('.single_benifits').on('mouseenter', function () {
        $('.single_benifits').removeClass('active');
        $(this).addClass('active');
    });

    // 13.0 counterup active code
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    // Color Picker Active Code
    $(".select_opt").click(function () {
        var getId = $(this).attr('value');
        $('body').removeClass('purple blue green orange yellow deep-orange red cyan teal pink').addClass(getId);
    });

    // Color Picker Active Code
    $(".color_picker_switcher").on('click', function () {
        $(".color_picker_area").toggleClass('on');
    })

    // Demo Preview Active Code
    $(".onepage_demo_switcher").on('click', function () {
        $(".onepage_demo_area").toggleClass('on');
    })

    // Sticky Active Code
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 150) {
            $('.main_header_area').addClass('sticky slideInDown');
            $('body').addClass('mobile_menu_on');

        } else {
            $('.main_header_area').removeClass('sticky slideInDown');
            $('body').removeClass('mobile_menu_on');
        }
    });

    // :: 15.0 Preloader active code
    $(window).on('load', function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);