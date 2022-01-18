
const call = (delay) => {
  const callIcon = document.querySelector('.call');
  setTimeout(() => {
    callIcon.style.bottom = '9%';
  }, delay);
};

export default call;
