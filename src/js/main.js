import menuHamburger from './components/menu-hamburger';
import scrolling from './components/scrolling';
import call from './components/call';
import checkNumInputs from './components/checkNumInputs';
import checkTextInputs from './components/checkTextInputs';
import forms from './components/forms';

document.addEventListener("DOMContentLoaded", function(event) {

  'use strict';

  $('.navbar-brand').click((e) => e.preventDefault());

  checkTextInputs('.modal-name');
  checkNumInputs('.modal-phone');
  call(1000);
  menuHamburger();
  scrolling('.pageup');
  forms();

  $('[data-on="carousel-1"]').createCarousel({
    slides: {
      0: "/assets/img/bilboard-1-min.jpg",
      1: "/assets/img/bilboard-2-min.jpg",
      2: "/assets/img/bilboard-3-min.jpg"
    },
    autoPlay: 4000,
    length: 3
  });

  $('[data-toggle="modal"]').modal(); //modal write in HTML


});
