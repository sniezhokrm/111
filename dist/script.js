/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/animation.js":
/*!****************************************!*\
  !*** ./src/js/components/animation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const animation = function () {
  let selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // Получаем нужный элемент
  const element = document.querySelectorAll(selector);
  element.forEach((item, i) => {
    const visible = function (target) {
      // Все позиции элемента
      const targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
            // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

      if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right) {
        // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        $(target).addClass('animate__animated', style);
      } else {
        // Если элемент не видно, то запускаем этот код
        $(target).removeClass(style);
      }
    }; // Запускаем функцию при прокрутке страницы


    window.addEventListener('scroll', function () {
      if (repeat || !item.classList.contains('animate__animated')) {
        visible(item);
      }
    }); // А также запустим функцию сразу. А то вдруг, элемент изначально видно

    visible(item);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ }),

/***/ "./src/js/components/call.js":
/*!***********************************!*\
  !*** ./src/js/components/call.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const call = delay => {
  const callIcon = document.querySelector('.call');
  setTimeout(() => {
    callIcon.style.bottom = '9%';
  }, delay);
};

/* harmony default export */ __webpack_exports__["default"] = (call);

/***/ }),

/***/ "./src/js/components/checkNumInputs.js":
/*!*********************************************!*\
  !*** ./src/js/components/checkNumInputs.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkNumInputs = selector => {
  const numInputs = document.querySelectorAll(selector);
  numInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkNumInputs);

/***/ }),

/***/ "./src/js/components/checkTextInputs.js":
/*!**********************************************!*\
  !*** ./src/js/components/checkTextInputs.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё a-z]/ig)) {
        e.preventDefault();
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/components/forms.js":
/*!************************************!*\
  !*** ./src/js/components/forms.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input, textarea');
  const message = {
    loading: 'Загрузка...',
    success: "Дякую! Скоро ми з вами зв'яжимось",
    failure: 'Щось пішло не так...',
    spinner: 'assets/icons/spinner.gif',
    ok: 'assets/icons/ok.png',
    fail: 'assets/icons/fail.png'
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.querySelector('[name="name"]').value;
      const phone = document.querySelector('[name="phone"]').value;
      const email = document.querySelector('#email').value;
      const messageInput = document.querySelector('[name="message"]').value;
      document.querySelector('.modal-header').style.display = 'none';
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      Email.send({
        Host: "smtp.gmail.com",
        Username: "sniezhokrm@gmail.com",
        Password: "hbefewnphdaktsnu",
        To: 'sniezhokrm@gmail.com',
        From: "sniezhokrm@gmail.com",
        Subject: `${name} send you mail`,
        Body: `User - ${name}, with mobile number -  ${phone}
           and email - ${email} send you message -  ${messageInput}`
      }).then(res => {
        if (res == 'OK') {
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        } else {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
          $('.modal').fadeOut(500);
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
          document.querySelector('.modal-header').style.display = 'block';
        }, 2000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/components/menu-hamburger.js":
/*!*********************************************!*\
  !*** ./src/js/components/menu-hamburger.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menuHamburger = () => {
  const menu = document.querySelector('[data-toggle-id="hamburger"]');
  const btn = document.querySelector('#hamburger');

  function toggleMenu() {
    if (window.getComputedStyle(menu).height == '0px') {
      document.querySelector('.navbar-nav').style.display = 'block';
      btn.style.boxShadow = '0 0 0 0.25rem';
      menu.style.height = '160px';
    } else {
      btn.style.boxShadow = 'none';
      menu.style.height = '0px';
      setTimeout(() => document.querySelector('.navbar-nav').style.display = 'none', 700);
    }
  }

  $('#hamburger').click(function () {
    toggleMenu();
  });
  $('.container-fluid').on('mouseleave', function () {
    if (window.getComputedStyle(menu).height !== '0px') {
      btn.style.boxShadow = 'none';
      menu.style.height = '0px';
      setTimeout(() => document.querySelector('.navbar-nav').style.display = 'none', 700);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menuHamburger);

/***/ }),

/***/ "./src/js/components/scrolling.js":
/*!****************************************!*\
  !*** ./src/js/components/scrolling.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  const viewHight = document.documentElement.clientHeight;
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > viewHight) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
      upElem.style.opacity = '1';
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
      upElem.style.opacity = '0';
    }
  }); // Scrolling with raf

  let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.3;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  }); // Pure js scrolling
  // const element = document.documentElement,
  //       body = document.body;
  // const calcScroll = () => {
  //     upElem.addEventListener('click', function(event) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //         if (this.hash !== '') {
  //             event.preventDefault();
  //             let hashElement = document.querySelector(this.hash),
  //                 hashElementTop = 0;
  //             while (hashElement.offsetParent) {
  //                 hashElementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }
  //             hashElementTop = Math.round(hashElementTop);
  //             smoothScroll(scrollTop, hashElementTop, this.hash);
  //         }
  //     });
  // };
  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //         prevScrollTop,
  //         speed;
  //     if (to > from) {
  //         speed = 30;
  //     } else {
  //         speed = -30;
  //     }
  //     let move = setInterval(function() {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //         if (
  //             prevScrollTop === scrollTop ||
  //             (to > from && scrollTop >= to) ||
  //             (to < from && scrollTop <= to)
  //         ) {
  //             clearInterval(move);
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //         } else {
  //             body.scrollTop += speed;
  //             element.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     }, timeInterval);
  // };
  // calcScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu-hamburger */ "./src/js/components/menu-hamburger.js");
/* harmony import */ var _components_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scrolling */ "./src/js/components/scrolling.js");
/* harmony import */ var _components_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/call */ "./src/js/components/call.js");
/* harmony import */ var _components_checkNumInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkNumInputs */ "./src/js/components/checkNumInputs.js");
/* harmony import */ var _components_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkTextInputs */ "./src/js/components/checkTextInputs.js");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forms */ "./src/js/components/forms.js");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/animation */ "./src/js/components/animation.js");







document.addEventListener("DOMContentLoaded", function (event) {
  'use strict';

  Object(_components_animation__WEBPACK_IMPORTED_MODULE_6__["default"])('.navbar-brand img', "animate__heartBeat", false);
  Object(_components_animation__WEBPACK_IMPORTED_MODULE_6__["default"])('.benefits-item img', "animate__bounce");
  Object(_components_animation__WEBPACK_IMPORTED_MODULE_6__["default"])('.footer-item img', "animate__heartBeat", false);
  Object(_components_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('.modal-name');
  Object(_components_checkNumInputs__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal-phone');
  Object(_components_call__WEBPACK_IMPORTED_MODULE_2__["default"])(5000);
  Object(_components_menu_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_components_scrolling__WEBPACK_IMPORTED_MODULE_1__["default"])('.pageup');
  Object(_components_forms__WEBPACK_IMPORTED_MODULE_5__["default"])();
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map