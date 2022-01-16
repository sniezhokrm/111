const menuHamburger = () => {

  const menu = document.querySelector('[data-toggle-id="hamburger"]');
  const btn = document.querySelector('#hamburger');

  function toggleMenu() {
    if (window.getComputedStyle(menu).height == '0px') {
      btn.style.boxShadow = '0 0 0 0.25rem';
      menu.style.height = '160px';
    } else {
      btn.style.boxShadow = 'none';
      menu.style.height = '0px';
    }
  }
  $('#hamburger').click(function() {
    toggleMenu();
  });
  $('.container-fluid').on('mouseleave', function() {
    menu.style.height = '0px';
    btn.style.boxShadow = 'none';
  });
};
export default menuHamburger;
