
const call = (delay) => {
  const callIcon = document.querySelector('.call');
  setTimeout(() => {
    callIcon.style.bottom = '5%';
  }, delay);
};

export default call;
