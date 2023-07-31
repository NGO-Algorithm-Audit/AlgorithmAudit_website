// add EU knowledge platform image
$(document).ready(function(){

  // language variables
  var typewriter_text = "case-based normative advice for ethical algorithms";
  var text_NL = "case-based normatief advies voor ethische algoritmes";

  //get language from url
  var location = window.location.href

  // return whether NL of EN language is detected
  if(location.includes("nl")){
    console.log('NL');

    // Add img1
    $("#img1").append("<img class='img-prop' src='../images/svg-text-illustrations/knowledge_platform1_NL.svg'>")
    $("#img1").append("<img class='img-prop' src='../images/svg-text-illustrations/knowledge_platform2_NL.svg'>")
    $("#img1").append("<img class='img-prop' src='../images/svg-text-illustrations/knowledge_platform3_NL.svg'>")
    
    // Remove img1 after 2 sec and start type writing process
    window.setTimeout(function (){
      $('#img1 img:last-child').remove(); 
      $('#img1 img:last-child').remove();
      $('#img1 img:last-child').remove();
    }, 2000);

    window.setTimeout(function() {
      $("#img2").append("<img class='img-prop' src='../images/svg-text-illustrations/algoprudence1_NL.svg'>")
    }, 2000);

    window.setTimeout(function() {
      $("#img2").append("<img class='img-prop' src='../images/svg-text-illustrations/algoprudence2_NL.svg'>")
    }, 3000);

    setTimeout(function() {
      $("#img2").append("<img class='img-prop' src='../images/svg-text-illustrations/algoprudence3_NL.svg'>")
    }, 4000);
    
  }else{
    console.log('EN');

    // Add img1
    $("#img1").append("<img class='img-prop' src='images/svg-text-illustrations/knowledge_platform1.svg'>")
    $("#img1").append("<img class='img-prop' src='images/svg-text-illustrations/knowledge_platform2.svg'>")
    $("#img1").append("<img class='img-prop' src='images/svg-text-illustrations/knowledge_platform3.svg'>")
    
    // Remove img1 after 2 sec and start type writing process
    window.setTimeout(function (){
      $('#img1 img:last-child').remove(); 
      $('#img1 img:last-child').remove();
      $('#img1 img:last-child').remove();
    }, 2000);

    window.setTimeout(function() {
      $("#img2").append("<img class='img-prop' src='images/svg-text-illustrations/algoprudence1.png'>")
    }, 2000);

    window.setTimeout(function() {
      $("#img2").append("<img class='img-prop' src='images/svg-text-illustrations/algoprudence2.png'>")
    }, 3000);

    setTimeout(function() {
      $("#img2").append("<img class='img-prop' src='images/svg-text-illustrations/algoprudence3.png'>")
    }, 4000);
    }
});

// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
        }
    }
  
    lastScrollTop = st;
}

// Why we exist AI Act/DSA/GDPR etc.
$(document).on("click", ".menu2 div", function() {
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
$(document).on("click", ".menu3 div", function() {
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