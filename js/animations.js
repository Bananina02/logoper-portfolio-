$(document).ready(function(){

    //ЗАГРУЖАЕМ GSAP КОМПОНЕНТЫ
    gsap.registerPlugin(ScrollTrigger,Draggable,TextPlugin,MotionPathPlugin);
    //ЗАГРУЖАЕМ GSAP КОМПОНЕНТЫ

    //ПОДГОТАВЛИВАЕМ ЭЛЕМЕНТЫ ДЛЯ АНИМАЦИИ, РАЗДЕЛЯЕМ НА СЛОВА И БУКВЫ ОТДЕЛЬНО
    let typeSplit = new SplitType("[text-split]", {
        types: "words, chars",
        tagName: "span"
    });
    //ПОДГОТАВЛИВАЕМ ЭЛЕМЕНТЫ ДЛЯ АНИМАЦИИ, РАЗДЕЛЯЕМ НА СЛОВА И БУКВЫ ОТДЕЛЬНО

    //ФУНКЦИЯ АНИМАЦИИ БУКВ
    function createScrollTrigger(triggerElement, timeline) {
        //СБРОСИТЬ ТАЙМЛАЙН ПРИ ПРОКРУТКЕ ВНЕ ПОЛЯ ЗРЕНИЯ, ЗА НИЖНЮЮ ЧАСТЬ ЭКРАНА
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            /*
            onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
            }
            */
        });
        //ВОСПРОИЗВЕДЕНИЕ ТАЙМЛАЙНА ПРИ ПРОКРУТКЕ В ПОЛЕ ЗРЕНИЯ (94% от верхнего края экрана)
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 94%",
            onEnter: () => timeline.play()
        });
    }
    //ФУНКЦИЯ АНИМАЦИИ БУКВ

    //АНИМАЦИЯ ВСПЛЫВАЮЩИЕ СЛОВА
    $("[words-slide-up]").each(function (index) {
        let tl = gsap.timeline({
            paused: true
        });
        tl.from($(this).find(".word"), {
            opacity: 0,
            yPercent: 100,
            duration: 0.4,
            ease: "power2.out",
            stagger: {
                amount: 0.4
            }
        });
        createScrollTrigger($(this), tl);
    });
    //АНИМАЦИЯ ВСПЛЫВАЮЩИЕ СЛОВА

    //АНИМАЦИЯ ВСПЛЫВАЮЩИЕ БУКВЫ
    $("[letters-slide-up]").each(function (index) {
        let tl = gsap.timeline({
            paused: true
        });
        tl.from($(this).find(".char"), {
            opacity: 0,
            yPercent: 100,
            duration: 0.75,
            ease: "power2.out",
            stagger: {
                amount: 0.3
            }
        });
        createScrollTrigger($(this), tl);
    });
    //АНИМАЦИЯ ВСПЛЫВАЮЩИЕ БУКВЫ

    //АНИМАЦИЯ ВСПЛЫВАЮЩИЙ БЛОК
    $("[custome-element-slide-up]").each(function (index) {
        let tl = gsap.timeline({
            paused: true
        });

        tl.from($(this), {
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            ease: "power2.out",
            stagger: {
                amount: 0.4
            }
        });

        tl.to($(this), {
            opacity: 1,
            yPercent: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: {
                amount: 0.4
            }
        });

        createScrollTrigger($(this), tl);
    });
    //АНИМАЦИЯ ВСПЛЫВАЮЩИЙ БЛОК

    //АНИМАЦИЯ ПОЯВЛЕНИЯ КАРТИНОК
    $(".animation-slide-fade").each(function (index) {

        let tl = gsap.timeline({
            paused: true
        });
        tl.to($(this), {
            //opacity: 0,
            //width: 100,
            duration: 1.8,
            ease: "power2.out",
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            stagger: {
                amount: 0.4
            }
        });

        createScrollTrigger($(this), tl);

    });

    /*
    gsap.to('.animation-slide-fade', {
        duration: 3,
        clipPath: 'circle(100%)'
    })
    */
    //АНИМАЦИЯ ПОЯВЛЕНИЯ КАРТИНОК

    //ЛИНИИ В УСЛУГАХ
    $(".service-list-main-line").each(function (index) {

        let tl = gsap.timeline({
            paused: true
        });
        tl.from($(this), {
            opacity: 0,
            width: 100,
            duration: 1.8,
            ease: "power2.out",
            stagger: {
                amount: 0.4
            }
        });

        createScrollTrigger($(this), tl);

    });
    //ЛИНИИ В УСЛУГАХ

    //ЭЛЕМЕНТЫ В ГАЛЕРЕИ
    /*
    $(".gallery-slider-inner .gallery-img").each(function (index) {

        let tl = gsap.timeline({
            paused: true
        });
        tl.from($(this), {
            opacity: 0,
            width: 100,
            duration: 2.5,
            //ease: "back.out(1.7)",
            ease: "ease",
            stagger: {
                amount: 0.4
            }
        });

        createScrollTrigger($(this), tl);

    });
    */
    //ЭЛЕМЕНТЫ В ГАЛЕРЕИ

    //СЛАЙДЕР ТРЕНЕРОВ
    /*
    $(".team-slider .team-item a").each(function (index) {

        let tl = gsap.timeline({
            paused: true
        });
        tl.from($(this), {
            opacity: 0,
            width: 100,
            duration: 2.5,
            ease: "power1.out",
            stagger: {
                amount: 0.4
            }
        });

        createScrollTrigger($(this), tl);

    });
    */
    //СЛАЙДЕР ТРЕНЕРОВ

    //СЛАЙДЕР БЕГУЩЕЙ СТРОКИ
    $(".progress-list").each(function (index) {

        if( window.innerWidth >= 768 ) {

            gsap.from($(this), {
                scrollTrigger: {
                    trigger: $(this),
                    start: 'top 90%',
                    end: 'bottom 10%',
                    //markers:true,
                    scrub: 1,
                },
                x: '50%',
                /*duration: 3.5,*/
                /*ease: "power2.in",*/
            });
            gsap.to($(this), {
                scrollTrigger: {
                    trigger: $(this),
                    start: 'top 90%',
                    end: 'bottom 10%',
                    //markers:true,
                    scrub: 1,
                },
                x: '-50%',
                /*duration: 3.5,*/
                /*ease: "power2.in",*/
            });

        } else {

            $(".progress-list").each(function (index) {

                $(this).marquee({
                    duration: 7000,
                    startVisible: true,
                    duplicated: true,
                    /*direction: 'right'*/
                });

            });

        }

    });
    //СЛАЙДЕР БЕГУЩЕЙ СТРОКИ

    //ПАРАЛАКС ВСЕХ КАРТИНОК В СЛАЙДЕРЕ
    $(".cf1").each(function (index) {

        gsap.to($(this), {
            scrollTrigger: {
                trigger: $(this),
                start: '0% 80%',
                end: '100% 20%',
                //markers:true,
                scrub: 0.1,
            },
            y: '0%',
            /*duration: 3.5,*/
            /*ease: "power2.in",*/
        });

    });
    //ПАРАЛАКС ВСЕХ КАРТИНОК В СЛАЙДЕРЕ

    //ПАРАЛАКС фУТЕРА

    /*
    $(".footer").each(function (index) {

        gsap.to($(this), {
            scrollTrigger: {
                trigger: $(".footer-animation-top"),
                start: 'bottom 100%',
                endTrigger: $(".content"),
                end: 'bottom 100%',
                markers:true,
                scrub: 0,
            },
            y: "0",
            //marginTop: '-100%',
            //duration: 3.5,
            ease: "none",
        });

    });
    */

    //ПАРАЛАКС фУТЕРА


    /*
    //ПРОКРУТКА ТЕКСТА ЗАВИСИМАЯ ОТ ПОЗИЦИИ СКРОЛЛА
    gsap.to(".progress-list", {
        scrollTrigger: {
            trigger: '.section-team',
            start: 'top top',
            end: 'bottom top',
            //markers:true,
            scrub: 1,
        },
        x: '0%',
        //duration: 3.5,
        //ease: "power2.in",
    });
    //ПРОКРУТКА ТЕКСТА ЗАВИСИМАЯ ОТ ПОЗИЦИИ СКРОЛЛА

    //ПРОКРУТКА ТЕКСТА ЗАВИСИМАЯ ОТ ПОЗИЦИИ СКРОЛЛА
    gsap.to(".progress-list.service-list-page-mod", {
        scrollTrigger: {
            trigger: '.section-about',
            start: 'top top',
            end: 'bottom top',
            //дmarkers:true,
            scrub: 1,
        },
        x: '0%',
        //duration: 3.5,
        //ease: "power2.in",
    });
    //ПРОКРУТКА ТЕКСТА ЗАВИСИМАЯ ОТ ПОЗИЦИИ СКРОЛЛА

    //ПРОКРУТКА ТЕКСТА ЗАВИСИМАЯ ОТ ПОЗИЦИИ СКРОЛЛА
    gsap.to(".progress-list.detail-service-list-page-mod", {
        scrollTrigger: {
            trigger: '.progress-list',
            start: 'top 90%',
            end: 'bottom 10%',
            markers:true,
            scrub: 3,
        },
        x: '0%',
        //duration: 3.5,
        //ease: "power2.in",
    });
    //ПРОКРУТКА ТЕКСТА ЗАВИСИМАЯ ОТ ПОЗИЦИИ СКРОЛЛА
    */

    //ИЗБЕГАЕМ МЕРЦАЮЩЕГО ЭФФЕКТА
    gsap.set("[text-split]", { opacity: 1 });
    gsap.set("[custome-element-slide-up]", { opacity: 0 });
    //ИЗБЕГАЕМ МЕРЦАЮЩЕГО ЭФФЕКТА









    const mainEkranVideo = document.querySelector('.section-main-ekran-video');
    const mainEkranContent = document.querySelector('.section-main-ekran-content');
    const mainPageMissia = document.querySelector('.section-main-missia-animate-top');


    // Create parallax effect with ScrollTrigger
    gsap.to(mainPageMissia, {
        scrollTrigger: {
            trigger: '.section-main-ekran',
            start: '20% top',
            end: 'bottom 25%',
            //markers:true,
            scrub: 0.1,
        },
        y: '-100px',
        /*duration: 3.5,*/
        /*ease: "power2.in",*/
    });

    gsap.to(mainEkranContent, {
        scrollTrigger: {
            trigger: '.section-main-ekran',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.1,
        },
        y: '15%'
    });

    gsap.to(mainEkranVideo, {
        scrollTrigger: {
            trigger: '.section-main-ekran',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.1,
        },
        y: '50%'
    });



    /*
    gsap.to(".animate", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".animation",
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });

    const scrollDownBtn = document.querySelector('.scroll-down a');

    scrollDownBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector('#main');

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
*/

    initMarqueeScroll();

});

