// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
        }
    }

    lastScrollTop = st;
}

// Why we exist AI Act/DSA/GDPR etc.
$(document).on("click", ".menu2 div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {

        // add active class
        $(".menu2 div").removeClass("active");
        $(".gc ul li").removeClass("active");

        // change number index
        $(this).addClass("active");
        $(".gc ul").find("li:eq(" + numberIndex + ")").addClass("active");

        // scroll to top of overflow:auto div
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
});

// Why we exist (mobile) AI Act/DSA/GDPR etc.
$(document).on("click", ".menu3 div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active2")) {

        // add active class
        $(".menu3 div").removeClass("active2");
        $(".gc2 ul li").removeClass("active2");

        // change number index
        $(this).addClass("active2");
        $(".gc2 ul").find("li:eq(" + numberIndex + ")").addClass("active2");

        // scroll to top of overflow:auto div
        $('.gc2').scrollTop(0);
    }
});

// gif animation
$(document).ready(function () {
    var images = [
        "/images/algoprudence-frames/frame-036.png",
        "/images/algoprudence-frames/frame-035.png",
        "/images/algoprudence-frames/frame-034.png",
        "/images/algoprudence-frames/frame-033.png",
        "/images/algoprudence-frames/frame-032.png",
        "/images/algoprudence-frames/frame-031.png",
        "/images/algoprudence-frames/frame-030.png",
        "/images/algoprudence-frames/frame-029.png",
        "/images/algoprudence-frames/frame-028.png",
        "/images/algoprudence-frames/frame-027.png",
        "/images/algoprudence-frames/frame-026.png",
        "/images/algoprudence-frames/frame-025.png",
        "/images/algoprudence-frames/frame-024.png",
        "/images/algoprudence-frames/frame-023.png",
        "/images/algoprudence-frames/frame-022.png",
        "/images/algoprudence-frames/frame-021.png",
        "/images/algoprudence-frames/frame-020.png",
        "/images/algoprudence-frames/frame-019.png",
        "/images/algoprudence-frames/frame-018.png",
        "/images/algoprudence-frames/frame-017.png",
        "/images/algoprudence-frames/frame-016.png",
        "/images/algoprudence-frames/frame-015.png",
        "/images/algoprudence-frames/frame-014.png",
        "/images/algoprudence-frames/frame-013.png",
        "/images/algoprudence-frames/frame-012.png",
        "/images/algoprudence-frames/frame-011.png",
        "/images/algoprudence-frames/frame-010.png",
        "/images/algoprudence-frames/frame-009.png",
        "/images/algoprudence-frames/frame-008.png",
        "/images/algoprudence-frames/frame-007.png",
        "/images/algoprudence-frames/frame-006.png",
        "/images/algoprudence-frames/frame-005.png",
        "/images/algoprudence-frames/frame-004.png",
        "/images/algoprudence-frames/frame-003.png",
        "/images/algoprudence-frames/frame-002.png",
        "/images/algoprudence-frames/frame-001.png"
    ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = { curImg: 0 };

    // create tween
    var tween = TweenMax.to(obj, 0.5,
        {
            curImg: images.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",		// only integers so it can be used as an array index
            repeat: 0,					// repeat n times
            immediateRender: false,	// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
                $("#myimg").attr("src", images[obj.curImg]); // set the image source
            }
        }
    );

    // init controller
    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: ".pinDiv2", duration: 500 })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller);
        console.log(obj)
});

$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
});