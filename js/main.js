(function ($, window, document,) {
    "use strict";
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    /*
    *
    * ==========================================
    *  Lazy Loader
    * ==========================================
    *
    */

    new LazyLoad();

    /*
*
* ==========================================
*  hero_slider-slider
* ==========================================
*
*/
    var hero_slider = $('.hero-slider');
    if (hero_slider.length > 0) {
        hero_slider.slick({
            autoplay:true,
            autoplaySpeed:2000,
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            lazyLoad: 'progressive',
            prevArrow: "<button type='buttons' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='buttons' class='slick-next '><i class='fas fa-chevron-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '0',
                    }
                }

            ]
        });
        hero_slider.on('swipe', function(event, slick, currentSlide, nextSlide){

            console.log(nextSlide);
            new LazyLoad();
        });

    }





    /*
    *
    * ==========================================
    *   sticky nava bar
    * ==========================================
    *
    */

    $win.scroll(function (e) {

        if($(e.target).closest('.navbar-toggler').length == 0) {
            var opened = $('.navbar-collapse').hasClass('collapse');
            if ( opened === true ) {
                $('.navbar-collapse').collapse('hide');
                $('.navbar-toggler').find('.fa').addClass('fa-bars');
                $('.navbar-toggler').find('.fa').removeClass('fas fa-times');
            }
        }

        if ($(window).scrollTop() >= 50) {
            $('#header').addClass('navbar-fixed');
        } else {
            $('#header').removeClass('navbar-fixed');
        }
    });


    /*
    *
    * ==========================================
    *   Menue Toogle
    * ==========================================
    *
    */

    $('body').bind('click', function(e) {
        if($(e.target).closest('.navbar-toggler').length == 0) {
            var opened = $('.navbar-collapse').hasClass('collapse');
            if ( opened === true ) {
                $('.navbar-collapse').collapse('hide');
                $('.navbar-toggler').find('.fa').addClass('fa-bars');
                $('.navbar-toggler').find('.fa').removeClass('fas fa-times');
            }
        }
    });

    $body.on('click', '.navbar-toggler', function (e) {
        e.preventDefault();
        var dd = $(this).attr('aria-expanded');
        if (dd != 'false') {
            $(this).find('.fa').addClass('fa-bars');
            $(this).find('.fa').removeClass('fas fa-times');
        } else {
            $(this).find('.fa').removeClass('fa-bars');
            $(this).find('.fa').addClass('fas fa-times');
        }

    });


    $(".see-bio-btn").click(function(e){
        e.preventDefault();
        var target_id =  $('#'+$(this).attr("data-id"));
        if ($(this).parents('.bio').find('.bio-wrapper').hasClass('active')){
            $(this).parents('.bio').find(target_id).removeClass('active').hide();
        }else{
            $(this).parents('.bio').find(target_id).addClass('active').show();
        }
        console.log(target_id);
    });

    $(".close-bio-btn").click(function(e){
        e.preventDefault();
        $(this).parents('.bio-wrapper').removeClass('active').hide();
    });



    const realFileBtn = document.getElementById("real-file");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");


    if(customBtn) {
        customBtn.addEventListener("click", function () {
            realFileBtn.click();
        });

        realFileBtn.addEventListener("change", function () {
            if (realFileBtn.value) {
                customTxt.innerHTML = realFileBtn.value.match(
                    /[\/\\]([\w\d\s\.\-\(\)]+)$/
                )[1];
            } else {
                customTxt.innerHTML = "No file chosen, yet.";
            }
        });
    }



    /*
    *
    * ==========================================
    *  back to top
    * ==========================================
    *
    */

    $win.scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });



})(jQuery, window, document);