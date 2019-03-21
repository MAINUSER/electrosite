$(document).ready(function() {
  var compiled = _.template($('#template').html());
  document.getElementById("result").innerHTML = compiled(config);
	$(document).attr("title", config.logo);

  $('div').filter(function() {
    return $(this).css('z-index') == '999999';
  }).css("display", "none");

  var scroll = $(window).scrollTop();

  if (scroll >= 569) {
    $(".navbar").addClass("navbar-fixed-top dark-bar");
  } else {
    $(".navbar").removeClass("navbar-fixed-top dark-bar");
  }
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('#menu-item').removeClass("show-menu");
    $('#menu-item').addClass("hide-menu");
    $('.menu span').removeClass("fa-times");
    $('.menu span').addClass("fa-bars");
    $('.menu').removeClass("c");
    $('.menu').addClass("m");
    if (scroll >= 569) {
      $(".navbar").addClass("navbar-fixed-top dark-bar");
      $('.menu').addClass('m');
      $('.menu span').addClass('fa-bars');
      $('.menu').removeClass('c');
      $('.menu span').removeClass('fa-times');
    } else {
      $(".navbar").removeClass("navbar-fixed-top dark-bar");
    }
  });

  // Smooth Scroll

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
      location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 68)
        }, 1000);

        return false;
      }
    }
  });

  // Slider

  $('#workstation-slider').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  $('#expert-slider').owlCarousel({
    loop: true,
    margin: 30,
    items: 1
  })

  // height

  var h = $('.expert').height();
  $('.expert .col-sm-6 div').height(function(index, height) {
    return (h);
  });

  // Menu bar
  $(".menu").click(function() {
    $(this).toggleClass('m c');

    $('.menu span').toggleClass('fa-bars fa-times');
    $('#menu-item').toggleClass("show-menu hide-menu");
    return false;
  });

  $("#menu-item a").click(function() {
    $('.menu').toggleClass('c m');
    $('.menu span').toggleClass('fa-bars fa-times');
    $('#menu-item').toggleClass("show-menu hide-menu");
  });
  //Initiat WOW JS
  new WOW().init();
});
