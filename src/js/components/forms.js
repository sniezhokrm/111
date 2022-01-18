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
    item.addEventListener('submit', (e) => {
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
        })
        .then(res => {
          if (res == 'OK') {
            statusImg.setAttribute('src', message.ok);
            textMessage.textContent = message.success;
          } else {
            statusImg.setAttribute('src', message.fail);
            textMessage.textContent = message.failure;
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
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

export default forms;
