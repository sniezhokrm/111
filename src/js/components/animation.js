const animation = (selector = "", style = "", repeat = true) => {

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
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      $(target).addClass('animate__animated', style);
    } else {
      // Если элемент не видно, то запускаем этот код
      $(target).removeClass(style);
    }
  };

  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function() {
    if (repeat || !item.classList.contains('animate__animated')) {
      visible(item);
    }
  });

  // А также запустим функцию сразу. А то вдруг, элемент изначально видно
  visible (item);
});


};

export default animation;
