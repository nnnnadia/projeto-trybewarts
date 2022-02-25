const btnLogin = document.querySelector('#login-btn');
const isChecked = document.querySelector('#agreement');

function validadeLogin() {
  const emailLogin = document.querySelector('#email').value;
  const passwordLogin = document.querySelector('#password').value;
  if (emailLogin === 'tryber@teste.com' && passwordLogin === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validadeLogin);

function checkAgreement() {
  const btnSubmit = document.querySelector('#submit-btn');
  btnSubmit.toggleAttribute('disabled');
}
isChecked.addEventListener('click', checkAgreement);
