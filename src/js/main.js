import menuHamburger from './components/menu-hamburger';
import scrolling from './components/scrolling';
import call from './components/call';
import checkNumInputs from './components/checkNumInputs';
import checkTextInputs from './components/checkTextInputs';
import forms from './components/forms';
import animation from './components/animation';

document.addEventListener("DOMContentLoaded", function(event) {

  'use strict';

  animation('.navbar-brand img', "animate__heartBeat", false);
  animation('.benefits-item img', "animate__bounce");
  animation('.footer-item img', "animate__heartBeat", false);
  checkTextInputs('.modal-name');
  checkNumInputs('.modal-phone');
  call(5000);
  menuHamburger();
  scrolling('.pageup');
  forms();

  $('[data-on="carousel-1"]').createCarousel({
    slides: {
      0: "assets/img/bilboard-1-min.jpg",
      1: "assets/img/bilboard-2-min.jpg",
      2: "assets/img/bilboard-3-min.jpg"
    },
    desc: {
      0: "Напрямок Тернопіль-Чернівці",
      1: "Виїзд з села Острів",
      2: "Нічне освітлення білборду"
    },
    autoPlay: 4000,
    length: 3
  });


  $('[data-toggle="modal"]').modal();

});
