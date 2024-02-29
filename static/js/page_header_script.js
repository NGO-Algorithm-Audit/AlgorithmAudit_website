// dynamic divider block scrolling
$(document).ready(function () {
    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween1 = TweenMax.to("#box1", 0.5, { height: "100px" });
    var tween2 = TweenMax.to("#box2", 0.5, { height: "150px" });
    var tween3 = TweenMax.to("#box3", 0.5, { height: "75px" });
    var tween4 = TweenMax.to("#box4", 0.5, { height: "150px" });
    var tween5 = TweenMax.to("#box5", 0.5, { height: "75px" });
    var tween6 = TweenMax.to("#box6", 0.5, { height: "100px" });

    // build scene
    var scene1 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween1)
        // .addIndicators()
        .addTo(controller);
    var scene2 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween2)
        .addTo(controller);
    var scene3 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween3)
        .addTo(controller);
    var scene4 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween4)
        .addTo(controller);
    var scene5 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween5)
        .addTo(controller);
    var scene6 = new ScrollMagic.Scene({ triggerElement: ".pinDiv1", duration: 300 })
        .setTween(tween6)
        .addTo(controller);
});