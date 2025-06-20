docReady(function () {
  const setActiveSideNavigation = function () {
    // Highlight the active link in the quick navigation depending on the scroll position
    var quickLinks = $(".quicklinks-mobile-sticky-top ul li a");
    var sections = quickLinks.map(function () {
      return $(this).attr("href");
    });
    var sectionOffsets = sections.map(function (_, section) {
      const sectionElement = $(section);
      if (sectionElement.length === 0) {
        return -1;
      }
      return sectionElement.offset().top - 250; // Adjust offset as needed
    });
    let highestActiveIndex = -1;
    var scrollPos = $(this).scrollTop();
    quickLinks.each(function () {
      $(this).removeClass("highlight-lightred-sm");
    });
    sectionOffsets.each(function (index) {
      if (this > 0 && scrollPos >= this) {
        highestActiveIndex = index;
      }
    });
    if (highestActiveIndex >= 0) {
      quickLinks.eq(highestActiveIndex).addClass("highlight-lightred-sm");
    }
  };
  $(window).on("scroll", setActiveSideNavigation);
  setActiveSideNavigation();
});