function initMarqueeScroll() {

    // Scrolling Letters Both Direction
    // https://codepen.io/GreenSock/pen/rNjvgjo
    // Fixed example with resizing
    // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

    if (document.fonts) {
        document.fonts.load("bold 16px 'TT Firs Neue'", "b").then(function() {

            $('.marquee-group').each(function(index) {

                var marqueeGroup = $(this);

                var marqueeItemsCount = marqueeGroup.find(".marquee-content").length;
                var marqueeItemsWidth = marqueeGroup.find(".marquee-content").width();
                var marqueeSpeed = marqueeGroup.find("[data-marquee-speed]").attr('data-marquee-speed') * (marqueeItemsWidth / $(window).width());

                if ($(window).width() <= 600) {
                    marqueeSpeed = marqueeSpeed * 0.5;
                }

                let direction = 1;
                // 1 = forward, -1 = backward scroll

                const marqueeLeft = roll(marqueeGroup.find("[data-marquee-direction='right'] .marquee-content"), {
                    duration: marqueeSpeed
                })
                    , marqueeRight = roll(marqueeGroup.find("[data-marquee-direction='left'] .marquee-content"), {
                    duration: marqueeSpeed
                }, true)
                    , scroll = ScrollTrigger.create({
                    trigger: document.querySelector('[data-scroll-container]'),
                    onUpdate(self) {
                        if (self.direction !== direction) {
                            direction *= -1;
                            gsap.to([marqueeLeft, marqueeRight], {
                                timeScale: direction,
                                overwrite: true
                            });
                        }
                        self.direction === -1 ? marqueeGroup.find("[data-marquee-status]").attr('data-marquee-status', 'normal') : marqueeGroup.find("[data-marquee-status]").attr('data-marquee-status', 'inverted');
                    }
                });

                // helper function that clones the targets
                function roll(targets, vars, reverse) {
                    vars = vars || {};
                    vars.ease || (vars.ease = "none");
                    const tl = gsap.timeline({
                        repeat: -1,
                        onReverseComplete() {
                            this.totalTime(this.rawTime() + this.duration() * 10);
                        }
                    })
                        , elements = gsap.utils.toArray(targets)
                        , clones = elements.map(el=>{
                            let clone = el.cloneNode(true);
                            el.parentNode.appendChild(clone);
                            return clone;
                        }
                    ),
                    positionClones = ()=>elements.forEach((el,i)=>gsap.set(clones[i], {
                        position: "absolute",
                        overwrite: false,
                        top: el.offsetTop,
                        left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
                    }));
                    positionClones();
                    elements.forEach((el,i)=>tl.to([el, clones[i]], {
                        xPercent: reverse ? 100 : -100,
                        ...vars
                    }, 0));
                    window.addEventListener("resize", ()=>{
                            let time = tl.totalTime();
                            tl.totalTime(0);
                            positionClones();
                            tl.totalTime(time);
                        }
                    );
                    return tl;
                }

            });

        });
    }

}
