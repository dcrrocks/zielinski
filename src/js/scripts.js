jQuery(window).on('load', function(){

  function preload(arrayOfImages) {
      $(arrayOfImages).each(function(){
          $('<img/>')[0].src = this;
          // Alternatively you could use:
          // (new Image()).src = this;
      });
  }

  preload([
    '../assets/img/about.jpg',
    '../assets/img/landing.jpg',
    '../assets/img/works/amazon_2on1.jpg',
    '../assets/img/works/checkout_2on2.jpg',
    '../assets/img/works/converse_2on3.jpg',
    '../assets/img/works/fbprofile_2on1.jpg',
    '../assets/img/works/fuel_1on1.jpg',
    '../assets/img/works/koala_1on1.jpg',
    '../assets/img/works/login_2on2.jpg',
    '../assets/img/works/metro_1on1.jpg',
    '../assets/img/works/nr_1on1.jpg',
    '../assets/img/works/nude_1on3.jpg',
    '../assets/img/works/xp_1on2.jpg'
  ]);

});

(function ($, window, document, undefined) {

  'use strict';

  $(function () {

  }); //Function end

  // scrollTo

  // This part causes smooth scrolling using scrollto.js
  // We target all a tags inside the nav, and apply the scrollto.js to it.

  $("nav ul li a").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash, {
        offset: -100,
      });
  });

  /**
   * This part handles the highlighting functionality.
   * We use the scroll functionality again, some array creation and
   * manipulation, class adding and class removing, and conditional testing
   */
  var aChildren = $("nav li").children(); // find the a children of the list items
  var aArray = []; // create the empty aArray
  for (var i=0; i < aChildren.length; i++) {
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href');
      aArray.push(ahref);
  } // this for loop fills the aArray with attribute href values

  $(window).scroll(function(){
      var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();

      for (var i=0; i < aArray.length; i++) {
          var theID = aArray[i];
          var divPos = $(theID).offset().top; // get the offset of the div from the top of page
          var divHeight = $(theID).height(); // get the height of the div in question
          if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
              $("a[href='" + theID + "']").addClass("active");
          } else {
              $("a[href='" + theID + "']").removeClass("active");
          }
      }

      if(windowPos + windowHeight == docHeight) {
          if (!$("nav li:last-child a").hasClass("active")) {
              var navActiveCurrent = $(".active").attr("href");
              $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
              $("nav li:last-child a").addClass("active");
          }
      }
  });

  // menuButton - action
  jQuery("#menu").click(changeClass);

  function changeClass() {
     $(this).toggleClass("menuButton-close");
     $('body, html').toggleClass("menuOpened");
     $('nav').toggleClass("close");
     //$('header').toggleClass("fixed absolute");
  }

  jQuery("nav a").click(closeNav);

  function closeNav() {
     $('#menu').toggleClass("menuButton-close");
     $('body, html').toggleClass("menuOpened");
     $('nav').toggleClass("close");
     //$('header').toggleClass("fixed absolute");
  }

  // works - grid
  $('.works').isotope({
    itemSelector: '.worksCell',
    //layoutMode: 'fitRows',
    percentPosition: true,
    masonry: {
      columnWidth: '.worksCell'
    }
  });

})(jQuery, window, document);
