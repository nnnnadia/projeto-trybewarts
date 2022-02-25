const btnLogin = document.querySelector('#login-btn');
const isChecked = document.querySelector('#agreement');
const textarea = document.querySelector('#textarea');

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

function countText() {
  const counterElement = document.querySelector('#counter');
  const counter = 500 - textarea.textLength;
  counterElement.innerText = counter;
}

textarea.addEventListener('input', countText);
