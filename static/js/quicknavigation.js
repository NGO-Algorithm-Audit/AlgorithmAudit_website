docReady(function () {
  const setActiveSideNavigation = function () {
    // Highlight the active link in the quick navigation depending on the scroll position
    var quickLinks = $(".quicklinks-mobile-sticky-top ul li a");
    var sections = quickLinks.map(function () {
      return $(this).attr("href");
    });
    var sectionOffsets = sections.map(function (index, section) {
      return $(section).offset().top - 300; // Adjust offset as needed
    });
    let highestActiveIndex = -1;
    var scrollPos = $(this).scrollTop();
    quickLinks.each(function () {
      $(this).removeClass("highlight-red-sm");
    });
    sectionOffsets.each(function (index) {
      if (scrollPos >= this) {
        highestActiveIndex = index;
      }
    });
    if (highestActiveIndex >= 0) {
      quickLinks.eq(highestActiveIndex).addClass("highlight-red-sm");
    }
  };
  $(window).on("scroll", setActiveSideNavigation);
  setActiveSideNavigation();
});
