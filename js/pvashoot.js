
function placeDotsOnMap(){

    if(!$(".section-main-objects .main-objects-mapsdots").hasClass("activate")){

        $(".section-main-objects .main-objects-mapsdots").addClass("activate");

        var elementsList = $(".main-objects-mapsdots-item");

        $(elementsList).each(function(index, number) {

            var elementItem = $(this);

            setTimeout(function(){
                elementItem.addClass("active");
            }, index * 300);

        });

    }

}

function placeDotsOnMaps_logicon(){

    if(!$(".section-terminal-map-country").hasClass("activate")){

        $(".section-terminal-map-country").addClass("activate");

        var elementsList = $(".logicon-map-point");

        $(elementsList).each(function(index, number) {

            var elementItem = $(this);
            var className = $(this).data("point");

            setTimeout(function(){
                $(".animate-element-on-map."+className).attr("class", "animate-element-on-map "+className+" active");
                elementItem.addClass("active");
            }, index * 300);

        });

    }
}

function placeDotsOnMaps_terminals(){

    if(!$(".animation-ternimalnaya-set").hasClass("activate")){

        $(".animation-ternimalnaya-set").addClass("activate");

        var elementsList = $(".animation-ternimalnaya-set .map-cityes-item.hidden");

        $(elementsList).each(function(index, number) {

            var elementItem = $(this);

            setTimeout(function(){
                elementItem.removeClass("hidden");
            }, index * 300);

        });

    }
}

