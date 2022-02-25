const btnLogin = document.querySelector('#login-btn');

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
