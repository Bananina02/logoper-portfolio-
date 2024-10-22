$(document).ready(function() {

    //ЗАГРУЖАЕМ GSAP КОМПОНЕНТЫ
    gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin, MotionPathPlugin);
    //ЗАГРУЖАЕМ GSAP КОМПОНЕНТЫ

    // lets go...

    // lets set how fast the cars are going
    const duration = 5;

    const train = {
        carone: document.querySelector('#train-animation-1'),
        cartwo: document.querySelector('#train-animation-2'),
        carthree: document.querySelector('#green-car'),
        carfour: document.querySelector('#pogruzchik-car'),
        carfive: document.querySelector('#blue-car'),
    }



// lets create a timeline for the cars

    const timeline = new gsap.timeline({repeat: -1});
    const timeline2 = new gsap.timeline({repeat: -1});
    const timeline3 = new gsap.timeline({repeat: -1});

// lets set some initial values on the cars

    //timeline.set(['#red-car', '#blue-car', "#train-animation"], {transformOrigin: '90% 50%', x: '-80', y: '-25'});
    //timeline.set(["#train-animation"], {transformOrigin: '0% 0%', x: '-100%', y: '50%'});

// lets tell the red car to follow the hidden red path
// you can uncomment line 25 in css to see them

    if($('#train-animation-1').length > 0) {
        timeline.to(train.carone, {
            duration: 12,
            delay: 4,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#train-path-1',
                align: "#train-path-1",
                alignOrigin: [0.55, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }

    if($('#train-animation-2').length > 0) {
        timeline.to(train.cartwo, {
            duration: 18,
            delay: 2,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#train-path-2',
                align: "#train-path-2",
                alignOrigin: [0.55, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }

    if($('#service-container-animation-1').length > 0) {
        timeline.to($('#service-container-animation-1'), {
            duration: 16,
            delay: 4,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-path-1',
                align: "#service-container-path-1",
                alignOrigin: [0.4875, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }
    if($('#service-container-animation-2').length > 0) {
        timeline2.to($('#service-container-animation-2'), {
            duration: 12,
            delay: 0,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-path-2',
                align: "#service-container-path-2",
                alignOrigin: [0.4375, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }
    if($('#service-container-animation-3').length > 0) {
        timeline3.to($('#service-container-animation-3'), {
            duration: 24,
            delay: 2,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-path-3',
                align: "#service-container-path-3",
                alignOrigin: [0.55, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }
    if($('#service-container-animation-4').length > 0) {
        timeline.to($('#service-container-animation-4'), {
            duration: 10,
            delay: 0,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-path-4',
                align: "#service-container-path-4",
                alignOrigin: [0.475, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }
    if($('#service-container-animation-5').length > 0) {
        timeline2.to($('#service-container-animation-5'), {
            duration: 16,
            delay: 0,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-path-5',
                align: "#service-container-path-5",
                alignOrigin: [0.6, 0.9],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }
    if($('#service-container-animation-6').length > 0) {
        timeline3.to($('#service-container-animation-6'), {
            duration: 22,
            delay: 0,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-path-6',
                align: "#service-container-path-6",
                alignOrigin: [0.55, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }

    if($('#service-container-animation-7').length > 0) {
        timeline3.to($('#service-container-animation-7'), {
            duration: 22,
            delay: 0,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-path-7',
                align: "#service-container-path-7",
                alignOrigin: [0.55, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }
    if($('#service-container-animation-8').length > 0) {
        timeline2.to($('#service-container-animation-8'), {
            duration: 22,
            delay: 0,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-path-8',
                align: "#service-container-path-8",
                alignOrigin: [0.6, 0.9],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }



    if($('#service-container-import-dv-animation-1').length > 0) {
        timeline.to($('#service-container-import-dv-animation-1'), {
            duration: 12,
            delay: 0,
            transformOrigin: '50% 50%',
            motionPath: {
                path: '#service-container-import-dv-path-1',
                align: "#service-container-import-dv-path-1",
                alignOrigin: [0.4375, 0.5],
                //autoRotate: true,
                start: 0.05,
                end: 1.05,
                //marker: true,
            },
            ease: 'linear'

        }, 0)
    }



    /*
    timeline.to(train.carthree, {
        duration: 18,
        delay: 1,
        transformOrigin: '50% 50%',
        motionPath: {
            path: '#green-car-line',
            align: "#green-car-line",
            alignOrigin: [0.52, 0.5],
            //autoRotate: true,
            start: 0,
            end: 1,
            //marker: true,
        },
        ease: 'linear'

    }, 0)

    timeline.to(train.carfour, {
        duration: 22,
        delay: 5,
        transformOrigin: '50% 50%',
        motionPath: {
            path: '#pogruzchik-car-line',
            align: "#pogruzchik-car-line",
            alignOrigin: [0.3, 0.5],
            //autoRotate: true,
            start: 0,
            end: 1,
            //marker: true,
        },
        ease: 'linear'

    }, 0)

    timeline.to(train.carfive, {
        duration: 16,
        delay: 3,
        transformOrigin: '50% 50%',
        motionPath: {
            path: '#blue-car-line',
            align: "#blue-car-line",
            alignOrigin: [0.52, 0.5],
            //autoRotate: true,
            start: 0,
            end: 1,
            once: true,
            //marker: true,
        },
        ease: 'linear'

    }, 0)
    */

// lets kick the back of blue the car out as it goes around 2 corners

    //timeline.to('#train-animation', {duration: duration * 0.1, opacity: 0}, duration * 0.02)
    //timeline.to('#train-animation', {duration: duration * 0.5, opacity: 1}, duration * 0.51)


    /*

    gsap.to("#pogruzchik", {
        scrollTrigger: {
            trigger: ".main-ekran",
            start: "50% 50%",
            //end: () => "+=" + document.querySelector("#pogruzchik-line").getBoundingClientRect().height,
            end: "100% 50%",
            scrub: 1,
            once: true,
            //markers: true,
        },
        ease: pathEase("#pogruzchik-line"), // a custom ease that helps keep the tractor centered
        immediateRender: true,
        motionPath: {
            path: "#pogruzchik-line",
            align: "#pogruzchik-line",
            alignOrigin: [0.5, 0.5],
            //autoRotate: true,
            start: 0,
            end: 1
        }
    });


    gsap.to("#car-item-one", {
        scrollTrigger: {
            trigger: ".main-ekran",
            start: "50% 20%",
            //end: () => "+=" + document.querySelector("#pogruzchik-line").getBoundingClientRect().height,
            end: "100% 50%",
            scrub: 1,
            //markers: true,
            once: true,
        },
        ease: pathEase("#car-item-one-line"), // a custom ease that helps keep the tractor centered
        immediateRender: true,
        motionPath: {
            path: "#car-item-one-line",
            align: "#car-item-one-line",
            alignOrigin: [0.5, 0.5],
            //autoRotate: true,
            start: 0,
            end: 1
        }
    });


*/







































    /*
    gsap.set("#motionSVG", { scale: 1, autoAlpha: 1 });
    gsap.set("#tractor", {transformOrigin: "50% 50%"});
    let rotateTo = gsap.quickTo("#tractor", "rotation"),
        prevDirection = 0;

    console.log(rotateTo);
    console.log(document.querySelector("#motionPath").getBoundingClientRect().height);

    gsap.to("#motionSVG", {
        scrollTrigger: {
            trigger: ".main-ekran",
            start: "0 0",
            end: () => "+=" + document.querySelector("#motionPath").getBoundingClientRect().height,
            scrub: 0.5,
            markers: true,


            onUpdate: self => {
                if (prevDirection !== self.direction) { // only run this when we're changing direction
                    rotateTo(self.direction === 1 ? 0 : 180);
                    prevDirection = self.direction;
                }
            }

        },
        ease: pathEase("#motionPath"), // a custom ease that helps keep the tractor centered
        immediateRender: true,
        motionPath: {
            path: "#motionPath",
            align: "#motionPath",
            alignOrigin: [1, 0.5],
            autoRotate: true,
            start: 0,
            end: 1
        }
    });

    */

});


function pathEase(path, config={}) {
    let axis = config.axis || "y",
        precision = config.precision || 1,
        rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
        useX = axis === "x",
        start = rawPath[0][useX ? 0 : 1],
        end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)],
        range = end - start,
        l = Math.round(precision * 200),
        inc = 1 / l,
        positions = [0],
        a = [],
        minIndex = 0,
        smooth = [0],
        minChange = (1 / l) * 0.6,
        smoothRange = config.smooth === true ? 7 : Math.round(config.smooth) || 0,
        fullSmoothRange = smoothRange * 2,
        getClosest = p => {
            while (positions[minIndex] <= p && minIndex++ < l) { }
            a.push((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
            smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange) && smooth.push(a.length - smoothRange);
        },
        i = 1;
    for (; i < l; i++) {
        positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
    }
    positions[l] = 1;
    for (i = 0; i < l; i++) {
        getClosest(i / l);
    }
    a.push(1); // must end at 1.
    if (smoothRange) { // smooth at the necessary indexes where a small difference was sensed. Make it a linear change over the course of the fullSmoothRange
        smooth.push(l-fullSmoothRange+1);
        smooth.forEach(i => {
            let start = a[i],
                j = Math.min(i + fullSmoothRange, l),
                inc = (a[j] - start) / (j - i),
                c = 1;
            i++;
            for (; i < j; i++) {
                a[i] = start + inc * c++;
            }
        });
    }
    return p => {
        let i = p * l,
            s = a[i | 0];
        return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
    }
}