$(document).ready(function() {
		
	$("input.phoneNumber").mask("+7 (999)-999-99-99");
	$(".fancybox").fancybox();
    $(".selectric").selectric();


    //КЛИК ПО ЯЗЫКАМ В ШАПКЕ
    $("body").on("click", ".header-lang-menu .current-lang-item", function(){

        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }

    });
    //КЛИК ПО ЯЗЫКАМ В ШАПКЕ

    //КАСТОМНЫЙ СКОРОЛЛ БАР
    $(".section-terminal-map-country").mCustomScrollbar({
        autoHideScrollbar: true,
        axis:"x",
    });
    //КАСТОМНЫЙ СКОРОЛЛ БАР

    //ОТКРЫТИЕ МОБИЛЬНОГО МЕНЮ
    $("body").on("click", ".header-mobile-menu a", function(){

        if($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".mobile-menu").removeClass("visible");
        }else{
            $(this).addClass("active");
            $(".mobile-menu").addClass("visible");
        }

        return false;
    });
    //ОТКРЫТИЕ МОБИЛЬНОГО МЕНЮ

    //ОПЕРИРОВАНИЕ МОБИЛЬНЫМ МЕНЮ
    $("body").on("click", ".mobile-menu .has-parent-menu", function(){

        var itemstepmenu = $(this).data("itemstepmenu");
        var itemparentstepmenu = $(this).data("itemparentstepmenu");
        var currentmenu = $(this).data("currentmenu");
        var elementsList = $(".mobile-menu-list-item-child.itemstepparent-"+itemparentstepmenu).find("li");

        var prevStepsList = $(this).closest("ul").find("li");
        var prevStepsTimeout = ($(prevStepsList).length * 100) + 300;

        $(prevStepsList).each(function(index, number) {

            var elementItem = $(this);

            setTimeout(function(){
                elementItem.removeClass("visible").addClass("invisible");
            }, index * 100);

        });

        setTimeout(function(){

            $(".mobile-menu-container").attr("class", "mobile-menu-container current-label-"+itemstepmenu);
            $(".mobile-menu-list-item-child.itemstepparent-"+itemparentstepmenu).addClass("active");

            $(elementsList).each(function(index, number) {

                var elementItem = $(this);

                setTimeout(function(){
                    elementItem.addClass("visible");
                }, index * 100);

            });

        }, prevStepsTimeout);

        return false;
    });
    $("body").on("click", ".mobile-menu .back-link-mobile", function(){

        var itemstepmenu = $(this).data("itemstepmenu");
        var itemparentstepmenu = $(this).data("itemparentstepmenu");
        var itemparentstepmenuback = $(this).data("backmenu");
        if(itemparentstepmenuback == "main"){
            var elementsList = $(".mobile-menu-list-item.label-items-1").find("li");
        }else{
            var elementsList = $(".mobile-menu-list-item-child.itemstepparent-"+itemparentstepmenuback).find("li");
        }
        var timeout = ($(elementsList).length * 100) + 300;

        var prevStepsList = $(this).closest("ul").find("li");
        var prevStepsTimeout = ($(prevStepsList).length * 100) + 300;

        $(prevStepsList).each(function(index, number) {

            var elementItem = $(this);

            setTimeout(function(){
                elementItem.removeClass("visible");
            }, index * 100);

        });

        setTimeout(function(){

            $(".mobile-menu-container").attr("class", "mobile-menu-container current-label-"+itemstepmenu);
            $(".mobile-menu-list-item-child.itemstepparent-"+itemparentstepmenu).removeClass("active");

            $(elementsList).each(function(index, number) {

                var elementItem = $(this);

                setTimeout(function(){
                    elementItem.removeClass("invisible").addClass("visible");
                }, index * 100);

            });

        }, prevStepsTimeout);

        return false;
    });
    //ОПЕРИРОВАНИЕ МОБИЛЬНЫМ МЕНЮ

    //ОТКРЫТИЕ ОКНА ПОИСКА
    $("body").on("click", ".header-search a", function(){

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".hidden-search-form").removeClass("active");
            $("body").removeClass("searchopen");
        }else{
            $(this).addClass("active");
            $(".hidden-search-form").addClass("active");
            $("body").addClass("searchopen");
        }

        return false;
    });
    //ОТКРЫТИЕ ОКНА ПОИСКА

    //ЗАКРЫТИЕ ОКНА КУКОВ
    $("body").on("click", ".cookies-line-btn a", function(){

        $(".cookies-line").addClass("hide");

        return false;

    });
    //ЗАКРЫТИЕ ОКНА КУКОВ

    //КАСТОМНЫЙ СКРОЛЛБАР
    $(".route-map-filter-bottom").mCustomScrollbar({
        /*theme:"dark"*/
    });
    //КАСТОМНЫЙ СКРОЛЛБАР

    //ПЛАВНЫЙ СКРОЛЛИНГ САЙТА
    //var Scrollbar = window.Scrollbar;
    //Scrollbar.init(document.querySelector('#main-scrollbar'));
    //ПЛАВНЫЙ СКРОЛЛИНГ САЙТА

    //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ
    if($(".section-main-objects").length > 0){
        var currentScroll = $(window).scrollTop();
        var topBlock = $(".section-main-objects").offset().top;
        var heightBlock = $(".section-main-objects").innerHeight();

        if(currentScroll >= (topBlock-heightBlock/2)) {
            placeDotsOnMap();
        }
    }
    //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ

    //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ ЛОГИКОНА
    if($(".logicon-map-point").length > 0){
        var currentScroll = $(window).scrollTop();
        var topBlock = $(".section-terminal-set").offset().top;
        var heightBlock = $(".section-terminal-set").innerHeight();

        if(currentScroll >= (topBlock-heightBlock/2)) {
            placeDotsOnMaps_logicon();
        }
    }
    //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ ЛОГИКОНА

    //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ ТЕРМИНАЛЬНОЙ СЕТИ
    if($(".animation-ternimalnaya-set").length > 0){
        var currentScroll = $(window).scrollTop();
        var topBlock = $(".animation-ternimalnaya-set").offset().top;
        var heightBlock = $(".animation-ternimalnaya-set").innerHeight();

        if(currentScroll >= (topBlock-heightBlock/2)) {
            placeDotsOnMaps_terminals();
        }
    }
    //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ ТЕРМИНАЛЬНОЙ СЕТИ

    //СКОЛЬЗЯЩЯЯ ШАПКА САЙТА
    $(function() {

        let header = $('.header');

        $(window).scroll(function() {

            if($(this).scrollTop() > 0) {
                header.addClass('header_fixed');
            } else {
                header.removeClass('header_fixed');
            }

            //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ
            if($(".section-main-objects").length > 0){
                var currentScroll = $(this).scrollTop();
                var topBlock = $(".section-main-objects").offset().top;
                var heightBlock = $(".section-main-objects").innerHeight();

                if(currentScroll >= (topBlock-heightBlock/2)) {
                    placeDotsOnMap();
                }
            }
            //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ

            //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ ЛОГИКОНА
            if($(".logicon-map-point").length > 0){
                var currentScroll = $(this).scrollTop();
                var topBlock = $(".section-terminal-set").offset().top;
                var heightBlock = $(".section-terminal-set").innerHeight();

                if(currentScroll >= (topBlock-heightBlock/2)) {
                    placeDotsOnMaps_logicon();
                }
            }
            //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ ЛОГИКОНА

            //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ ТЕРМИНАЛЬНОЙ СЕТИ
            if($(".animation-ternimalnaya-set").length > 0){
                var currentScroll = $(this).scrollTop();
                var topBlock = $(".animation-ternimalnaya-set").offset().top;
                var heightBlock = $(".animation-ternimalnaya-set").innerHeight();

                if(currentScroll >= (topBlock-heightBlock/2)) {
                    placeDotsOnMaps_terminals();
                }
            }
            //ПОДКИДЫВАЕМ ТОЧКИ НА КАРТЕ ТЕРМИНАЛЬНОЙ СЕТИ

        });
    });
    //СКОЛЬЗЯЩЯЯ ШАПКА САЙТА

    //ПОКАЗАТЬ ШАПКУ ПРИ ОБРАТНОМ СКРОЛЛЕ
    $("html").on('mousewheel', 'body', function(e){

        //Узнаем куда крится колесико
        if (e.originalEvent.wheelDelta / 120 > 0) {

            //scroll up
            $(".header").removeClass("hide");

        } else {

            //scroll down
            if($(document).scrollTop() > 140) {
                $(".header").addClass("hide");
            }

        }

    });
    //ПОКАЗАТЬ ШАПКУ ПРИ ОБРАТНОМ СКРОЛЛЕ

    //НАВЕДЕНИЕ НА ПУНКТЫ МЕНЮ
    $("body").on("mouseenter", ".child-menu-item.step-label-2 a", function(){

        if($(this).hasClass("child-parent")) {
            $(".child-menu-item.step-label-2 .child-parent").removeClass("active");
            $(this).addClass("active");

            $(".child-menu-item.step-label-3 .child-menu-item-list").removeClass("active");
            $(".child-menu-item.step-label-3 .child-menu-item-list.item-child-" + $(this).data("childitem")).addClass("active");

            $(".child-menu-container-picture-item").removeClass("active");
            $(".child-menu-container-picture-item.item-child-" + $(this).data("childitem")).addClass("active");
        }else{
            $(".child-menu-item.step-label-2 .child-parent").removeClass("active");
            $(".child-menu-item.step-label-3 .child-menu-item-list").removeClass("active");
            $(".child-menu-container-picture-item").removeClass("active");
            $(".child-menu-container-picture-item.item-child-" + $(this).data("childitem")).addClass("active");
        }

    });

    $("body").on("mouseenter", ".child-menu-item.step-label-1 a", function(){

        if($(this).hasClass("child-parent")) {
            $(".child-parent").removeClass("active");
            $(this).addClass("active");

            $(".child-menu-item-list").removeClass("active");
            $(".child-menu-item.step-label-2 .child-menu-item-list.item-child-" + $(this).data("childitem")).addClass("active");

            $(".child-menu-container-picture-item").removeClass("active");
            $(".child-menu-container-picture-item.item-child-" + $(this).data("childitem")).addClass("active");
        }else{
            $(".child-parent").removeClass("active");
            $(".child-menu-item-list").removeClass("active");
            $(".child-menu-container-picture-item").removeClass("active");
            $(".child-menu-container-picture-item.item-child-" + $(this).data("childitem")).addClass("active");
        }

    });
    //НАВЕДЕНИЕ НА ПУНКТЫ МЕНЮ

    //ГАЛЛЕРЕЯ ТЛЦ
    if($("[tlc-slider]").length > 0) {
        $("[tlc-slider]").each((function () {

            let e = $(this).closest(".section-block-container").find('.section-slider-btns .btns-left')[0],
                t = $(this).closest(".section-block-container").find('.section-slider-btns .btns-right')[0];

            new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                centeredSlides: !1,
                followFinger: !0,
                slideToClickedSlide: !1,
                grabCursor: !0,
                a11y: !1,
                allowTouchMove: !0,
                spaceBetween: 24,
                rewind: !1,
                parallax: !1,
                slidesPerView: 4,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                mousewheel: {
                    forceToAxis: !0
                },
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !0
                },

                loop: true,
                //loopAddBlankSlides: true,
                loopAdditionalSlides: 4,
                //loopPreventsSliding: true,


                breakpoints: {
                    320: {
                        spaceBetween: 8,
                        slidesPerView: 1,
                        initialSlide: 1
                    },
                    768: {
                        spaceBetween: 32,
                        slidesPerView: 2,
                        initialSlide: 1
                    },
                    1024: {
                        spaceBetween: 8,
                        slidesPerView: 3,
                        initialSlide: 1
                    },
                    1280: {
                        spaceBetween: 8,
                        slidesPerView: 3,
                        initialSlide: 1
                    }
                }


            })

        }));
    }
    //ГАЛЛЕРЕЯ ТЛЦ

    //ГАЛЛЕРЕЯ ТЛЦ
    if($("[history-numbers-slider]").length > 0) {
        $("[history-numbers-slider]").each((function () {

            let e = $(this).closest(".history-content").find('.section-slider-btns .btns-left')[0],
                t = $(this).closest(".history-content").find('.section-slider-btns .btns-right')[0];

            var historyThumbs = new Swiper($(this).find(".history-numbers-slider-container.swiper")[0], {
                speed: 800,
                centeredSlides: !1,
                followFinger: !0,
                slideToClickedSlide: !0,
                grabCursor: !0,
                a11y: !1,
                allowTouchMove: !0,
                spaceBetween: 24,
                rewind: !1,
                parallax: !1,
                slidesPerView: 1,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                mousewheel: {
                    forceToAxis: !0
                },
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !0
                },

                loop: false,
                //loopAddBlankSlides: true,
                loopAdditionalSlides: 4,
                //loopPreventsSliding: true,


                breakpoints: {
                    320: {
                        spaceBetween: 65,
                        slidesPerView: 2,
                        initialSlide: 1
                    },
                    768: {
                        spaceBetween: 8,
                        slidesPerView: 2,
                        initialSlide: 1
                    },
                    1024: {
                        spaceBetween: 8,
                        slidesPerView: 3,
                        initialSlide: 1
                    },
                    1280: {
                        spaceBetween: 8,
                        slidesPerView: 1,
                        initialSlide: 2
                    }
                }


            });

            var historySlider = new Swiper($(".history-content-slider-container.swiper")[0], {

                speed: 800,
                parallax: true,
                spaceBetween: 24,

                /*
                speed: 800,
                centeredSlides: !1,
                followFinger: !0,
                slideToClickedSlide: !0,
                grabCursor: !0,
                a11y: !1,
                parallax: true,
                allowTouchMove: !0,
                spaceBetween: 36,
                rewind: !1,
                parallax: !1,
                slidesPerView: 1,
                mousewheel: {
                    forceToAxis: !0
                },
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !0
                },

                loop: false,
                //loopAddBlankSlides: true,
                loopAdditionalSlides: 4,
                //loopPreventsSliding: true,

                /*
                breakpoints: {
                    320: {
                        spaceBetween: 8,
                        slidesPerView: 1,
                        initialSlide: 1
                    },
                    768: {
                        spaceBetween: 8,
                        slidesPerView: 3,
                        initialSlide: 1
                    },
                    1024: {
                        spaceBetween: 8,
                        slidesPerView: 3,
                        initialSlide: 1
                    },
                    1280: {
                        spaceBetween: 8,
                        slidesPerView: 4,
                        initialSlide: 1
                    }
                }
                */

            });


            historyThumbs.controller.control = historySlider;
            historySlider.controller.control = historyThumbs;


        }));
    }
    //ГАЛЛЕРЕЯ ТЛЦ

    //ГАЛЛЕРЕЯ СЕРТИФИКАТОВ
    if($("[sertificates-slider]").length > 0) {
        $("[sertificates-slider]").each((function () {

            let e = $(this).find('.section-slider-btns .btns-left')[0],
                t = $(this).find('.section-slider-btns .btns-right')[0];

            new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                centeredSlides: !1,
                followFinger: !0,
                slideToClickedSlide: !1,
                grabCursor: !0,
                a11y: !1,
                allowTouchMove: !0,
                spaceBetween: 32,
                rewind: !1,
                parallax: !1,
                slidesPerView: 2,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                mousewheel: {
                    forceToAxis: !0
                },
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !0
                },

                loop: true,
                //loopAddBlankSlides: true,
                loopAdditionalSlides: 4,
                //loopPreventsSliding: true,


                breakpoints: {
                    320: {
                        spaceBetween: 8,
                        slidesPerView: 1,
                        initialSlide: 1
                    },
                    768: {
                        spaceBetween: 32,
                        slidesPerView: 1,
                        initialSlide: 1
                    },
                    1024: {
                        spaceBetween: 8,
                        slidesPerView: 3,
                        initialSlide: 1
                    },
                    1280: {
                        spaceBetween: 8,
                        slidesPerView: 2,
                        initialSlide: 1
                    }
                }


            })

        }));
    }
    //ГАЛЛЕРЕЯ СЕРТИФИКАТОВ

    //СЛАЙДЕР НА ГЛАВНОЙ СТРАНИЦЕ
    if($("[main-page-slider]").length > 0) {
        $("[main-page-slider]").each((function () {

            let e = $(this).find('.main-page-slider-btn .btn-item-left')[0],
                t = $(this).find('.main-page-slider-btn .btn-item-right')[0],
                nav = $(this).find(".main-page-slider-navigation")[0];


            new Swiper($(this).find(".swiper")[0], {

                speed: 800,
                parallax: true,
                spaceBetween: 0,
                centeredSlides: false,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },


                breakpoints: {
                    320: {
                        spaceBetween: 0,
                        navigation: false,
                        pagination: {
                            el: nav,
                            type: 'bullets',
                        },
                    },
                    768: {
                        spaceBetween: 0,
                        navigation: false,
                        pagination: {
                            el: nav,
                            type: 'bullets',
                        },
                    },
                    1024: {
                        spaceBetween: 0,
                    },
                    1280: {
                        spaceBetween: 0,
                    }
                }

            })

        }));
    }
    //СЛАЙДЕР НА ГЛАВНОЙ СТРАНИЦЕ

    //СЛАЙДЕР УСЛУГ НА ГЛАВНОЙ СТРАНИЦЕ
    if($("[service-block-main-slider]").length > 0){
        if(window.innerWidth < 1280 ) {
            $("[service-block-main-slider]").each((function () {

                let nav = $(this).parent().find(".main-page-service-slider-navigation")[0];

                var swiper = new Swiper($(this).find(".swiper")[0], {

                    speed: 800,
                    parallax: true,
                    spaceBetween: 0,
                    centeredSlides: false,
                    slidesPerView: 2,
                    pagination: {
                        el: nav,
                        type: 'bullets',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        757: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    },

                })

            }));
        }
    }
    //СЛАЙДЕР УСЛУГ НА ГЛАВНОЙ СТРАНИЦЕ

    //СЛАЙДЕР НОВОСТЕЙ НА ГЛАВНОЙ СТРАНИЦЕ
    if($("[news-block-main-slider]").length > 0){
        if(window.innerWidth < 1600 ) {
            $("[news-block-main-slider]").each((function () {

                let nav = $("body").find(".main-page-news-slider-navigation")[0];

                var swiper = new Swiper($(this).find(".swiper")[0], {

                    speed: 800,
                    parallax: true,
                    spaceBetween: 0,
                    centeredSlides: false,
                    slidesPerView: 2,
                    pagination: {
                        el: nav,
                        type: 'bullets',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    },

                });

            }));
        }
    }
    if($("[slider-list-city]").length > 0){
        if(window.innerWidth < 767 ) {
            $("[slider-list-city]").each((function () {

                let nav = $(this).parent().find(".main-page-service-slider-navigation")[0];

                var swiper = new Swiper($(this).find(".swiper")[0], {

                    speed: 800,
                    parallax: true,
                    spaceBetween: 24,
                    centeredSlides: false,
                    slidesPerView: "auto",
                    pagination: {
                        el: nav,
                        type: 'bullets',
                    },
                });

            }));
        }
    }


    if($("[slider-only-mobile]").length > 0){
        if(window.innerWidth < 767 ) {
            $("[slider-only-mobile]").each((function () {

                let nav = $(this).parent().find(".main-page-service-slider-navigation")[0];

                var swiper = new Swiper($(this).find(".swiper")[0], {

                    speed: 800,
                    parallax: true,
                    spaceBetween: 0,
                    centeredSlides: false,
                    slidesPerView: 2,
                    pagination: {
                        el: nav,
                        type: 'bullets',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    },

                });

            }));
        }
    }

    if($("[slider-tablet-initial]").length > 0){
        if(window.innerWidth < 1024 ) {
            $("[slider-tablet-initial]").each((function () {

                let nav = $(this).parent().find(".main-page-service-slider-navigation")[0];

                var swiper = new Swiper($(this).find(".swiper")[0], {

                    speed: 800,
                    parallax: true,
                    spaceBetween: 0,
                    centeredSlides: false,
                    slidesPerView: 2,
                    pagination: {
                        el: nav,
                        type: 'bullets',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        500:{
                          slidesPerView: 2
                        },
                    },

                });

            }));
        }
    }
    //СЛАЙДЕР НОВОСТЕЙ НА ГЛАВНОЙ СТРАНИЦЕ

    //СЛАЙДЕР НОВОСТЕЙ НА ДЕТАЛЬНОЙ СТРАНИЦЕ НОВОСТИ
    if($("[other-news-block-main-slider]").length > 0){
        $("[other-news-block-main-slider]").each((function () {

            let e = $(this).closest(".section-block-container").find('.section-slider-btns .btns-left')[0],
                t = $(this).closest(".section-block-container").find('.section-slider-btns .btns-right')[0];

            let nav = $("body").find(".main-page-news-slider-navigation")[0];

            var swiper = new Swiper($(this).find(".swiper")[0], {

                speed: 800,
                parallax: true,
                spaceBetween: 0,
                centeredSlides: false,
                slidesPerView: 4,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                /*
                pagination: {
                    el: nav,
                    type: 'bullets',
                },
                */

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 4,
                    }
                },


            })

        }));
    }
    //СЛАЙДЕР НОВОСТЕЙ НА ДЕТАЛЬНОЙ СТРАНИЦЕ НОВОСТИ

    //ГАЛЛЕРЕЯ ДОКУМЕНТОВ
    if($("[docs-slider]").length > 0) {
        $("[docs-slider]").each((function () {

            let e = $(this).closest(".section-block-container").find('.section-slider-btns .btns-left')[0],
                t = $(this).closest(".section-block-container").find('.section-slider-btns .btns-right')[0];

            new Swiper($(this).find(".swiper")[0], {
                speed: 800,
                centeredSlides: !1,
                followFinger: !0,
                slideToClickedSlide: !1,
                grabCursor: !0,
                a11y: !1,
                allowTouchMove: !0,
                spaceBetween: 32,
                rewind: !1,
                parallax: !1,
                slidesPerView: 4,
                navigation: {
                    nextEl: t,
                    prevEl: e
                },
                mousewheel: {
                    forceToAxis: !0
                },
                keyboard: {
                    enabled: !0,
                    onlyInViewport: !0
                },

                loop: true,
                //loopAddBlankSlides: true,
                loopAdditionalSlides: 4,
                //loopPreventsSliding: true,


                breakpoints: {
                    320: {
                        spaceBetween: 8,
                        slidesPerView: 1,
                        initialSlide: 1
                    },
                    768: {
                        spaceBetween: 32,
                        slidesPerView: 2,
                        initialSlide: 1
                    },
                    1024: {
                        spaceBetween: 8,
                        slidesPerView: 3,
                        initialSlide: 1
                    },
                    1280: {
                        spaceBetween: 8,
                        slidesPerView: 3,
                        initialSlide: 1
                    }
                }


            })

        }));
    }
    //ГАЛЛЕРЕЯ ДОКУМЕНТОВ


    //СЛУШАТЕЛЬ СОБЫТИЯ КЛИКА ПО РУКОВОДСТВУ

    //ОТКРЫТИЕ ЭЛЕМЕНТА
    $("body").on("click", ".leaders-item a", function(){

        var thisID = $(this).data("thisid");
        var link = $(this).data("link");

        $.get(link, function(data) {
            var elementOnPage = $(data).find(".leaders-detail-item").get(0);
            $(".detail-leader-modal .leaders-detail-item").replaceWith(elementOnPage);
        });

        $("html").removeClass("has-leader-close");
        $("html").addClass("has-leader-open");
        $(".header").removeClass("hide");

        return false;

    });
    //ОТКРЫТИЕ ЭЛЕМЕНТА

    //ЗАКРЫТИЕ ЭЛЕМЕНТА
    $("body").on("click", ".close-leader-modal a, .detail-leader-modal-shadow", function(){

        $("html").removeClass("has-leader-open");
        $("html").addClass("has-leader-close");
        $(".header").addClass("hide");

        return false;
    });
    //ЗАКРЫТИЕ ЭЛЕМЕНТА

    //СЛУШАТЕЛЬ СОБЫТИЯ КЛИКА ПО РУКОВОДСТВУ




















    $("body").on("click", ".openPopUp", function(){

        $.fancybox.open({
            src  : $(this).attr("href"),
            type : 'inline',
            opts : {
                buttons: [],
                baseClass: "custom-fancybox",
            }
        });

        return false;
    });

    $("body").on("click", ".closeFancy", function(){
        $.fancybox.close();
        return false;
    });


    //АККОРДИОН
    $("body").on("click", ".accordion-item-title a", function(){

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).closest(".accordion-item").find(".accordion-item-body").slideUp();
        }else{
            $(this).addClass("active");
            $(this).closest(".accordion-item").find(".accordion-item-body").slideDown();
        }

        return false;
    });
    //АККОРДИОН

    $("body").on("click", ".bid-item-inside", function(){

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).closest(".bid-item-inside").find(".bid-item-body").slideUp();
        }else{
            $(this).addClass("active");
            $(this).closest(".bid-item-inside").find(".bid-item-body").slideDown();
        }

        return false;
    });



    //МОБИЛЬНОЕ МЕНЮ
    $("body").on("click", ".header-btns-mobile a", function(){

        $("html").addClass("has-menu-open");

        return false;

    });

    $("body").on("click", ".opened-menu-btn a", function () {

        $("html").removeClass("has-menu-open");

        return false;
    });
    //МОБИЛЬНОЕ МЕНЮ



    //АККОРДИОН
    $("body").on("click", ".accordion-block-item .accordion-block-item-name a", function(){

        if($(this).closest(".accordion-block-item").hasClass("open")){
            $(this).closest(".accordion-block-item").removeClass("open");
            $(this).closest(".accordion-block-item").find(".accordion-block-item-bottom").slideUp();
        }else{
            $(this).closest(".accordion-block-item").addClass("open");
            $(this).closest(".accordion-block-item").find(".accordion-block-item-bottom").slideDown();
        }

        return false;
    });
    //АККОРДИОН



    //ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ
    $("body").on("click", ".scrollTo", function(){
        $("html, body").animate({
            scrollTop: ($($(this).attr("href")).offset().top-100) + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    //ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ

    //КОНТРОЛЬ ИНПУТОВ
    $("body").on("keyup", ".input-line input", function(){

        if($(this).val().length > 0){
            $(this).addClass("hovered");
            //$(this).closest(".form-container-line").addClass("open-line-input");
        }else{
            $(this).removeClass("hovered");
            //$(this).closest(".form-container-line").removeClass("open-line-input");
        }

    });
    //КОНТРОЛЬ ИНПУТОВ

    // Аккордионы на странице Карьеры
    if ($('.accordion-item-header').length > 0){
        $('.accordion-item-header').click(function() {
            $(this).parent().toggleClass('active');
            $(this).siblings('.accordion-body-content').slideToggle();
        });
    }

    if ($('.main-page-calculator-tabs ul li a').length > 0){
        $('.main-page-calculator-tabs ul li a').click(function(e) {
            e.preventDefault();
            $('.main-page-calculator-tabs ul li a').removeClass('active');
            $(this).addClass('active');

            let item = $(this).data('item');

            $('.tables-schedule-container').hide();
            $('.main-page-calculator-box').hide();
            $('.tables-schedule-container[data-content="' + item + '"]').show();
            $('.main-page-calculator-box[data-content="' + item + '"]').show();
        });
    }

    if($('.swipet-ports-container').length > 0){
        let swiperPorts = new Swiper('.swipet-ports-container', {
            slidesPerView: 5,
            spaceBetween: 32,
            navigation: {
                nextEl: '.section-slider-btns-item.btns-right',
                prevEl: '.section-slider-btns-item.btns-left'
            },
            pagination: {
                el: '.main-page-service-slider-navigation.flag',
                type: 'bullets',
            },
            breakpoints:{
                320:{
                    slidesPerView: 1,
                },
                768:{
                    slidesPerView: 2,
                },
                1024:{
                    slidesPerView: 4,
                },
                1600:{
                    slidesPerView: 5,
                }
            }
        });
    }

});
