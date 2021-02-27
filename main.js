import './src/css/bootstrap.css'
import './src/css/style.css'

import './src/js/jquery.waypoints.min.js'
import './src/js/progresscircle.js'

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());
// sticky nav
$('.js--sticky-nav').waypoint(
  function (direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  },
  {
    offset: '25%',
  }
);
//init slick slider
$('.slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:
    '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
  nextArrow:
    '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// responsive nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-nav');
const links = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});