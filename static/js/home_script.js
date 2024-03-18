// gif animation
$(document).ready(function () {
    var images = [
        "/images/gif-algoprudence-frames/frame-036.png",
        "/images/gif-algoprudence-frames/frame-035.png",
        "/images/gif-algoprudence-frames/frame-034.png",
        "/images/gif-algoprudence-frames/frame-033.png",
        "/images/gif-algoprudence-frames/frame-032.png",
        "/images/gif-algoprudence-frames/frame-031.png",
        "/images/gif-algoprudence-frames/frame-030.png",
        "/images/gif-algoprudence-frames/frame-029.png",
        "/images/gif-algoprudence-frames/frame-028.png",
        "/images/gif-algoprudence-frames/frame-027.png",
        "/images/gif-algoprudence-frames/frame-026.png",
        "/images/gif-algoprudence-frames/frame-025.png",
        "/images/gif-algoprudence-frames/frame-024.png",
        "/images/gif-algoprudence-frames/frame-023.png",
        "/images/gif-algoprudence-frames/frame-022.png",
        "/images/gif-algoprudence-frames/frame-021.png",
        "/images/gif-algoprudence-frames/frame-020.png",
        "/images/gif-algoprudence-frames/frame-019.png",
        "/images/gif-algoprudence-frames/frame-018.png",
        "/images/gif-algoprudence-frames/frame-017.png",
        "/images/gif-algoprudence-frames/frame-016.png",
        "/images/gif-algoprudence-frames/frame-015.png",
        "/images/gif-algoprudence-frames/frame-014.png",
        "/images/gif-algoprudence-frames/frame-013.png",
        "/images/gif-algoprudence-frames/frame-012.png",
        "/images/gif-algoprudence-frames/frame-011.png",
        "/images/gif-algoprudence-frames/frame-010.png",
        "/images/gif-algoprudence-frames/frame-009.png",
        "/images/gif-algoprudence-frames/frame-008.png",
        "/images/gif-algoprudence-frames/frame-007.png",
        "/images/gif-algoprudence-frames/frame-006.png",
        "/images/gif-algoprudence-frames/frame-005.png",
        "/images/gif-algoprudence-frames/frame-004.png",
        "/images/gif-algoprudence-frames/frame-003.png",
        "/images/gif-algoprudence-frames/frame-002.png",
        "/images/gif-algoprudence-frames/frame-001.png"
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
                $("#img-gif").attr("src", images[obj.curImg]); // set the image source
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
});