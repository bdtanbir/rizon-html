/*------------------------------------------------------------------
    Template Name:  rizon
    Version: 1.0.0
    Author: Techydevs
    Author Email: contact@techydevs.com

    [Table of Content]
    00- PreLoader
    01- Menu Link And Page Id Check
    02- Testimonial
    03- Client
    04- Typing
    05- User Social Link
    06- Isotope Filter
    07- Magnific popup image + modal
    08- Blog Single Page Popup
    09- Google Map
    10- Setting Box
    11- Messenger box
    12- Tooltip
    15- Body Shape Color Picker

*/

(function ($) {
    "use strict";


    /****************************
     **     00- PreLoader      **
        *************************/
    $(window).on('load', function () {
        $('.rizon-loader').delay('500').fadeOut(1000);
    });


    $(document).on('ready', function () {

        /**********************************************
         **     01- Menu Link And Page Id Check      **
         **********************************************/
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            $hashLink = $('.menu-box-menu  > ul li a');
        // Set current Active section on new tabs or window
        var link = window.location.href,
            hashPosition = link.indexOf('#'),
            hash = link.substr(hashPosition, link.length);

        if (hash.indexOf('#') > -1 && !window.location) {
            if ($(hash).length) {
                $(hash).addClass('active').siblings().removeClass('active');
            }
            $hashLink.each(function (e) {
                $(this).attr('href') == hash ? $(this).parent('li').addClass('active').siblings().removeClass('active') : '';
            })
        } else {
            $('#about').addClass('active');
        }

        // Page Transition
        var $pages = $('.single_page'),
            currentActivePage = $('.single_page.active')[0],
            prevIndex = Array.prototype.indexOf.call($pages, currentActivePage),
            currentActiveIndex;

        $hashLink.on('click', function (e) {
            //get current Elem and Index
            var $toBeActivated = $(e.currentTarget.hash);
            currentActiveIndex = Array.prototype.indexOf.call($pages, $($toBeActivated)[0]);

            //Set animation according to order
            if (prevIndex < currentActiveIndex) {
                $toBeActivated.addClass('active').siblings().removeClass('active');
            } else if (prevIndex > currentActiveIndex) {
                $toBeActivated.addClass('active').siblings().removeClass('active');
            }

            //active current item
            $(this).parent('li').addClass('active').siblings().removeClass('active');

            //update state
            prevIndex = currentActiveIndex;
            currentActivePage = $toBeActivated[0];
        });

        //page refresh remove active class
        if (window.location) {
            $('.single_page').removeClass('active');
            $('#home').addClass('active');
            $('.menu-box-menu  > ul li').removeClass('active');
            $('.menu-box-menu > ul li:first-child').addClass('active');
        }

        /*****************************
         **    02- Testimonial      **
         *****************************/
        if ($(".testimonial-slider").length) {
            $('.testimonial-slider').owlCarousel({
                autoHeight: true,
                autoplay: true,
                loop: true,
                nav: false,
                margin: 10,
                dots: true,
                slideSpeed: 2000,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 5
                    },
                    600: {
                        items: 1,
                        margin: 5
                    },
                    1000: {
                        items: 2,
                        margin: 5
                    }
                }
            });
        }


        /************************
         **    03- Client      **
         ************************/
        if ($(".client-slider").length) {
            $('.client-slider').owlCarousel({
                autoHeight: true,
                autoplay: true,
                loop: true,
                nav: false,
                margin: 30,
                dots: false,
                slideSpeed: 2000,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            });
        }


        /************************
         **    04- Typing      **
         ************************/
        if ($(".typed").length) {
            var typed = new Typed('.typed', {
                strings: ["Developer", "Freelancer", "Designer", "Photographer"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true,
                showCursor: true,
                cursorChar: '.',
                autoInsertCss: false,
            });
        }


        /**********************************
         **    05- User Social Link      **
         **********************************/
        $(document).on('click', '.author-box .author-inner .show-author-socials', function () {
            $(".author-box .author-inner .show-author-socials").toggleClass('active');
            $(".author-box .author-inner .author-social").toggleClass('active');
        });

        /********************************
         **    06- Isotope Filter      **
         ********************************/
        if ($(".grid").length) {
            $('.grid').isotope({
                // options
                itemSelector: '.element-item',
                layoutMode: 'packery'
            });
        }


        /**********************************************
         **    07- Magnific popup image + modal      **
         **********************************************/
        if ($(".mfp-lightbox").length) {
            $('.mfp-lightbox').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
            });
        }
        if ($(".works-item-link").length) {
            $('.works-item-link').magnificPopup({
                type: 'inline',
                gallery: {
                    enabled: true
                },
                mainClass: 'mfp-fade',
                closeBtnInside: false,
                removalDelay: 300
            });
        }


        /****************************************
         **    08- Blog Single Page Popup      **
         ****************************************/
        $(document).on('click', '.all-sections .all-section-inner .news-wrapper .news-box .news-box-content h3 a', function (e) {
            $("body").addClass('bl-single-active');
            e.preventDefault();
        });
        $(document).on('click', '.single-blog-overlay, .blog-single .close-bl-details', function () {
            $("body").removeClass('bl-single-active');
        });


        /****************************
         **    09- Google Map      **
         ****************************/
        if ($("#map").length) {
            initMap('map', 40.678177, -73.944160, 'assets/images/map-marker.png');
        }


        /*****************************
         **    10- Setting Box      **
         *****************************/
        // menu style layout
        $(document).on('click', '.setting-box .setting-box-popup .layout-style ul.layout li', function () {
            $(".setting-box .setting-box-popup .layout-style ul.layout li").removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.setting-box .setting-icon', function () {
            $("body").toggleClass("show-setting-panel");
        });
        // background layout
        $(document).on('click', '.setting-box .setting-box-popup .background-layout ul.layout li', function () {
            $(".setting-box .setting-box-popup .background-layout ul.layout li").removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.setting-box .setting-box-popup .background-layout ul.layout li.particle-st-li', function () {
            $("body").addClass('particle-style-bg').removeClass('no-image-bg image-bg dark-bg');
        });
        $(document).on('click', '.setting-box .setting-box-popup .background-layout ul.layout li.no-image-st-li', function () {
            $("body").addClass('no-image-bg').removeClass('particle-style-bg image-bg dark-bg');
        });
        $(document).on('click', '.setting-box .setting-box-popup .background-layout ul.layout li.image-st-li', function () {
            $("body").addClass('image-bg').removeClass('particle-style-bg no-image-bg dark-bg');
        });
        $(document).on('click', '.setting-box .setting-box-popup .background-layout ul.layout li.dark-st-li', function () {
            $("body").addClass('dark-bg').removeClass('particle-style-bg no-image-bg image-bg');
        });
        // background shape
        $(document).on('click', '.setting-box .setting-box-popup .background-layout .body-shape span', function () {
            $("body").toggleClass('body-background-shape');
        });
        // animation styles
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li', function () {
            $(".setting-box .setting-box-popup .animation-style ul.layout li").removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li.animation-st-1', function () {
            $("body").addClass('section-animation-1').removeClass('section-animation-2 section-animation-3 section-animation-4 section-animation-5 section-animation-6 section-animation-7 section-animation-8');
        });
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li.animation-st-2', function () {
            $("body").addClass('section-animation-2').removeClass('section-animation-1 section-animation-3 section-animation-4 section-animation-5 section-animation-6 section-animation-7 section-animation-8');
        });
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li.animation-st-3', function () {
            $("body").addClass('section-animation-3').removeClass('section-animation-1 section-animation-2 section-animation-4 section-animation-5 section-animation-6 section-animation-7 section-animation-8');
        });
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li.animation-st-4', function () {
            $("body").addClass('section-animation-4').removeClass('section-animation-1 section-animation-2 section-animation-3 section-animation-5 section-animation-6 section-animation-7 section-animation-8');
        });
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li.animation-st-5', function () {
            $("body").addClass('section-animation-5').removeClass('section-animation-1 section-animation-2 section-animation-3 section-animation-4 section-animation-6 section-animation-7 section-animation-8');
        });
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li.animation-st-6', function () {
            $("body").addClass('section-animation-6').removeClass('section-animation-1 section-animation-2 section-animation-3 section-animation-4 section-animation-5 section-animation-7 section-animation-8');
        });
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li.animation-st-7', function () {
            $("body").addClass('section-animation-7').removeClass('section-animation-1 section-animation-2 section-animation-3 section-animation-4 section-animation-5 section-animation-6 section-animation-8');
        });
        $(document).on('click', '.setting-box .setting-box-popup .animation-style ul.layout li.animation-st-8', function () {
            $("body").addClass('section-animation-8').removeClass('section-animation-1 section-animation-2 section-animation-3 section-animation-4 section-animation-5 section-animation-6 section-animation-7');
        });
        // profile button
        $(document).on('click', '.setting-box .setting-box-popup .profile-btn-style ul.layout li', function () {
            $(".setting-box .setting-box-popup .profile-btn-style ul.layout li").removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.setting-box .setting-box-popup .profile-btn-style ul.layout li.profile-btn-st-1', function () {
            $("body").addClass('profile-button-style-1').removeClass('profile-button-style-2 profile-button-style-3 profile-button-style-4');
        });
        $(document).on('click', '.setting-box .setting-box-popup .profile-btn-style ul.layout li.profile-btn-st-2', function () {
            $("body").addClass('profile-button-style-2').removeClass('profile-button-style-1 profile-button-style-3 profile-button-style-4');
        });
        $(document).on('click', '.setting-box .setting-box-popup .profile-btn-style ul.layout li.profile-btn-st-3', function () {
            $("body").addClass('profile-button-style-3').removeClass('profile-button-style-2 profile-button-style-1 profile-button-style-4');
        });
        // Portfolio Design
        $(document).on('click', '.setting-box .setting-box-popup .portfolio-design-for ul.layout li', function () {
            $(".setting-box .setting-box-popup .portfolio-design-for ul.layout li").removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.setting-box .setting-box-popup .portfolio-design-for ul.layout li.pt-dgn-for-designer', function () {
            $("body").addClass('portfolio-designer').removeClass('portfolio-developer');
        });
        $(document).on('click', '.setting-box .setting-box-popup .portfolio-design-for ul.layout li.pt-dgn-for-developer', function () {
            $("body").addClass('portfolio-developer').removeClass('portfolio-designer');
        });



        /*******************************
         **    11- Messenger box      **
         *******************************/
        $(document).on('click', '.messenger-box-cmnt-icon', function () {
            $("body").addClass("messenger-box-show");
        });
        $(document).on('click', '.messenger-box .messenger-box-close', function () {
            $("body").removeClass("messenger-box-show");
        });


        /*************************
         **    12- Tooltip      **
         *************************/
        if ($(".tooltipped").length) {
            $('.tooltipped').tooltip({
                exitDelay: 0,
                enterDelay: 0,
                margin: 0,
                inDuration: 100,
                outDuration: 100
            });
        }


        /****************************
         **    14- CounterUp      **
         ****************************/
        $('.fun-facts-counterup').counterUp({
            delay: 10,
            time: 2000
        });



        /***********************************
         **    15- Semi Progress bar      **
         ***********************************/
        // language
        $(".line-pgb .progress-bar-2").each(function () {
            var $bar = $(this).find(".bar");
            var $val = $(this).find("span");
            var perc = parseInt($val.text(), 10);
            $({ p: 0 }).animate({ p: perc }, {
                duration: 6000,
                easing: "swing",
                step: function (p) {
                    $bar.css({
                        width: p + "%",
                    });
                    $val.text(p | 0);
                }
            });
        });

        $(".progress").each(function () {
            var value = $(this).attr('data-value');
            var left = $(this).find('.progress-left .progress-bar');
            var right = $(this).find('.progress-right .progress-bar');

            if (value > 0) {
                if (value <= 50) {
                    right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                } else {
                    right.css('transform', 'rotate(180deg)')
                    left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                }
            }

        });
        function percentageToDegrees(percentage) {
            return percentage / 100 * 360
        }


        /***************************************
         **    16- Hidden Main Menu Show      **
         ***************************************/
        $(document).on('click', '.menu-box .menu-box-lines', function () {
            $("body").toggleClass('show-main-menu');
        });



    });


})(jQuery);





